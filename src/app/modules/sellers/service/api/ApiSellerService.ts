import { TSellersDTO } from "../../types/SellersTypes"
import AbstractApiRepository from "../../../../settings/abstrcations/repositories/AbstractApiRepository"

export class ApiSellerService extends AbstractApiRepository {
  getSellers = async () => {
    return this.apiClient.get({
      url: "/users/sellers/pending",
    })
  }

  putApproveSeller = async (dto: TSellersDTO) => {
    return this.apiClient.put({
      url: "/users/sellers/approve",
      data: dto,
    })
  }
  putDenySeller = async (dto: TSellersDTO) => {
    return this.apiClient.put({
      url: "/users/sellers/deny",
      data: dto,
    })
  }
}
