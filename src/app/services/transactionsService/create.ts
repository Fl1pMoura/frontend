import { httpClient } from "../httpClient";

 export interface createTransactionParams {
  id?: string
  bankAccountId: string
  categoryId: string
  name: string
  value: number
  date: string
  type: "INCOME" | "EXPENSE"
}

export async function create(params: createTransactionParams){
  const { data } = await httpClient.post<createTransactionParams>("/transactions", params);

  return data;
}
