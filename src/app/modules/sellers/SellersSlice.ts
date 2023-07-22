import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { TSellersDTO, TSellersState } from "./types/SellersTypes"
import { RootState } from "../../settings/redux/store"
import { MockSellerDenyForm, SellerDenyFormProps } from "./form/SellerDenyForm"
import { SellersService } from "./service/SellersService"
import { SellersTabMenuType } from "../../pages/sellers/types/SellersUITypes"
import { Seller } from "./models/Seller"
import { Nullable } from "../../settings/types/BaseTypes"
import toast from "react-hot-toast"

const sellersService = new SellersService()

const initialState: TSellersState = {
  sellerDenyForm: MockSellerDenyForm,
  currentSeller: null,
  sellerList: null,
  sellerListPending: [],
  sellerListApprove: [],
  sellerListDeny: [],
  isSellerLoad: "completed",
  isUpdateLoad: "completed",
}

const sellersSlice = createSlice({
  name: "sellers",
  initialState,
  reducers: {
    setCurrentSeller: (state, action: PayloadAction<Nullable<Seller>>) => {
      state.currentSeller = action.payload
    },

    selleryChangeForm: (state, action: PayloadAction<SellerDenyFormProps>) => {
      state.sellerDenyForm = {
        ...state.sellerDenyForm,
        [action.payload.key]: action.payload.value,
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSellers.pending, (state) => {
        state.isSellerLoad = "load"
      })
      .addCase(getSellers.fulfilled, (state, action) => {
        state.isSellerLoad = "completed"

        state.sellerListPending = sellersService.getTypeList(
          action.payload.sellerToApprove,
          SellersTabMenuType.pending,
        )

        state.sellerListApprove = sellersService.getTypeList(
          action.payload.sellerToApprove,
          SellersTabMenuType.approve,
        )

        state.sellerListDeny = sellersService.getTypeList(
          action.payload.sellerToApprove,
          SellersTabMenuType.deny,
        )

        state.sellerList = action.payload
      })
      .addCase(getSellers.rejected, (state) => {
        state.isUpdateLoad = "completed"
      })

      .addCase(putDenySeller.pending, (state) => {
        state.isUpdateLoad = "load"
      })
      .addCase(putDenySeller.fulfilled, (state, action) => {
        state.isUpdateLoad = "completed"
        toast.success("Успешно")
      })
      .addCase(putDenySeller.rejected, (state) => {
        state.isUpdateLoad = "completed"
      })

      .addCase(putApproveSeller.pending, (state) => {
        state.isUpdateLoad = "load"
      })
      .addCase(putApproveSeller.fulfilled, (state, action) => {
        state.isUpdateLoad = "completed"
        toast.success("Успешно")
      })
      .addCase(putApproveSeller.rejected, (state) => {
        state.isUpdateLoad = "completed"
      })
  },
})

// ASYNC REDUCERS

export const getSellers = createAsyncThunk("sellers/list", async () => {
  const sellersList = await sellersService.getSellers()

  return sellersList
})

export const putApproveSeller = createAsyncThunk(
  "seller/approve",
  async (dto: TSellersDTO) => {
    const message = await sellersService.putApproveSeller(dto)

    return message
  },
)

export const putDenySeller = createAsyncThunk(
  "seller/deny",
  async (dto: TSellersDTO) => {
    const message = await sellersService.putDenySeller(dto)

    return message
  },
)

// ACTIONS

export const { setCurrentSeller, selleryChangeForm } = sellersSlice.actions

export const selectSellersValues = (state: RootState) => state.sellersSlice

// Export

export default sellersSlice.reducer
