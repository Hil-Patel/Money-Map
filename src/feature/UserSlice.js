/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit'

const details = {
  name:(JSON.parse(localStorage.getItem("logStatus"))).username
}

export const UserSlice = createSlice({
  name: 'user',
  initialState:details,
  reducers: {
    UserloggedIn:(state,action)=>{
        state.name=action.payload;
    },
    UserloggedOut:(state)=>{
        state.name="";
    }
  },
})

export const { UserloggedIn,UserloggedOut } = UserSlice.actions

export default UserSlice.reducer