import { TBanSellerDTO, TClaimDTO } from "../../types/SellersTypes"
import AbstractApiRepository from "../../../../settings/abstrcations/repositories/AbstractApiRepository"
import { TFinanceDTO } from "../../types/FinancesTypes"

export class ApiSellerService extends AbstractApiRepository {
  getClaims = async () => {
    return this.apiClient.get({
      url: "/users/sellers/claims",
    })
  }

  getSellers = async () => {
    return this.apiClient.get({
      url: "/users/sellers",
    })
  }

  getCurrentSeller = async (id: string) => {
    return this.apiClient.get({
      url: `/users/sellers?seller_id=${id}`,
    })
  }

  getCurrentClaim = async (id: string) => {
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

  putBanedSeller = async (dto: TBanSellerDTO) => {
    return this.apiClient.put({
      url: `/users/sellers/claims?seller_id=${dto.seller_id}&ban=${dto.ban}`,
    })
  }

  getFinances = async (dto: TFinanceDTO) => {
    return this.apiClient.get({
      url: `/finances/admin?startDate=${dto.startDate}&endDate=${dto.endDate}`,
    })
  }

  getOrders = async (dto: TFinanceDTO) => {
    return this.apiClient.get({
      url: `/finances/orders?seller_id=${dto.sellerId!}&startDate=${
        dto.startDate
      }&endDate=${dto.endDate}`,
    })
  }
}
