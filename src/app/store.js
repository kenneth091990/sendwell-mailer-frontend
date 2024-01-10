import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../modules/authSlice";


export const store = configureStore({
    reducer: {
        auth: authSlice
    }
})