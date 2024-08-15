import { httpClient } from "../httpClient";

 export interface createParams {
  name: string,
  initialBalance: number,
  type: "CHECKING" | "INVESTMENT" | "CASH",
  color: string
}

export async function create(params: createParams){
  const { data } = await httpClient.post<createParams>("/bank-accounts", params);

  return data;
}
