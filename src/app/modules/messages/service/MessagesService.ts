import { MockChats } from "../../../pages/chats/mock/MockChat"
import { MockMessages } from "../../../pages/chats/mock/MockMessages"
import AbstractServiceRepository from "../../../settings/abstrcations/repositories/AbstractServiceRepository"
import { Chats } from "../models/Chats"
import { Message } from "../models/Message"
import { ApiMessagesService } from "./api/ApiMessagesService"

export class MessagesService extends AbstractServiceRepository {
  private apiService: ApiMessagesService

  constructor() {
    super()
    this.apiService = new ApiMessagesService()
  }

  getChats = async () => {
    // TODO: Mocks
    // const { data } = await this.apiService.getChats()

    const data = MockChats

    return this.createList<Chats>(Chats, data)
  }

  getMessages = async (chatID: string) => {
    // TODO: Mocks
    // const { data } = await this.apiService.getMessages(chatID)

    const data = MockMessages

    return this.createList<Message>(Message, data)
  }
}
