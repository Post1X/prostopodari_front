import AbstractApiRepository from "../../../../settings/abstrcations/repositories/AbstractApiRepository"

export class ApiCategoriesService extends AbstractApiRepository {
  getCategories = () => {
    return this.apiClient.get({
      url: "/categories/admin",
    })
  }
}
