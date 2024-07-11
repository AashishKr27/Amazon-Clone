/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  products: [],
  userInfo: [],
};

export const amazonSlice = createSlice({
  name: "amazon",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },
    increamentQuantity: (state, action) => {
      const item = state.products.find((item)=>item.id === action.payload);
      item.quantity++;
    },
    decreamentQuantity: (state, action) => {
      const item = state.products.find((item)=>item.id === action.payload);
      if(item.quantity > 1){
        item.quantity--;
      }
      else {
        item.quantity = 1;
      }
    },
    deleteItem: (state, action) => {
      state.products = state.products.filter((item)=>item.id !== action.payload)
    },
    resetCart: (state) => {
      state.products = []
    }
  },
});

export const { addToCart, deleteItem, resetCart, increamentQuantity, decreamentQuantity } = amazonSlice.actions;
export default amazonSlice.reducer;