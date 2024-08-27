import { createContext, useCallback, useEffect, useState } from "react";
import { BankAccounts } from "../../../../../app/entities/BankAccount";
import { Transactions } from "../../../../../app/entities/Transactions";

export interface DashboardContextValue {
  areValuesVisible: boolean,
  toggleValuesVisibility(value?: boolean): void,
  isNewAccountModalVisible: boolean,
  isTransactionModalVisible: boolean,
  newTransactionType: "INCOME" | "EXPENSE" | null,
  toggleNewAccountModalVisibility(bankAccount?: BankAccounts): void,
  toggleTransactionModalVisility(options?: { type?: "INCOME" | "EXPENSE", transaction?: Transactions | null }): void,
  accountBeingEdited: null | BankAccounts
  transactionBeingEdited: null | Transactions
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
  const [transactionBeingEdited, setTransactionBeingEdited] = useState<null | Transactions>(null);
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

  const toggleTransactionModalVisility = useCallback(({ type = "INCOME", transaction }: { type?: "INCOME" | "EXPENSE", transaction?: Transactions } = {}) => {
    setIsTransactionModalVisible(prevState => !prevState);
    setTransactionBeingEdited(null);
    setNewTransactionType(type);
    if (transaction) {
        setIsEditModal(true);
        setTransactionBeingEdited(transaction);
    } else {
        setIsEditModal(false);
    }
}, []);

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
       transactionBeingEdited,
       toggleNewAccountModalVisibility
        }}>
      {children}
    </DashboardContext.Provider>
  );
}
