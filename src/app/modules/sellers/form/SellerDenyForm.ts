export enum SellerDenyFormKeys {
  reason = "reason",
}

export type TSellerDenytForm = {
  [SellerDenyFormKeys.reason]: string
}

export type SellerDenyFormProps = {
  key: SellerDenyFormKeys
  value: string
}

export const MockSellerDenyForm: TSellerDenytForm = {
  reason: "",
}

export class SellerDenyFormValidation {
  static isValidForm = (form: TSellerDenytForm) => {
    return form.reason.length > 3
  }
}
