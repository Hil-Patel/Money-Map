/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { createSlice } from "@reduxjs/toolkit";
import {addIncome as moneyAdded,addExpense as moneyUsed} from "./TransactionSlice";

const wallet={
    balance:0
}

export const WalletSlice = createSlice({
    name:"Wallet",
    initialState:wallet,
    reducers:{  
        setAmount:(state,action)=>{
            console.log(action.payload)
            state.balance=action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(moneyAdded, (state, action) => {
          state.balance += action.payload.amount;
        });
        builder.addCase(moneyUsed, (state, action) => {
          state.balance -= action.payload.amount;
        });
      }
})

export const { setAmount } = WalletSlice.actions;

export default WalletSlice.reducer;