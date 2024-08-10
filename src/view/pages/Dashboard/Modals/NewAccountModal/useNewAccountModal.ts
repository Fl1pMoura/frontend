import { useDashboard } from "../../components/DashboardContext/useDashboard";

export function useNewAccountModal(){
  const { toggleNewAccountModalVisility, isNewAccountModalVisible} = useDashboard();

  return { toggleNewAccountModalVisility, isNewAccountModalVisible }
}
