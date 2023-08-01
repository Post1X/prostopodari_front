import { MockCategoriesList } from "../../../pages/categories/mocks/MockCategoriesList"
import AbstractServiceRepository from "../../../settings/abstrcations/repositories/AbstractServiceRepository"
import { Category } from "../models/Category"
import { ApiCategoriesService } from "./api/ApiCategoriesService"

export class CategoriesService extends AbstractServiceRepository {
  api: ApiCategoriesService

  constructor() {
    super()
    this.api = new ApiCategoriesService()
  }

  getCategories = async () => {
    // TODO: Mocks
    // const { data } = await this.api.getCategories()

    const data = MockCategoriesList

    return this.createList<Category>(Category, data)
  }
}
