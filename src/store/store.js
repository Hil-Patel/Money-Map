import { configureStore } from '@reduxjs/toolkit'
import LoginReducer from '../feature/LoginSlice'

export const store = configureStore({
  reducer: {
    log:LoginReducer,
  },
})