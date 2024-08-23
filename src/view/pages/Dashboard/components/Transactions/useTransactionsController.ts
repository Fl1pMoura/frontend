import { useState } from "react";
import { useTransactions } from "../../../../../app/hooks/useTransactions";
import { useDashboard } from "../DashboardContext/useDashboard";

export function useTransactionsController(){
  const [isModalVisible, setIsModalVisible] = useState(false)

  const { areValuesVisible } = useDashboard();

  const { transactions } = useTransactions();

  function handleModalVisibility(){
    setIsModalVisible(prevStatate => !prevStatate)
  }

  return {areValuesVisible, isInitialFetching: false, isFetching: false ,transactions, isModalVisible, handleModalVisibility, }
}
