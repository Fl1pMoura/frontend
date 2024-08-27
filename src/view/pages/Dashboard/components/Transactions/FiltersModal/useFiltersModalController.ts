import { useState } from "react";
import { useBankAccounts } from "../../../../../../app/hooks/useBankAccounts";

export function useFiltersModalController(){
  const currentYear = new Date().getFullYear()
  const [selectedBankAccountId, setSelectedBankAccountId] = useState<undefined | string>(undefined)
  const [selectedYear, setSelectedYear] = useState<number>(currentYear)
  const {accounts} = useBankAccounts();

  function handleSelectedBankAccount(bankAccountId: string){
    setSelectedBankAccountId(prevState => prevState === bankAccountId ? undefined : bankAccountId);
  }

  function handleSelectedYear(step: number){
    setSelectedYear(prevState => {
      const newYear = prevState + step;
      return newYear > currentYear ? currentYear : newYear;
    });
  }

  return {selectedBankAccountId, handleSelectedBankAccount, selectedYear, handleSelectedYear, accounts}
}
