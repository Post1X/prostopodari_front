import { Chats } from "../models/Chats"
import { Message } from "../models/Message"

export interface MessagesStateModel {
  chatList: Chats[]
  isChatsLoad: "completed" | "load" | "failed"
  isMessagesLoad: "completed" | "load" | "failed"
  chatListPending: Chats[]
  messagesList: Message[]
}

export type PostMessageType = {
  body: string
  title: string
}

export type MessageRoleType = "admin" | "seller"
