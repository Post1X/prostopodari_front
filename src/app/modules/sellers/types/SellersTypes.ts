import { Nullable } from "../../../settings/types/BaseTypes"
import { TSellerDenytForm } from "../form/SellerDenyForm"
import { Seller } from "../models/Seller"
import { SellerList } from "../models/SellerList"

export type TSellersState = {
  sellerDenyForm: TSellerDenytForm
  isSellerLoad: "completed" | "load" | "failed"
  currentSeller: Nullable<Seller>
  sellerList: Nullable<SellerList>
  sellerListPending: Seller[]
  sellerListDeny: Seller[]
  sellerListApprove: Seller[]
}

export type TSellersDTO = {
  seller_user_id: string
  message_from_admin?: string
}
