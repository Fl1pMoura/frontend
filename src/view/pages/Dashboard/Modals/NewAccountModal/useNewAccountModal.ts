import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
import { bankAccountService } from "../../../../../app/services/bankAccountService";
import { createParams } from "../../../../../app/services/bankAccountService/create";
import { useDashboard } from "../../components/DashboardContext/useDashboard";

const schema = z.object({
  initialBalance: z.string().min(1, "Saldo inicial é obrigatório"),
  name: z.string().min(1, "Nome da conta é obrigatório"),
  type: z.enum(["CHECKING","INVESTMENT", "CASH"]),
  color: z.string().min(1, "Cor é obrigatório")
})

type FormData = z.infer<typeof schema>

export function useNewAccountModal(){
  const { toggleNewAccountModalVisility, isNewAccountModalVisible} = useDashboard();

  const { handleSubmit: hookFormHandleSubmit, register, formState:{errors}, control, reset} = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues:{
      color: "#7950F2"
    }
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (data: createParams) => {
      return bankAccountService.create(data)
    }
  })

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    try {
      const updatedData = {
        ...data,
        initialBalance: Number(data.initialBalance)
      };

      await mutateAsync(updatedData);

      toast.success("Conta cadastrada com sucesso!")
      toggleNewAccountModalVisility(false)
      reset();
    } catch (error) {
      toast.error("Houve um erro ao cadastrar sua conta!")
    }
  });

  return { toggleNewAccountModalVisility, isNewAccountModalVisible, handleSubmit, register, errors, control, isPending }
}
