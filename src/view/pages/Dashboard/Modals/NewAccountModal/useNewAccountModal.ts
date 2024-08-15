import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
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

  const { handleSubmit: hookFormHandleSubmit, register, formState:{errors}, control} = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues:{
      color: "#7950F2"
    }
  });

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    console.log(data)
 })

  return { toggleNewAccountModalVisility, isNewAccountModalVisible, handleSubmit, register, errors, control }
}
