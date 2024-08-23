import { Categories } from "../../entities/Categories";
import { httpClient } from "../httpClient";

export type GetAllCategoriesResponse = Array<Categories>



export async function getAll(){
  const { data } = await httpClient.get<GetAllCategoriesResponse>("/categories");

  return data ?? [];
}
