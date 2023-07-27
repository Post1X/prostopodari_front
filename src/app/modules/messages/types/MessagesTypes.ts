import { Chats } from "../models/Chats"

export type TMessagesState = {
  chatList: Chats[]
  isChatsLoad: "completed" | "load" | "failed"
  chatListPending: Chats[]
}
