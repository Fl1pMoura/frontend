import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useMemo } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
import { useBankAccounts } from "../../../../../app/hooks/useBankAccounts";
import { useCategories } from "../../../../../app/hooks/useCategories";
import { transactionsService } from "../../../../../app/services/transactionsService";
import { createTransactionParams } from "../../../../../app/services/transactionsService/create";
import { useDashboard } from "../../components/DashboardContext/useDashboard";

const schema = z.object({
  value: z.union([
    z.string().min(1, "Valor é obrigatório"),
    z.number(),
  ]),
  name: z.string().min(1, "Nome é obrigatório"),
  categoryId: z.string().min(1, "Categoria obrigatória"),
  bankAccountId: z.string().min(1, "Categoria obrigatória"),
  date: z.date(),
})
type FormData = z.infer<typeof schema>

export function useNewTransactionModal(){
  const { toggleTransactionModalVisility, isTransactionModalVisible, newTransactionType } = useDashboard();
  const isEditModal = false;

  const {
    handleSubmit: hookFormHandleSubmit,
    register,
    formState: { errors },
    control,
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const queryClient = useQueryClient();
  const { accounts, isFetching: isLoadingBankAccounts } = useBankAccounts()
  const { categories: categoriesList, isFetching: isLoadingCategories } = useCategories()
  const { mutateAsync, isPending: isLoadingTransactions } = useMutation({
    mutationFn: async (data: createTransactionParams) => {
      return transactionsService.create(data);
    },
  });

  const categories = useMemo(() => {
    return categoriesList.filter(category => category.type === newTransactionType)
  } ,[categoriesList, newTransactionType])

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    try {
      const updatedData = {
        ...data,
        value: Number(data.value),
        type: newTransactionType!,
        date: data.date.toISOString()
      };

      await mutateAsync(updatedData);

      queryClient.invalidateQueries({ queryKey: ["transactions"] });

      if(isEditModal){
        toast.success(newTransactionType === "EXPENSE"?"Despesa alterada com sucesso!":"Receita alterada com sucesso!");
      }else{
        toast.success(newTransactionType === "EXPENSE"?"Despesa cadastrada com sucesso!":"Receita cadastrada com sucesso!");
      }
      toggleTransactionModalVisility();
      reset();
    } catch {
      if(isEditModal){
        toast.error(newTransactionType === "EXPENSE"?"Houve um erro ao alterar sua despesa!":"Houve um erro ao alterar sua despesa!");
      }else{
        toast.error(newTransactionType === "EXPENSE"?"Houve um erro ao cadastrar sua despesa!":"Houve um erro ao cadastrar sua receita!");
      }
    }
  })



  return { toggleTransactionModalVisility, isTransactionModalVisible, newTransactionType, register, control, reset, errors, handleSubmit, accounts, isLoadingBankAccounts, isLoadingCategories, categories, isLoadingTransactions }
}
