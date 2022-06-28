import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import ShoppingBagService from './shoppingBagService'

const initialState = {
  shoppingBag: [],
  isSuccess: false,
  isError: false,
  isLoading: false,
  message: '',
}

// Get  user shoppingbag
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

export const addToShoppingBag = createAsyncThunk(
  'shoppingbag/add',
  async (productId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      console.log(token)
      return await ShoppingBagService.addToShoppingBag(productId, token)
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

export const deleteShoppingBagItem = createAsyncThunk(
  'shoppingBag/delete',
  async (productId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await ShoppingBagService.deleteShoppingBagItem(productId, token)
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
      .addCase(addToShoppingBag.pending, (state) => {
        state.isLoading = true
      })
      .addCase(addToShoppingBag.fulfilled, (state) => {
        state.isLoading = false
        state.isSuccess = true
      })
      .addCase(addToShoppingBag.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(deleteShoppingBagItem.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteShoppingBagItem.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.shoppingBag.filter((product) => product.id !== action.payload.id)
      })
      .addCase(deleteShoppingBagItem.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = ShoppingBagSlice.actions
export default ShoppingBagSlice.reducer
