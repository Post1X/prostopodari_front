import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { CategoriesService } from "./service/CategoriesService"
import { CategoriesStateModel } from "./types/CategoriesTypes"
import { RootState } from "../../settings/redux/store"

const categoriesService = new CategoriesService()

const initialState: CategoriesStateModel = {
  isLoadCats: "completed",
  isUpdateCars: "completed",

  categoriesList: [],
}

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // GET Categories

      .addCase(getCategories.pending, (state) => {
        state.isLoadCats = "load"
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.isLoadCats = "completed"

        state.categoriesList = action.payload
      })
      .addCase(getCategories.rejected, (state) => {
        state.isLoadCats = "failed"
      })
  },
})

export const getCategories = createAsyncThunk("categories/list", async () => {
  const catsList = await categoriesService.getCategories()

  return catsList
})

export const selectCatsValues = (state: RootState) => state.categoriesSlice

export default categoriesSlice.reducer
