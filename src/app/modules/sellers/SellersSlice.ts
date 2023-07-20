import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { TSellersDTO, TSellersState } from "./types/SellersTypes"
import { RootState } from "../../settings/redux/store"
import { MockSellerDenyForm } from "./form/SellerDenyForm"
import { SellersService } from "./service/SellersService"
import { SellersTabMenuType } from "../../pages/sellers/types/SellersUITypes"

const sellersService = new SellersService()

const initialState: TSellersState = {
  sellerDenyForm: MockSellerDenyForm,
  currentSeller: null,
  sellerList: null,
  sellerListPending: [],
  sellerListApprove: [],
  sellerListDeny: [],
  isSellerLoad: "completed",
}

const sellersSlice = createSlice({
  name: "sellers",
  initialState,
  reducers: {},
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
        state.isSellerLoad = "failed"
      })
  },
})

// ASYNC REDUCERS

export const getSellers = createAsyncThunk("sellers/list", async () => {
  const sellersList = await sellersService.getSellers()

  return sellersList
})

export const putApproveSeller = createAsyncThunk(
  "seller/deny",
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

export const {} = sellersSlice.actions

export const selectSellersValues = (state: RootState) => state.sellersSlice

// Export

export default sellersSlice.reducer
