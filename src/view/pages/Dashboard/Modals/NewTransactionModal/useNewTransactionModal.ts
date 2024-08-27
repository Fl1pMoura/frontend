import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect, useMemo, useState } from "react";
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
  bankAccountId: z.string().min(1, "Conta obrigatória"),
  date: z.date(),
})
type FormData = z.infer<typeof schema>

export function useNewTransactionModal(){
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false)
  const { toggleTransactionModalVisility, isTransactionModalVisible, newTransactionType, isEditModal, transactionBeingEdited } = useDashboard();

  const {
    handleSubmit: hookFormHandleSubmit,
    register,
    formState: { errors },
    control,
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      categoryId: transactionBeingEdited?.categoryId,
    }
  });


  const queryClient = useQueryClient();
  const { accounts, isFetching: isLoadingBankAccounts } = useBankAccounts()
  const { categories: categoriesList, isFetching: isLoadingCategories } = useCategories()
  const { mutateAsync, isPending: isLoadingTransactions } = useMutation({
    mutationFn: async (data: createTransactionParams) => {
      if (isEditModal){
        return transactionsService.update({...data, id: transactionBeingEdited!.id});
      }
      return transactionsService.create(data);
    },

  });



  function toggleDeleteModalVisibility() {
    setIsDeleteModalVisible(prevState => !prevState)
  }

  const { mutateAsync: removeTransaction, isPending: isPendingDelete } = useMutation({
    mutationFn: async (transactionId: string) => {
      if (isEditModal) {
        return transactionsService.remove(transactionId);
      }
    },
  });

  async function handleConfirmDeleteTransaction(){
    try {
      await removeTransaction(transactionBeingEdited!.id);

      queryClient.invalidateQueries({ queryKey: ["transactions"] });

      toast.success(`A ${transactionBeingEdited?.type === "EXPENSE"?'despesa':'receita'} foi deletada com sucesso!`);
      toggleTransactionModalVisility();
      reset();
    } catch {
        toast.error(`Houve um erro ao deletar a ${transactionBeingEdited?.type === "EXPENSE"?'despesa':'receita'}!`);
    }
  }

  const categories = useMemo(() => {
    return categoriesList.filter(category => category.type === newTransactionType)
  } ,[categoriesList, newTransactionType])

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    try {
      const updatedData = {
        ...data,
        value: Number(data.value),
        type: transactionBeingEdited!.type,
        date: data.date.toISOString()
      };

      await mutateAsync(updatedData);

      queryClient.invalidateQueries({ queryKey: ["transactions"] });
      queryClient.invalidateQueries({ queryKey: ["bankAccounts"] });

      if(isEditModal){
        toast.success(newTransactionType === "EXPENSE"?"Despesa alterada com sucesso!":"Receita alterada com sucesso!");
      }else{
        toast.success(newTransactionType === "EXPENSE"?"Despesa cadastrada com sucesso!":"Receita cadastrada com sucesso!");
      }
      toggleTransactionModalVisility();
      reset();
    } catch(e){
      console.log(e);
      if(isEditModal){
        toast.error(newTransactionType === "EXPENSE"?"Houve um erro ao alterar sua despesa!":"Houve um erro ao alterar sua receita!");
      }else{
        toast.error(newTransactionType === "EXPENSE"?"Houve um erro ao cadastrar sua despesa!":"Houve um erro ao cadastrar sua receita!");
      }

    }
  })

useEffect(() => {
  if (transactionBeingEdited) {
    reset({
      bankAccountId: transactionBeingEdited.bankAccountId,
      categoryId: transactionBeingEdited.categoryId,  // Certifique-se de que isso seja passado corretamente
      date: new Date(transactionBeingEdited.date),
      name: transactionBeingEdited.name,
      value: transactionBeingEdited.value,
    });
  } else {
    reset({
      bankAccountId: '',
      categoryId: '',
      date: new Date(),
      name: '',
      value: '',
    });
  }
}, [transactionBeingEdited, reset]);


  return { toggleTransactionModalVisility, isTransactionModalVisible, newTransactionType, register, control, reset, errors, handleSubmit, accounts, isLoadingBankAccounts, isLoadingCategories, categories, isLoadingTransactions, transactionBeingEdited, isEditModal, isDeleteModalVisible, toggleDeleteModalVisibility, isPendingDelete, handleConfirmDeleteTransaction}
}
