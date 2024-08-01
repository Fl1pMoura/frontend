import { httpClient } from "../httpClient";

interface MeResponse {
  name: string;
  email: string;
}

export async function me(){
  const { data } = await httpClient.get<MeResponse>("/users/me");

  await new Promise((resolve) => {
    setTimeout(() => {
      console.log('4 segundos se passaram!');
      resolve(true);
    }, 4000); // 10000 milissegundos = 10 segundos
  });

  return data;
}
