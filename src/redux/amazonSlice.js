/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    products:[],
    userInfo:[],
}

export const amazonSlice = createSlice({
    name:"amazon",
    initialState,
    reducers:{
        addToCart:(state, action) => {
            state.products.push(action.payload)
        }
    }
})

export const{addToCart} = amazonSlice.actions
export default amazonSlice.reducer