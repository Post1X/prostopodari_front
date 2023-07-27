import { createAsyncThunk } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"
import { TMessagesState } from "./types/MessagesTypes"
import { MessagesService } from "./service/MessagesService"
import { RootState } from "../../settings/redux/store"

const messagesService = new MessagesService()

const initialState: TMessagesState = {
  chatList: [],
  isChatsLoad: "completed",
  chatListPending: [],
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
  },
})

export const getChats = createAsyncThunk("messages/chats", async () => {
  const chats = await messagesService.getChats()

  return chats
})

export const selectMessagesValues = (state: RootState) => state.messagesSlice

export default messagesSlice.reducer
