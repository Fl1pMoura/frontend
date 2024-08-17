import { createContext, useCallback, useEffect, useState } from "react";

export interface DashboardContextValue {
  areValuesVisible: boolean,
  toggleValuesVisibility(value?: boolean): void,
  isNewAccountModalVisible: boolean,
  isTransactionModalVisible: boolean,
  newTransactionType: "INCOME" | "EXPENSE" | null,
  toggleNewAccountModalVisibility(isEditing?: boolean): void,
  toggleTransactionModalVisility(type: "INCOME" | "EXPENSE"): void,
  isEditing?: boolean,
}

export const DashboardContext = createContext({} as DashboardContextValue);

export function DashboardProvider({ children }: { children: React.ReactNode }) {
  const [areValuesVisible, setAreValuesVisible] = useState(() => {
    const savedValue = localStorage.getItem("areValuesVisible");
    return savedValue ? JSON.parse(savedValue) : true;
  });
  const [isNewAccountModalVisible, setIsNewAccountModalVisible] = useState(false)
  const [isEditing, setIsEditing] = useState(false);
  const [isTransactionModalVisible, setIsTransactionModalVisible] = useState(false)
  const [newTransactionType, setNewTransactionType] = useState<"INCOME" | "EXPENSE" | null>(null)

  const toggleValuesVisibility = useCallback(() => {
    setAreValuesVisible((prevState: boolean) => !prevState);
  }, []);

  const toggleNewAccountModalVisibility = useCallback((isEditing?: boolean) => {
    setIsNewAccountModalVisible((prevState: boolean) => !prevState);
    if (isEditing !== undefined) {
      setIsEditing(isEditing);
    }
  }, []);

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
       toggleNewAccountModalVisibility,
       isTransactionModalVisible,
       isEditing,
       toggleTransactionModalVisility }}>
      {children}
    </DashboardContext.Provider>
  );
}
