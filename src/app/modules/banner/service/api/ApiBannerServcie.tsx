import AbstractApiRepository from "../../../../settings/abstrcations/repositories/AbstractApiRepository"
import { TokenService } from "../../../auth/service/TokenService"
import { BannerDTO } from "../../types/ bannerTypes"

export class ApiBannerService extends AbstractApiRepository {
  getBanner = async () => {
    return this.apiClient.get({
      url: `/users/admin/banner`,
    })
  }
  postBanner = (image: string) => {
    return this.apiClient.post({
      url: `/users/admin/banner`,
      data: { image },
      config: {
        headers: {
          "Content-Type": "application/json",
        },
      },
    })
  }
}
