export interface FinanceStatistics {
  allAmount: number
  payAmount: number
  income: number
  deliveryAmount: number
  paymentCard: string
  comission: {
    percent: number
    promo: number
  }
}

export interface FinancesSellers {
  seller: FinanceSellerUnit
  finance: FinanceStatistics
}

export interface FinancesOrdersSeller {
  info: FinanceSellerUnit
  finance: FinanceStatistics
}

export interface FinanceSellerUnit {
  _id?: string
  order_number?: string
  ip?: string
  time?: object
  phone_number: string
  storeName: string
  orderID?: string
  dateTime?: string
}

export interface FinanceStore {
  _id?: string
  city: string
  order_number?: string
  ip?: string
  phone_number: string
  storeName: string
  sellerName: string
}

export type TFinanceDTO = {
  startDate: string
  endDate: string
  sellerId?: string
}
