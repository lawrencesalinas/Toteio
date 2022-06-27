import { configureStore } from '@reduxjs/toolkit'
import productReducer from '../features/product/productSlice'
import authReducer from '../features/auth/authSlice'
import shoppingBagReducer from '../features/shoppingBag/shoppingBagSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productReducer,
    shoppingBag: shoppingBagReducer,
  },
})
