import { TAuthDTO } from "./../types/AuthTypes"
import AbstractServiceRepository from "../../../settings/abstrcations/repositories/AbstractServiceRepository"
import { ApiService } from "./ApiService"
import { AuthUser } from "../models/AuthUser"
import { KeyLocalStorage } from "../../../settings/types/KeyLocalStorage"

export class AuthService extends AbstractServiceRepository {
  private apiService: ApiService

  constructor() {
    super()
    this.apiService = new ApiService()
  }

  login = async (dto: TAuthDTO) => {
    const { data } = await this.apiService.login(dto)

    return this.create<AuthUser>(AuthUser, data)
  }

  getToken = () => {
    const token = localStorage.getItem(KeyLocalStorage.token)

    if (token) {
      return this.create<AuthUser>(AuthUser, { token })
    }
  }
}
