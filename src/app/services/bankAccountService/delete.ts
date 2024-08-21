import { httpClient } from "../httpClient";

 export interface deleteBankAccountParams {
  id: string,
}

export async function update({id, ...params}: deleteBankAccountParams){
  const { data } = await httpClient.put<deleteBankAccountParams>(`/bank-accounts/${id}`, params);

  return data;
}
