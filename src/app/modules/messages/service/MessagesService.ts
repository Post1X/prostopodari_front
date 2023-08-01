import { MockChats } from "../../../pages/chats/mock/MockChat"
import AbstractServiceRepository from "../../../settings/abstrcations/repositories/AbstractServiceRepository"
import { Chats } from "../models/Chats"
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
}
