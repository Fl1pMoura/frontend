import { useDashboard } from "../../components/DashboardContext/useDashboard";

export function useNewTransactionModal(){
  const { toggleTransactionModalVisility, isTransactionModalVisible, newTransactionType } = useDashboard();

  return { toggleTransactionModalVisility, isTransactionModalVisible, newTransactionType }
}
