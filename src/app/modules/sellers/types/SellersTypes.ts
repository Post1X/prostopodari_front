import { Nullable } from "../../../settings/types/BaseTypes"
import { TSellerDenytForm } from "../form/SellerDenyForm"
import { Seller } from "../models/Seller"

export type TSellersState = {
  claimDenyForm: TSellerDenytForm
  isSellerLoad: "completed" | "load" | "failed"
  isUpdateLoad: "completed" | "load" | "failed"
  currentSeller: Nullable<Seller>
  claimsList: Seller[]
  claimsListPending: Seller[]
  claimsListDeny: Seller[]
}

export type TClaimDTO = {
  seller_user_id: string
  message_from_admin?: string
}
