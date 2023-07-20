import { TSellersDTO } from "../types/SellersTypes"
import AbstractServiceRepository from "../../../settings/abstrcations/repositories/AbstractServiceRepository"
import { ResponseMessage } from "../models/ResponseMessage"
import { SellerList } from "../models/SellerList"
import { ApiSellerService } from "./api/ApiSellerService"
import { SellersTabMenuType } from "../../../pages/sellers/types/SellersUITypes"
import { Seller } from "../models/Seller"

export class SellersService extends AbstractServiceRepository {
  private apiService: ApiSellerService

  constructor() {
    super()
    this.apiService = new ApiSellerService()
  }

  getSellers = async () => {
    const { data } = await this.apiService.getSellers()

    return this.create<SellerList>(SellerList, data)
  }

  putApproveSeller = async (dto: TSellersDTO) => {
    const { data } = await this.apiService.putApproveSeller(dto)

    return this.create<ResponseMessage>(ResponseMessage, data)
  }

  putDenySeller = async (dto: TSellersDTO) => {
    const { data } = await this.apiService.putApproveSeller(dto)

    return this.create<ResponseMessage>(ResponseMessage, data)
  }

  getTypeList = (sellerList: Seller[], type: SellersTabMenuType) => {
    switch (type) {
      case SellersTabMenuType.pending:
        return sellerList.filter(
          (seller) => seller.status === SellersTabMenuType.pending,
        )
      case SellersTabMenuType.approve:
        return sellerList.filter(
          (seller) => seller.status === SellersTabMenuType.approve,
        )
      case SellersTabMenuType.deny:
        return sellerList.filter(
          (seller) => seller.status === SellersTabMenuType.deny,
        )
      default:
        return sellerList
    }
  }
}
