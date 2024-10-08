import { httpClient } from "../httpClient";

 export interface updateTransactionParams {
  id: string
  bankAccountId: string
  categoryId: string
  name: string
  value: number
  date: string
  type: "INCOME" | "EXPENSE"
}

export async function update({id, ...params}: updateTransactionParams){
  const { data } = await httpClient.put<updateTransactionParams>(`/transactions/${id}`, params);

  return data;
}
