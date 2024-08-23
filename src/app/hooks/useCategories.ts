import { useQuery } from "@tanstack/react-query";
import { categoriesService } from "../services/categoriesService";
import { GetAllCategoriesResponse } from "../services/categoriesService/getAll";

export function useCategories(){
  const { data, isFetching } = useQuery<GetAllCategoriesResponse>({
    queryKey: ['getCategories'],
    queryFn: categoriesService.getAll
  })

  return {categories: data ?? [], isFetching}
}
