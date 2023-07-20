import { Seller } from "./Seller"
import AbstractModel from "../../../settings/abstrcations/models/AbstractModel"

export class SellerList extends AbstractModel {
  sellerToApprove: Seller[] = []

  constructor(props: any) {
    super()
    this.load(props)
  }
}
