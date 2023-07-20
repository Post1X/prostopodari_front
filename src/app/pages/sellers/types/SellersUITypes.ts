export enum SellersTabMenuType {
  all = "all",
  pending = "pending",
  approve = "approve",
  deny = "deny",
}

export type TSellersTabMenu = {
  [SellersTabMenuType.all]: string
  [SellersTabMenuType.pending]: string
  [SellersTabMenuType.approve]: string
  [SellersTabMenuType.deny]: string
}
