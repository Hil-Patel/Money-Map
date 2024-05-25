/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit'

const Transaction={
    transactions:[],
    income:[],
    expense:[]
}

export const TransactionSlice = createSlice({
    name:'transaction',
    initialState:Transaction,
    reducers:{
        addIncome:(state,action)=>{
            state.transactions.push(action.payload)
            state.income.push(action.payload)
        },
        addExpense:(state,action)=>{
            state.transactions.push(action.payload)
            state.expense.push(action.payload)
        },
        setTransaction:(state,action)=>{
            state.transactions = action.payload.transactions;
            state.income = action.payload.income;
            state.expense=action.payload.expense;
        }
    }
})

export const {addIncome,addExpense,setTransaction} = TransactionSlice.actions;

export default TransactionSlice.reducer;