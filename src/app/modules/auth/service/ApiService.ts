import { TAuthDTO } from "./../types/AuthTypes"
import AbstractApiRepository from "../../../settings/abstrcations/repositories/AbstractApiRepository"

export class ApiService extends AbstractApiRepository {
  login = async (dto: TAuthDTO) => {
    return this.apiClient.post({
      url: "/users/login/admin",
      data: dto,
    })
  }
}
