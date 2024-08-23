import { Transactions } from "../../entities/Transactions";
import { httpClient } from "../httpClient";

export type GetAllTransactionsResponse = Array<Transactions>

type TransactionsFilters = {
  month: number;
  year: number;
  bankAccountId?: string;
  transactionType?: Transactions['type'];
}


export async function getAll(filters : TransactionsFilters){
  const { data } = await httpClient.get<GetAllTransactionsResponse>("/transactions", {params: filters});

  return data ?? [];
}
