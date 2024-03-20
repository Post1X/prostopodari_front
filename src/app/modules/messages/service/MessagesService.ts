import { MockChats } from "../../../pages/chats/mock/MockChat"
import { MockMessages } from "../../../pages/chats/mock/MockMessages"
import AbstractServiceRepository from "../../../settings/abstrcations/repositories/AbstractServiceRepository"
import { Chats } from "../models/Chats"
import { Message } from "../models/Message"
import { Notification } from "../models/Notifications"
import { PostMessageType } from "../types/MessagesTypes"
import { ApiMessagesService } from "./api/ApiMessagesService"

export class MessagesService extends AbstractServiceRepository {
  private apiService: ApiMessagesService

  constructor() {
    super()
    this.apiService = new ApiMessagesService()
  }

  getChats = async () => {
    const { data } = await this.apiService.getChats()
    return this.createList<Chats>(Chats, data)
  }
  getNotifications = async () => {
    const { data } = await this.apiService.getNotifications()
    return this.createList<Notification>(Notification, data)
  }
  deleteNotification = async (id: string) => {
    const { data } = await this.apiService.deleteNotification(id)
    return data
  }

  getChatId = async (id: string) => {
    const { data } = await this.apiService.getChatId(id)

    return data
  }

  getMessages = async (chatID: string) => {
    // TODO: Mocks
    // const { data } = await this.apiService.getMessages(chatID)

    const data = MockMessages

    return this.createList<Message>(Message, data)
  }

  postMessageSellers = async (dto: PostMessageType) => {
    const { data } = await this.apiService.postMessageSellers(dto)

    return data
  }

  postMessageBuyers = async (dto: PostMessageType) => {
    const { data } = await this.apiService.postMessageBuyers(dto)

    return data
  }
}
