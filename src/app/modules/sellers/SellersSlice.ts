import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { TBanSellerDTO, TClaimDTO, TSellersState } from "./types/SellersTypes"
import { RootState } from "../../settings/redux/store"
import { MockClaimDenyForm, ClaimDenyFormProps } from "./form/ClaimDenyForm"
import { SellersService } from "./service/SellersService"
import { SellersTabMenuType } from "../../pages/sellers/types/SellersUITypes"
import { Seller } from "./models/Seller"
import { Nullable } from "../../settings/types/BaseTypes"
import toast from "react-hot-toast"

const sellersService = new SellersService()

const initialState: TSellersState = {
  claimDenyForm: MockClaimDenyForm,

  isClaimsLoad: "completed",
  isSellersLoad: "completed",

  isUpdateLoad: "completed",

  claimsList: [],
  claimsListPending: [],
  claimsListDeny: [],
  currentClaim: null,

  sellersList: [],
  currentSeller: null,
}

const sellersSlice = createSlice({
  name: "sellers",
  initialState,
  reducers: {
    setCurrentSeller: (state, action: PayloadAction<Nullable<Seller>>) => {
      state.currentClaim = action.payload
    },

    selleryChangeForm: (state, action: PayloadAction<ClaimDenyFormProps>) => {
      state.claimDenyForm = {
        ...state.claimDenyForm,
        [action.payload.key]: action.payload.value,
      }
    },
  },
  extraReducers: (builder) => {
    builder
      // GET Claims
      .addCase(getClaims.pending, (state) => {
        state.isClaimsLoad = "load"
      })
      .addCase(getClaims.fulfilled, (state, action) => {
        state.isClaimsLoad = "completed"

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
      .addCase(getClaims.rejected, (state) => {
        state.isClaimsLoad = "completed"
      })

      // GET Current Claim

      .addCase(getCurrentClaim.pending, (state) => {
        state.isClaimsLoad = "load"
      })
      .addCase(getCurrentClaim.fulfilled, (state, action) => {
        state.isClaimsLoad = "completed"

        if (action.payload?.sellerData) {
          state.currentClaim = action.payload?.sellerData
        }
      })
      .addCase(getCurrentClaim.rejected, (state) => {
        state.isClaimsLoad = "completed"
      })

      // PUT Claim Deny

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

      // PUT Claim Approve

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

      // GET Sellers

      .addCase(getSellers.pending, (state) => {
        state.isSellersLoad = "load"
      })
      .addCase(getSellers.fulfilled, (state, action) => {
        state.isSellersLoad = "completed"

        state.sellersList = action.payload
      })
      .addCase(getSellers.rejected, (state) => {
        state.isSellersLoad = "completed"
      })

      // GET Current Seller

      .addCase(getCurrentSeller.pending, (state) => {
        state.isSellersLoad = "load"
      })
      .addCase(getCurrentSeller.fulfilled, (state, action) => {
        state.isSellersLoad = "completed"

        if (action.payload?.sellerData) {
          state.currentSeller = action.payload
        }
      })
      .addCase(getCurrentSeller.rejected, (state) => {
        state.isSellersLoad = "completed"
      })

      // PUT Baned Seller

      .addCase(putBanedSeller.pending, (state) => {
        state.isUpdateLoad = "load"
      })
      .addCase(putBanedSeller.fulfilled, (state, action) => {
        state.isUpdateLoad = "completed"
        toast.success("Успешно")
      })
      .addCase(putBanedSeller.rejected, (state) => {
        state.isUpdateLoad = "completed"
      })
  },
})

// ASYNC REDUCERS
// CLAIMS
export const getClaims = createAsyncThunk("sellers/claims", async () => {
  const claimsList = await sellersService.getClaims()

  return claimsList
})

export const getCurrentClaim = createAsyncThunk(
  "sellers/currentClaim",
  async (id: string) => {
    const currentClaim = await sellersService.getCurrentClaim(id)

    return currentClaim
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
// SELLERS
export const getSellers = createAsyncThunk("sellers/owners", async () => {
  const sellers = await sellersService.getSellers()

  return sellers
})

export const getCurrentSeller = createAsyncThunk(
  "sellers/currentSeller",
  async (id: string) => {
    const currentSeller = await sellersService.getCurrentSeller(id)

    return currentSeller
  },
)

export const putBanedSeller = createAsyncThunk(
  "sellers/baned",
  async (dto: TBanSellerDTO) => {
    const currentSeller = await sellersService.putBanedSeller(dto)

    return currentSeller
  },
)

// ACTIONS

export const { setCurrentSeller, selleryChangeForm } = sellersSlice.actions

export const selectSellersValues = (state: RootState) => state.sellersSlice

// Export

export default sellersSlice.reducer
