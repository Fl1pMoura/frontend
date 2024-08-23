import { useQuery } from "@tanstack/react-query";
import { transactionsService } from "../services/transactionsService";
import { GetAllTransactionsResponse } from "../services/transactionsService/getAll";

export function useTransactions(){
  const { data, isFetching, isLoading } = useQuery<GetAllTransactionsResponse>({
    queryKey: ['transactions'],
    queryFn: () => transactionsService.getAll({month: 7, year: 2024})
  })

  return {transactions: data ?? [], isFetching, isInitialFetching: isLoading}
}
