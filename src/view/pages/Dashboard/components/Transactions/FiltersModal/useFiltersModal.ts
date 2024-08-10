import { useState } from "react";

export function useFiltersModal(){
  const currentYear = new Date().getFullYear()
  const [selectedBankAccountId, setSelectedBankAccountId] = useState<null | string>(null)
  const [selectedYear, setSelectedYear] = useState<number>(currentYear)

  function handleSelectedBankAccount(bankAccountId: string){
    setSelectedBankAccountId(prevState => prevState === bankAccountId ? null : bankAccountId);
  }

  function handleSelectedYear(step: number){
    setSelectedYear(prevState => {
      const newYear = prevState + step;
      return newYear > currentYear ? currentYear : newYear;
    });
  }

  return {selectedBankAccountId, handleSelectedBankAccount, selectedYear, handleSelectedYear}
}
