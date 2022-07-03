import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import productService from './productService'

const initialState = {
  product: {},
  products: [],
  isSuccess: false,
  isError: false,
  isLoading: false,
  message: '',
}

// Get  Products
export const getProducts = createAsyncThunk(
  'product/getAll',
  async (_, thunkAPI) => {
    try {
      //   const token = thunkAPI.getState().auth.user.token
      return await productService.getProducts()
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

// Get  Admin Products
export const getAdminProducts = createAsyncThunk(
  'product/getAllAdmin',
  async (_, thunkAPI) => {
    try {
      // const token = thunkAPI.getState().auth.user.token
      return await productService.getAdminProducts()
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

// Get  Admin Products
export const getAAllShoes = createAsyncThunk(
  'product/getAllShoes',
  async (_, thunkAPI) => {
    try {
      // const token = thunkAPI.getState().auth.user.token
      return await productService.getAAllShoes()
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

// Get  Product
export const getProduct = createAsyncThunk(
  'product/get',
  async (productId, thunkAPI) => {
    try {
      //   const token = thunkAPI.getState().auth.user.token
      return await productService.getProduct(productId)
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

// Create new product
export const createProduct = createAsyncThunk(
  'product/create',
  async (productData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await productService.createProduct(productData, token)
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

// Get User Products
export const getUserProducts = createAsyncThunk(
  'product/getAllUserProducts',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await productService.getUserProducts(token)
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

// Edit User Products
export const editProduct = createAsyncThunk(
  'product/edit',
  async (productData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await productService.editProduct(
        productData,
        productData.id,
        token
      )
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

export const deleteProduct = createAsyncThunk(
  'product/delete',
  async (productId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      console.log(productId, token)
      return await productService.deleteProduct(productId, token)
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

export const productSlice = createSlice({
  name: 'products',
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
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false
        state.products = action.payload
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getAdminProducts.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getAdminProducts.fulfilled, (state, action) => {
        state.isLoading = false

        state.products = action.payload
      })
      .addCase(getAdminProducts.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getAAllShoes.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getAAllShoes.fulfilled, (state, action) => {
        state.isLoading = false

        state.products = action.payload
      })
      .addCase(getAAllShoes.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })

      .addCase(getProduct.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.isLoading = false
        state.product = action.payload
      })
      .addCase(getProduct.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(createProduct.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createProduct.fulfilled, (state) => {
        state.isLoading = false
        state.isSuccess = true
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(editProduct.pending, (state) => {
        state.isLoading = true
      })
      .addCase(editProduct.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.product = action.payload
      })
      .addCase(editProduct.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getUserProducts.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getUserProducts.fulfilled, (state, action) => {
        state.isLoading = false
        state.products = action.payload
      })
      .addCase(getUserProducts.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(deleteProduct.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.products.filter((product) => product.id !== action.payload.id)
        state.product = {}
      })

      .addCase(deleteProduct.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = productSlice.actions
export default productSlice.reducer
