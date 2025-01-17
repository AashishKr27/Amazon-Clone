/* eslint-disable no-unused-vars */
import { configureStore } from '@reduxjs/toolkit'

import amazonReducer from '../redux/amazonSlice'

export const store = configureStore({
  reducer: {amazonReducer},
})