import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { AuthService } from "./service/AuthService"
import { TAuthDTO, TAuthState } from "./types/AuthTypes"
import { AppThunk, RootState } from "../../settings/redux/store"
import { AuthFormKeys, AuthFormProps, MockAuthForm } from "./form/AuthForm"

const authService = new AuthService()

const initialState: TAuthState = {
  authForm: MockAuthForm,
  isAuthLoad: "idle",
  authUser: null,
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
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
        state.isAuthLoad = "idle"
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isAuthLoad = "loading"
        state.authUser = action.payload
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

export const { changeForm } = authSlice.actions

export const selectToken = (state: RootState) => state.authSlice.authUser?.token
export const selectAuthForm = (state: RootState) => state.authSlice.authForm

export default authSlice.reducer
