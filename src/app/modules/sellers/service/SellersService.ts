import { TClaimDTO } from "../types/SellersTypes"
import AbstractServiceRepository from "../../../settings/abstrcations/repositories/AbstractServiceRepository"
import { ResponseMessage } from "../models/ResponseMessage"
import { ApiSellerService } from "./api/ApiSellerService"
import { SellersTabMenuType } from "../../../pages/sellers/types/SellersUITypes"
import { Seller } from "../models/Seller"
import { SellerData } from "../models/SellerData"

export class SellersService extends AbstractServiceRepository {
  private apiService: ApiSellerService

  constructor() {
    super()
    this.apiService = new ApiSellerService()
  }

  getSellers = async () => {
    const { data } = await this.apiService.getSellers()

    return this.createList<Seller>(Seller, data)
  }

  getCurrentSeller = async (id: string) => {
    const { data } = await this.apiService.getCurrentSeller(id)

    return this.create<SellerData>(SellerData, data)
  }

  putApproveSeller = async (dto: TClaimDTO) => {
    const { data } = await this.apiService.putApproveSeller(dto)

    return this.create<ResponseMessage>(ResponseMessage, data)
  }

  putDenySeller = async (dto: TClaimDTO) => {
    const { data } = await this.apiService.putDenySeller(dto)

    return this.create<ResponseMessage>(ResponseMessage, data)
  }

  getTypeList = (sellerList: Seller[], type: SellersTabMenuType) => {
    switch (type) {
      case SellersTabMenuType.pending:
        return sellerList.filter(
          (seller) => seller.status === SellersTabMenuType.pending,
        )
      case SellersTabMenuType.denied:
        return sellerList.filter(
          (seller) => seller.status === SellersTabMenuType.denied,
        )
      default:
        return sellerList
    }
  }
}
