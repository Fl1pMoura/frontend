import { httpClient } from "../httpClient";

 export interface updateBankAccountParams {
  id: string,
  name: string,
  initialBalance: number,
  type: "CHECKING" | "INVESTMENT" | "CASH",
  color: string
}

export async function update({id, ...params}: updateBankAccountParams){
  const { data } = await httpClient.put<updateBankAccountParams>(`/bank-accounts/${id}`, params);

  return data;
}
