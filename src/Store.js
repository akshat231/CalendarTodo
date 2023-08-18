import { configureStore } from "@reduxjs/toolkit";
import Loginslice from "./LoginSlice.js";
import PostSlice from "./PostSlice.js";


const Store=configureStore({
    reducer:{
        email:Loginslice,
        posts:PostSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(
        {
            serializableCheck:false
        }
    ),
})


export default Store