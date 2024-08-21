import { httpClient } from "../httpClient";

 export interface createBankAccountParams {
  name: string,
  initialBalance: number,
  type: "CHECKING" | "INVESTMENT" | "CASH",
  color: string
}

export async function create(params: createBankAccountParams){
  const { data } = await httpClient.post<createBankAccountParams>("/bank-accounts", params);

  return data;
}
