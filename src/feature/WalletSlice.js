/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { createSlice } from "@reduxjs/toolkit";
import {addIncome as moneyAdded,addExpense as moneyUsed} from "./TransactionSlice";

const wallet={
  balance:0
}
// const setData = () => {
//   if (Name!=="" ) {
//       localStorage.setItem( `${ Name }wallet`, JSON.stringify( wallet.balance ) );
//   }
// }
export const WalletSlice = createSlice({
  name:"Wallet",
    initialState:wallet,
    reducers:{  
        setAmount:(state,action)=>{
          state.balance = action.payload;
        }
      },
      extraReducers: (builder) => {
        builder.addCase(moneyAdded, (state, action) => {
        const Name = JSON.parse( localStorage.getItem( "logStatus" ) )?.username;
        state.balance += action.payload.amount;
        localStorage.setItem(`${Name}wallet`,JSON.stringify(state.balance))
        
      });
      builder.addCase(moneyUsed, (state, action) => {
        const Name = JSON.parse( localStorage.getItem( "logStatus" ) )?.username;
        state.balance -= action.payload.amount;
        localStorage.setItem(`${Name}wallet`,JSON.stringify(state.balance))
          
        });
      }
})

export const { setAmount } = WalletSlice.actions;

export default WalletSlice.reducer;