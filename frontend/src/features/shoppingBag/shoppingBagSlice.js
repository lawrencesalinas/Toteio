import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import ShoppingBagService from './shoppingBagService'

const initialState = {
  shoppingBag: [],
  isSuccess: false,
  isError: false,
  isLoading: false,
  message: '',
}

// Get  Products
export const getShoppingBag = createAsyncThunk(
  'shoppingBag/getAll',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await ShoppingBagService.getShoppingBag(token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()

      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const ShoppingBagSlice = createSlice({
  name: 'shoppingBag',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false
      state.isError = false
      state.isSuccess = false
      state.message = ''
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getShoppingBag.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getShoppingBag.fulfilled, (state, action) => {
        state.isLoading = false
        state.shoppingBag = action.payload
      })
      .addCase(getShoppingBag.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = ShoppingBagSlice.actions
export default ShoppingBagSlice.reducer
