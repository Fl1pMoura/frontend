import { useQuery } from "@tanstack/react-query";
import { bankAccountService } from "../services/bankAccountService";
import { GetAllBankAccountResponse } from "../services/bankAccountService/getAll";

export function useBankAccounts(){
  const { data, isFetching } = useQuery<GetAllBankAccountResponse>({
    queryKey: ['bankAccounts'],
    queryFn: bankAccountService.getAll
  })

  return {accounts: data ?? [], isFetching}
}
