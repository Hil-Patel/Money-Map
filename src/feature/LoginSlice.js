import { createSlice } from '@reduxjs/toolkit'

const LoginStatus = {
  status: (JSON.parse(localStorage.getItem("logStatus")))?.logStatus,
}

export const LoginSlice = createSlice({
  name: 'log',
  initialState:LoginStatus,
  reducers: {
    loggedIn:(state)=>{
      state.status = true;
    },
    loggedOut:(state)=>{
      state.status = false;
    }
  },
})

export const { loggedIn,loggedOut } = LoginSlice.actions

export default LoginSlice.reducer