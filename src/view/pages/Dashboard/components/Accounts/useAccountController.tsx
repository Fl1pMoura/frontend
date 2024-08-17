import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import { useWindowWidth } from "../../../../../app/hooks/useWindowWidth";
import { bankAccountService } from "../../../../../app/services/bankAccountService";
import { GetAllBankAccountResponse } from "../../../../../app/services/bankAccountService/getAll";
import { useDashboard } from "../DashboardContext/useDashboard";

export function useAccountController(){
  const [sliderState, setSliderState] = useState({
    isBeginning: true,
    isEnd: false,
  })
  const windowWidth = useWindowWidth();

  const { areValuesVisible, toggleValuesVisibility} = useDashboard();

  const { data, isFetching } = useQuery<GetAllBankAccountResponse>({
    queryKey: ['bankAccounts'],
    queryFn: bankAccountService.getAll
  })

  const currentBalance = useMemo(() => {
    if(!data) return 0;

    return data.reduce((total, account) => total + account.currentBalance ,0)
  } , [data])

  return {currentBalance , sliderState, setSliderState, windowWidth, areValuesVisible, toggleValuesVisibility, isFetching, accounts: data ?? []}
}
