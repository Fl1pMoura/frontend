import { createContext, useCallback, useEffect, useState } from "react";

export interface DashboardContextValue {
  areValuesVisible: boolean,
  toggleValuesVisibility(): void,
  isNewAccountModalVisible: boolean,
  isTransactionModalVisible: boolean,
  newTransactionType: "INCOME" | "EXPENSE" | null,
  toggleNewAccountModalVisility(): void,
  toggleTransactionModalVisility(type: "INCOME" | "EXPENSE"): void,
}

export const DashboardContext = createContext({} as DashboardContextValue);

export function DashboardProvider({ children }: { children: React.ReactNode }) {
  const [areValuesVisible, setAreValuesVisible] = useState(() => {
    const savedValue = localStorage.getItem("areValuesVisible");
    return savedValue ? JSON.parse(savedValue) : true;
  });
  const [isNewAccountModalVisible, setIsNewAccountModalVisible] = useState(false)
  const [isTransactionModalVisible, setIsTransactionModalVisible] = useState(false)
  const [newTransactionType, setNewTransactionType] = useState<"INCOME" | "EXPENSE" | null>(null)

  const toggleValuesVisibility = useCallback(() => {
    setAreValuesVisible((prevState: boolean) => !prevState);
  }, []);

  const toggleNewAccountModalVisility = useCallback(() => {
    setIsNewAccountModalVisible((prevState: boolean) => !prevState)
  },[])

  const toggleTransactionModalVisility = useCallback((type: "INCOME" | "EXPENSE") => {
    setNewTransactionType(type)
    setIsTransactionModalVisible((prevState: boolean) => !prevState)
  }, [])

  useEffect(() => {
    localStorage.setItem("areValuesVisible", JSON.stringify(areValuesVisible));
  }, [areValuesVisible]);

  return (
    <DashboardContext.Provider value={
      { areValuesVisible,
        newTransactionType,
       toggleValuesVisibility,
       isNewAccountModalVisible,
       toggleNewAccountModalVisility,
       isTransactionModalVisible,
       toggleTransactionModalVisility }}>
      {children}
    </DashboardContext.Provider>
  );
}
