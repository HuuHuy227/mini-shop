import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
    productFavor: []
  },
  reducers: {
    addToCart: (state,action) => {
      const item = state.products.find(item => item.id === action.payload.id)
      if (item) {
        item.quantity += action.payload.quantity;
      }
      else {
        state.products.push(action.payload);
      }
    },
    delItem: (state,action) => {
      state.products = state.products.filter(item=>item.id !== action.payload)
    },
    addFavor: (state,action) => {
      const item = state.productFavor.find(item => item.id === action.payload.id)
      if (!item) {
        state.productFavor.push(action.payload);
      }
    },
    resetFavor: (state) => {
      state.productFavor = []
    },
  }
})

// Action creators are generated for each case reducer function
export const { addToCart, addFavor, delItem, resetFavor } = cartSlice.actions

export default cartSlice.reducer