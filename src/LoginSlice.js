import { createSlice } from "@reduxjs/toolkit";

const LoginSlice=createSlice({
    name:"usercred",
    initialState:{
        email:"",
    },
    reducers:{
        updateemail:(state,newemail)=>{
            state.email=newemail.payload;
        }
    }
})
export const {updateemail}=LoginSlice.actions;
export default LoginSlice.reducer;
