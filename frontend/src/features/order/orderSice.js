export const saveShippingAddress = createAsyncThunk(
  'save/shippingAddress',
  async (data, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await ShoppingBagService.saveShippingAddress(data, token)
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
  .addCase(saveShippingAddress.pending, (state) => {
    state.isLoading = true
  })
  .addCase(saveShippingAddress.fulfilled, (state, action) => {
    state.isSuccess = true
    state.shippingAdress = action.payload
  })
  .addCase(saveShippingAddress.rejected, (state, action) => {
    state.isLoading = false
    state.isError = true
    state.message = action.payload
  })
