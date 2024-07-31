import { httpClient } from "../httpClient";

interface SigninResponse {
  name: string;
  email: string;
}

export async function me(){
  const { data } = await httpClient.get<SigninResponse>("/users/me");

  return data;
}
