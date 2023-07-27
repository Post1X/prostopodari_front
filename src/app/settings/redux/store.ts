import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import AuthSlice from "../../modules/auth/AuthSlice"
import SellersSlice from "../../modules/sellers/SellersSlice"
import MessagesSlice from "../../modules/messages/MessagesSlice"

export const store = configureStore({
  reducer: {
    authSlice: AuthSlice,
    sellersSlice: SellersSlice,
    messagesSlice: MessagesSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export type AppDispatch = typeof store.dispatch

export type RootState = ReturnType<typeof store.getState>

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
