import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../modules/authentication/authSlice";
import recipientSlice from "../modules/recipients/recipientSlice";
import listSlice from "../modules/lists/listSlice";


export const store = configureStore({
    reducer: {
        auth: authSlice,
        recipient: recipientSlice,
        list: listSlice
    }
})