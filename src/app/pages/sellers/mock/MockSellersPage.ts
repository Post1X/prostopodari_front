import { Seller } from "../../../modules/sellers/models/Seller"
import { TSellersTabMenu } from "../types/SellersUITypes"

export const mockSellersTabMenu: TSellersTabMenu = {
  all: "Все",
  pending: "Новые",
  approve: "Принятые",
  deny: "Отклоненые",
}

export const mockSellers: Seller[] = [
  {
    _id: "64b857ee39e18dd0aaf2c2d4",
    name: "Миханя",
    email: "1@gmail.com",
    password:
      "$argon2id$v=19$m=65536,t=3,p=4$Zgsjg+geokxlbUxFePnlAg$9mLkSOn0i8164tlM1SQLYi28fXUmIfeK3VRjyqaTLzA",
    inn: "21312321",
    ip: "ИП",
    ogrn: "2131231",
    legal_name: "АААА",
    phone_number: "3213213",
    bill_number: "213123",
    status: "pending",
    message_from_admin: null,
    subscription_status: null,
    subscription_valid_until: null,
    active_store: null,
    __v: 0,
    getAttributes: () => [],
    load: () => null,
  },
  {
    _id: "64b857fc39e18dd0aaf2c2d9",
    name: "Вадик",
    email: "2@gmail.com",
    password:
      "$argon2id$v=19$m=65536,t=3,p=4$HrKezF3XTcvF81yLiKTfeg$Simf6NZXM+iDfPlZYNbS5nu39linQwqv5o7da/cNQVA",
    inn: "21312322",
    ip: "ИП",
    ogrn: "2131233",
    legal_name: "АААА",
    phone_number: "3213213",
    bill_number: "213123",
    status: "pending",
    message_from_admin: null,
    subscription_status: null,
    subscription_valid_until: null,
    active_store: null,
    __v: 0,

    getAttributes: () => [],
    load: () => null,
  },
  {
    _id: "64b8580839e18dd0aaf2c2dd",
    name: "Олежа",
    email: "3@gmail.com",
    password:
      "$argon2id$v=19$m=65536,t=3,p=4$M+T72HHSlEeBBXdC2Hq05A$s42ApOnQE5Uvs3S2FSPDw2F//X0jQLpvyiNyydTS7XE",
    inn: "21312323",
    ip: "ИП",
    ogrn: "2131234",
    legal_name: "АААА",
    phone_number: "3213213",
    bill_number: "213123",
    status: "pending",
    message_from_admin: null,
    subscription_status: null,
    subscription_valid_until: null,
    active_store: null,
    __v: 0,

    getAttributes: () => [],
    load: () => null,
  },
]
