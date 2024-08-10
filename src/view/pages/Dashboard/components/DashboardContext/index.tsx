import { createContext, useCallback, useEffect, useState } from "react";

export interface DashboardContextValue {
  areValuesVisible: boolean,
  toggleValuesVisibility(): void,
  isNewAccountModalVisible: boolean,
  toggleNewAccountModalVisility(): void,
}

export const DashboardContext = createContext({} as DashboardContextValue);

export function DashboardProvider({ children }: { children: React.ReactNode }) {
  const [areValuesVisible, setAreValuesVisible] = useState(() => {
    const savedValue = localStorage.getItem("areValuesVisible");
    return savedValue ? JSON.parse(savedValue) : true;
  });
  const [isNewAccountModalVisible, setIsNewAccountModalVisible] = useState(false)

  const toggleValuesVisibility = useCallback(() => {
    setAreValuesVisible((prevState: boolean) => !prevState);
  }, []);

  function toggleNewAccountModalVisility(){
    setIsNewAccountModalVisible((prevState: boolean) => !prevState)
  }

  useEffect(() => {
    localStorage.setItem("areValuesVisible", JSON.stringify(areValuesVisible));
  }, [areValuesVisible]);

  return (
    <DashboardContext.Provider value={{ areValuesVisible, toggleValuesVisibility, isNewAccountModalVisible, toggleNewAccountModalVisility }}>
      {children}
    </DashboardContext.Provider>
  );
}
