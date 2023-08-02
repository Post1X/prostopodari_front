import AbstractApiRepository from "../../../../settings/abstrcations/repositories/AbstractApiRepository"
import { CreatePromocodeDTO } from "../../types/PromocodesTypes"

export class ApiPromocodesService extends AbstractApiRepository {
  getPromocodes = () => {
    return this.apiClient.get({
      url: "/promocodes",
    })
  }

  createPromocode = (dto: CreatePromocodeDTO) => {
    return this.apiClient.post({
      url: "/promocodes/admin",
      data: dto,
    })
  }
}
