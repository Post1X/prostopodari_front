export type TPathValue = {
  path: string
  menuName?: string
}

type TPathApp = {
  home: TPathValue
  seller: TPathValue
  login: TPathValue
  stores: TPathValue
  promocodes: TPathValue
  settings: TPathValue
  finances: TPathValue
  messages: TPathValue
}

export const PathApp: TPathApp = {
  home: {
    path: "/",
    menuName: "Заявки",
  },
  seller: {
    path: "/seller",
  },
  login: {
    path: "/login",
  },
  stores: {
    path: "/stores",
    menuName: "Владельцы",
  },
  finances: {
    path: "/finances",
    menuName: "Финансы магазинов",
  },
  messages: {
    path: "/messages",
    menuName: "Сообщения",
  },
  promocodes: {
    path: "/promocodes",
    menuName: "Промокоды",
  },
  settings: {
    path: "/settings",
    menuName: "Настройки",
  },
}
