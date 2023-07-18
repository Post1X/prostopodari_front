import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { AuthService } from "./service/AuthService"
import { TAuthDTO, TAuthState } from "./types/AuthTypes"
import { AppThunk, RootState } from "../../settings/redux/store"
import { AuthFormKeys, AuthFormProps, MockAuthForm } from "./form/AuthForm"
import { KeyLocalStorage } from "../../settings/types/KeyLocalStorage"

const authService = new AuthService()

const initialState: TAuthState = {
  authForm: MockAuthForm,
  isAuthLoad: "completed",
  authUser: null,
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    initAuth: (state) => {
      const authUser = authService.getToken()

      if (authUser) {
        state.authUser = authUser
      }
    },

    changeForm: (state, action: PayloadAction<AuthFormProps>) => {
      state.authForm = {
        ...state.authForm,
        [action.payload.key]: action.payload.value,
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isAuthLoad = "load"
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isAuthLoad = "completed"
        state.authUser = action.payload

        localStorage.setItem(KeyLocalStorage.token, action.payload.token!)
      })
      .addCase(login.rejected, (state) => {
        state.isAuthLoad = "failed"
      })
  },
})

// ASYNC REDUCERS

export const login = createAsyncThunk("auth/login", async (dto: TAuthDTO) => {
  const authUser = await authService.login(dto)

  return authUser
})

// ACTIONS

export const { changeForm, initAuth } = authSlice.actions

export const selectToken = (state: RootState) => state.authSlice.authUser?.token
export const selectAuthValues = (state: RootState) => state.authSlice

export default authSlice.reducer
