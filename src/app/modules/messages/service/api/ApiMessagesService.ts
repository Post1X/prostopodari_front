import AbstractApiRepository from "../../../../settings/abstrcations/repositories/AbstractApiRepository"

export class ApiMessagesService extends AbstractApiRepository {
  getChats = async () => {
    return this.apiClient.get({
      url: "/chats",
    })
  }
}
