import { useEffect, useState } from "react";
import { useTransactions } from "../../../../../app/hooks/useTransactions";
import { TransactionsFilters } from "../../../../../app/services/transactionsService/getAll";
import { useDashboard } from "../DashboardContext/useDashboard";

export function useTransactionsController(){
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [filters, setFilters] = useState<TransactionsFilters>({month: new Date().getMonth(), year: new Date().getFullYear()});

  const { areValuesVisible } = useDashboard();

  function handleChangeFilters<TFilter extends keyof TransactionsFilters>(filter: TFilter){
    return (value: TransactionsFilters[TFilter]) => {
      if (value === filters[filter]) return;
      setFilters(prevState => ({
        ...prevState,
        [filter]: value,
      }))
    }
  }

  function handleApplyFilters({bankAccountId, year}: {bankAccountId: string | undefined , year: number}){
    handleChangeFilters("bankAccountId")(bankAccountId);
    handleChangeFilters("year")(year);
    setIsModalVisible(false);
  }

  const { transactions, isFetching, isInitialFetching, refetchTransactions } = useTransactions(filters);

  useEffect(() => {
    refetchTransactions();
  }, [filters, refetchTransactions])

  function handleModalVisibility(){
    setIsModalVisible(prevStatate => !prevStatate)
  }

  return {areValuesVisible, isInitialFetching, isFetching ,transactions, isModalVisible, handleModalVisibility, handleChangeFilters, filters, handleApplyFilters}
}
