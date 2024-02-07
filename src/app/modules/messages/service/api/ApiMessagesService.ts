import AbstractApiRepository from "../../../../settings/abstrcations/repositories/AbstractApiRepository"
import { PostMessageType } from "../../types/MessagesTypes"

export class ApiMessagesService extends AbstractApiRepository {
  getChats = async () => {
    return this.apiClient.get({
      url: "/chats",
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
