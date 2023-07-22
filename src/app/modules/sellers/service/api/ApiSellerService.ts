import { TClaimDTO } from "../../types/SellersTypes"
import AbstractApiRepository from "../../../../settings/abstrcations/repositories/AbstractApiRepository"

export class ApiSellerService extends AbstractApiRepository {
  getSellers = async () => {
    return this.apiClient.get({
      url: "/users/sellers/claims",
    })
  }

  getCurrentSeller = async (id: string) => {
    return this.apiClient.get({
      url: `/users/sellers?seller_id=${id}`,
    })
  }

  putApproveSeller = async (dto: TClaimDTO) => {
    return this.apiClient.put({
      url: `/users/sellers/claims?type=approve&seller_id=${dto.seller_user_id}`,
      data: dto,
    })
  }
  putDenySeller = async (dto: TClaimDTO) => {
    const formData = new FormData()

    formData.append("message", dto.message_from_admin!)

    return this.apiClient.put({
      url: `/users/sellers/claims?type=deny&seller_id=${dto.seller_user_id}`,
      data: formData,
      config: {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    })
  }
}
