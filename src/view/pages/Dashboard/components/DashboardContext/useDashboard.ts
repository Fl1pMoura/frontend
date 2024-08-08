import { useContext } from "react";
import { DashboardContext, DashboardContextValue } from ".";

export function useDashboard(): DashboardContextValue {
  return useContext(DashboardContext);
}
