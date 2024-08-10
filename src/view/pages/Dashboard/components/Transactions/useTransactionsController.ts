import { useState } from "react";
import { useDashboard } from "../DashboardContext/useDashboard";

export function useTransactionsController(){
  const [isModalVisible, setIsModalVisible] = useState(true)
  const { areValuesVisible } = useDashboard();

  function handleModalVisibility(){
    setIsModalVisible(prevStatate => !prevStatate)
  }

  return {areValuesVisible, isInitialFetching: false, isFetching: false ,transactions: [1], isModalVisible, handleModalVisibility}
}
