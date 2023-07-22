import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { TClaimDTO, TSellersState } from "./types/SellersTypes"
import { RootState } from "../../settings/redux/store"
import { MockSellerDenyForm, SellerDenyFormProps } from "./form/SellerDenyForm"
import { SellersService } from "./service/SellersService"
import { SellersTabMenuType } from "../../pages/sellers/types/SellersUITypes"
import { Seller } from "./models/Seller"
import { Nullable } from "../../settings/types/BaseTypes"
import toast from "react-hot-toast"

const sellersService = new SellersService()

const initialState: TSellersState = {
  claimDenyForm: MockSellerDenyForm,
  currentSeller: null,
  claimsList: [],
  claimsListPending: [],
  claimsListDeny: [],
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
      state.claimDenyForm = {
        ...state.claimDenyForm,
        [action.payload.key]: action.payload.value,
      }
    },
  },
  extraReducers: (builder) => {
    builder
      // GET Sellers
      .addCase(getSellers.pending, (state) => {
        state.isSellerLoad = "load"
      })
      .addCase(getSellers.fulfilled, (state, action) => {
        state.isSellerLoad = "completed"

        state.claimsListPending = sellersService.getTypeList(
          action.payload,
          SellersTabMenuType.pending,
        )

        state.claimsListDeny = sellersService.getTypeList(
          action.payload,
          SellersTabMenuType.denied,
        )

        state.claimsList = action.payload
      })
      .addCase(getSellers.rejected, (state) => {
        state.isSellerLoad = "completed"
      })

      // GET Seller

      .addCase(getCurrentSeller.pending, (state) => {
        state.isSellerLoad = "load"
      })
      .addCase(getCurrentSeller.fulfilled, (state, action) => {
        state.isSellerLoad = "completed"

        if (action.payload?.sellerData) {
          state.currentSeller = action.payload?.sellerData
        }
      })
      .addCase(getCurrentSeller.rejected, (state) => {
        state.isSellerLoad = "completed"
      })

      // PUT Deny

      .addCase(putDenySeller.pending, (state) => {
        state.isUpdateLoad = "load"
      })
      .addCase(putDenySeller.fulfilled, (state, action) => {
        state.isUpdateLoad = "completed"
        toast.success("Успешно")
      })
      .addCase(putDenySeller.rejected, (state) => {
        state.isUpdateLoad = "completed"
        toast.error("Ошибка")
      })

      // PUT Approve

      .addCase(putApproveSeller.pending, (state) => {
        state.isUpdateLoad = "load"
      })
      .addCase(putApproveSeller.fulfilled, (state, action) => {
        state.isUpdateLoad = "completed"
        toast.success("Успешно")
      })
      .addCase(putApproveSeller.rejected, (state) => {
        state.isUpdateLoad = "completed"
        toast.error("Ошибка")
      })
  },
})

// ASYNC REDUCERS

export const getSellers = createAsyncThunk("sellers/list", async () => {
  const sellersList = await sellersService.getSellers()

  return sellersList
})

export const getCurrentSeller = createAsyncThunk(
  "sellers/currentSeller",
  async (id: string) => {
    const sellersList = await sellersService.getCurrentSeller(id)

    return sellersList
  },
)

export const putApproveSeller = createAsyncThunk(
  "seller/approve",
  async (dto: TClaimDTO) => {
    const message = await sellersService.putApproveSeller(dto)

    return message
  },
)

export const putDenySeller = createAsyncThunk(
  "seller/deny",
  async (dto: TClaimDTO, _) => {
    const message = await sellersService.putDenySeller(dto)

    return message
  },
)

// ACTIONS

export const { setCurrentSeller, selleryChangeForm } = sellersSlice.actions

export const selectSellersValues = (state: RootState) => state.sellersSlice

// Export

export default sellersSlice.reducer
