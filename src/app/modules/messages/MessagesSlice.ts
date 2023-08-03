import { createAsyncThunk } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"
import { MessagesStateModel } from "./types/MessagesTypes"
import { MessagesService } from "./service/MessagesService"
import { RootState } from "../../settings/redux/store"

const messagesService = new MessagesService()

const initialState: MessagesStateModel = {
  chatList: [],
  isChatsLoad: "completed",
  isMessagesLoad: "completed",
  chatListPending: [],
  messagesList: [],
}

const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {},
  extraReducers: (bulder) => {
    bulder
      // GET Chats

      .addCase(getChats.pending, (state) => {
        state.isChatsLoad = "load"
      })
      .addCase(getChats.fulfilled, (state, action) => {
        if (action.payload) {
          state.chatList = action.payload
          state.chatListPending = action.payload.filter(
            (chat) => chat.newMessCount > 0,
          )
        }

        state.isChatsLoad = "completed"
      })
      .addCase(getChats.rejected, (state) => {
        state.isChatsLoad = "completed"
      })

      // GET Messages

      .addCase(getMessages.pending, (state) => {
        state.isMessagesLoad = "load"
      })
      .addCase(getMessages.fulfilled, (state, action) => {
        if (action.payload) {
          state.messagesList = action.payload
        }

        state.isMessagesLoad = "completed"
      })
      .addCase(getMessages.rejected, (state) => {
        state.isMessagesLoad = "completed"
      })
  },
})

export const getChats = createAsyncThunk("messages/chats", async () => {
  const chats = await messagesService.getChats()

  return chats
})

export const getMessages = createAsyncThunk(
  "messages/messages",
  async (chatID: string) => {
    const messages = await messagesService.getMessages(chatID)

    return messages
  },
)

export const selectMessagesValues = (state: RootState) => state.messagesSlice

export default messagesSlice.reducer
