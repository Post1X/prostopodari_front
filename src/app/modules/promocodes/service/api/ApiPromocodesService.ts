import AbstractApiRepository from "../../../../settings/abstrcations/repositories/AbstractApiRepository"
import { CreatePromocodeDTO } from "../../types/PromocodesTypes"

export class ApiPromocodesService extends AbstractApiRepository {
  getPromocodes = () => {
    return this.apiClient.get({
      url: "/promocodes",
    })
  }

  deletePromocode = (id: string) => {
    return this.apiClient.delete({
      url: `/promocodes/?id=${id}`,
    })
  }

  createPromocode = (dto: CreatePromocodeDTO) => {
    return this.apiClient.post({
      url: "/promocodes/admin",
      data: dto,
    })
  }
}
