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
            const Name = JSON.parse( localStorage.getItem( "logStatus" ) )?.username;
            state.transactions.push(action.payload)
            state.income.push( action.payload )
            state.transactions.sort( ( transaction1, transaction2 )=>new Date(transaction1.date) - new Date(transaction2.date))
            state.income.sort( ( transaction1, transaction2 ) => new Date( transaction1.date ) - new Date( transaction2.date ) )
            localStorage.setItem(`${Name}transaction`,JSON.stringify(state))
        },
        addExpense:(state,action)=>{
            const Name = JSON.parse( localStorage.getItem( "logStatus" ) )?.username;
            state.transactions.push(action.payload)
            state.expense.push( action.payload )
            state.transactions.sort( ( transaction1, transaction2 )=>new Date(transaction1.date) - new Date(transaction2.date))
            state.expense.sort( ( transaction1, transaction2 )=>new Date(transaction1.date) - new Date(transaction2.date))
            localStorage.setItem(`${Name}transaction`,JSON.stringify(state))
        },
        setTransaction:(state,action)=>{
            state.transactions = action.payload.transactions;
            state.income = action.payload.income;
            state.expense = action.payload.expense;
        
        }
    }
})

export const {addIncome,addExpense,setTransaction} = TransactionSlice.actions;

export default TransactionSlice.reducer;