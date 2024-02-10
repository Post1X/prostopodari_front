import AbstractApiRepository from "../../../../settings/abstrcations/repositories/AbstractApiRepository"
import { PostMessageType } from "../../types/MessagesTypes"

export class ApiMessagesService extends AbstractApiRepository {
  getChats = async () => {
    return this.apiClient.get({
      url: "/chat/im/admin",
    })
  }

  getNotifications = async () => {
    return this.apiClient.get({
      url: "/users/admin/notifications",
    })
  }
  getChatId = async (id: string) => {
    return this.apiClient.get({
      url: `/chat/is-created/admin?seller_id=${id}`,
      data: id,
    })
  }

  getMessages = async (chatID: string) => {
    return this.apiClient.get({
      url: `/messages?chatID=${chatID}`,
    })
  }

  postMessageSellers = async (dto: PostMessageType) => {
    return this.apiClient.post({
      url: `/users/admin/message/sellers`,
      data: dto,
    })
  }
  postMessageBuyers = async (dto: PostMessageType) => {
    return this.apiClient.post({
      url: `/users/admin/message/buyers`,
      data: dto,
    })
  }
}
