import { BankAccounts } from "../../entities/BankAccount";
import { httpClient } from "../httpClient";

export type GetAllBankAccountResponse = Array<BankAccounts>



export async function getAll(){
  const { data } = await httpClient.get<GetAllBankAccountResponse>("/bank-accounts");

  return data ?? [];
}
