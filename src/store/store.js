import { configureStore } from '@reduxjs/toolkit'
import LoginReducer from '../feature/LoginSlice'
import TransactionReducer from '../feature/TransactionSlice'
import UserReducer from "../feature/UserSlice"
import WalletReducer from "../feature/WalletSlice"


export const store = configureStore({
  reducer: {
    log:LoginReducer,
    transaction:TransactionReducer,
    user:UserReducer,
    Wallet: WalletReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})