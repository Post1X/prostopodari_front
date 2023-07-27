export enum ChatTabMenuTypes {
  all = "all",
  noRead = "noRead",
  notification = "notification",
}

export type TChatTabMenu = {
  [ChatTabMenuTypes.all]: string
  [ChatTabMenuTypes.noRead]: string
  [ChatTabMenuTypes.notification]: string
}
