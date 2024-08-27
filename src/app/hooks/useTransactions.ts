import { useQuery } from "@tanstack/react-query";
import { transactionsService } from "../services/transactionsService";
import { GetAllTransactionsResponse, TransactionsFilters } from "../services/transactionsService/getAll";

export function useTransactions(filters: TransactionsFilters){
  const { data, isFetching, isLoading, refetch } = useQuery<GetAllTransactionsResponse>({
    queryKey: ['transactions'],
    queryFn: () => transactionsService.getAll(filters)
  })

  return {transactions: data ?? [], isFetching, isInitialFetching: isLoading, refetchTransactions :refetch}
}
