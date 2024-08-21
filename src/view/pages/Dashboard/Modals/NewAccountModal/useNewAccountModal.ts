import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
import { bankAccountService } from "../../../../../app/services/bankAccountService";
import { createBankAccountParams } from "../../../../../app/services/bankAccountService/create";
import { useDashboard } from "../../components/DashboardContext/useDashboard";

const schema = z.object({
  initialBalance: z.union([
    z.string().min(1, "Saldo inicial é obrigatório"),
    z.number(),
  ]),
  name: z.string().min(1, "Nome da conta é obrigatório"),
  type: z.enum(["CHECKING","INVESTMENT", "CASH"]),
  color: z.string().min(1, "Cor é obrigatório")
})

type FormData = z.infer<typeof schema>

export function useNewAccountModal() {
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(true)
  const queryClient = useQueryClient();
  const {
    toggleNewAccountModalVisibility,
    isNewAccountModalVisible,
    isEditModal,
    accountBeingEdited,
  } = useDashboard();

  const {
    handleSubmit: hookFormHandleSubmit,
    register,
    formState: { errors },
    control,
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    if (accountBeingEdited) {
      reset({
        color: accountBeingEdited.color || "#7950F2",
        initialBalance: accountBeingEdited.initialBalance,
        name: accountBeingEdited.name,
        type: accountBeingEdited.type,
      });
    }else{
      reset({
        color: "#7950F2",
        initialBalance: 0,
        name: "",
        type: "CHECKING",
      });
    }
  }, [accountBeingEdited, reset]);

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (data: createBankAccountParams) => {
      if(isEditModal){
        return bankAccountService.update({
          ...data,
          id: accountBeingEdited!.id
        });
      }
      return bankAccountService.create(data);
    },
  });

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    try {
      const updatedData = {
        ...data,
        initialBalance: Number(data.initialBalance),
      };

      await mutateAsync(updatedData);

      queryClient.invalidateQueries({ queryKey: ["bankAccounts"] });
      if(isEditModal){
        toast.success("A conta foi editada com sucesso!");
      }else{
        toast.success("Conta cadastrada com sucesso!");
      }
      toggleNewAccountModalVisibility();
      reset();
    } catch (error) {
      if(isEditModal){
        toast.error("Houve um erro ao realizar alterações!");
      }else{
        toast.error("Houve um erro ao cadastrar sua conta!");
      }
    }
  });

  function toggleDeleteModalVisibility() {
    setIsDeleteModalVisible(prevState => !prevState)
  }

  return {
    isEditModal,
    toggleNewAccountModalVisibility,
    isNewAccountModalVisible,
    handleSubmit,
    register,
    errors,
    control,
    isPending,
    toggleDeleteModalVisibility,
    isDeleteModalVisible
  };
}
