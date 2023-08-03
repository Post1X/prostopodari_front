import AbstractApiRepository from "../../../../settings/abstrcations/repositories/AbstractApiRepository"

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
}
