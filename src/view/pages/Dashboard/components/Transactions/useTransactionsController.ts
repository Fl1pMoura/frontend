import { useDashboard } from "../DashboardContext/useDashboard";

export function useTransactionsController(){
  const { areValuesVisible } = useDashboard();

  return {areValuesVisible, isInitialFetching: false, isFetching: false ,transactions: [1]}
}
