import { createContext, useCallback, useEffect, useState } from "react";
import { BankAccounts } from "../../../../../app/entities/BankAccount";

export interface DashboardContextValue {
  areValuesVisible: boolean,
  toggleValuesVisibility(value?: boolean): void,
  isNewAccountModalVisible: boolean,
  isTransactionModalVisible: boolean,
  newTransactionType: "INCOME" | "EXPENSE" | null,
  toggleNewAccountModalVisibility(bankAccount?: BankAccounts): void,
  toggleTransactionModalVisility(type?: "INCOME" | "EXPENSE"): void,
  accountBeingEdited: null | BankAccounts
  isEditModal: boolean
}

export const DashboardContext = createContext({} as DashboardContextValue);

export function DashboardProvider({ children }: { children: React.ReactNode }) {
  const [areValuesVisible, setAreValuesVisible] = useState(() => {
    const savedValue = localStorage.getItem("areValuesVisible");
    return savedValue ? JSON.parse(savedValue) : true;
  });
  const [isNewAccountModalVisible, setIsNewAccountModalVisible] = useState(false)
  const [isEditModal, setIsEditModal] = useState(false)
  const [isTransactionModalVisible, setIsTransactionModalVisible] = useState(false)
  const [accountBeingEdited, setAccountBeingEdited] = useState<null | BankAccounts>(null);
  const [newTransactionType, setNewTransactionType] = useState<"INCOME" | "EXPENSE" | null>(null)

  const toggleValuesVisibility = useCallback(() => {
    setAreValuesVisible((prevState: boolean) => !prevState);
  }, []);

  const toggleNewAccountModalVisibility = useCallback((bankAccount?: BankAccounts) => {
    setIsNewAccountModalVisible((prevState: boolean) => !prevState);
    setAccountBeingEdited(null)
    setIsEditModal(false)
    if(bankAccount){
      setIsEditModal(true)
      setAccountBeingEdited(bankAccount)
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
       isTransactionModalVisible,
       toggleTransactionModalVisility,
       accountBeingEdited,
       isEditModal,
       toggleNewAccountModalVisibility
        }}>
      {children}
    </DashboardContext.Provider>
  );
}
