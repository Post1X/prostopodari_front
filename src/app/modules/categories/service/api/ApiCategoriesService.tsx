import AbstractApiRepository from "../../../../settings/abstrcations/repositories/AbstractApiRepository"
import { CreateCategoryDTO } from "../../types/CategoriesTypes"

export class ApiCategoriesService extends AbstractApiRepository {
  getCategories = () => {
    return this.apiClient.get({
      url: "/categories/admin",
    })
  }
  deleteCategory = (id: string) => {
    return this.apiClient.post({
      url: `/categories/delete?id=${id}`,
    })
  }
  postCategory = (dto: CreateCategoryDTO) => {
    return this.apiClient.post({
      url: "/categories/",
      data: dto,
    })
  }
}
