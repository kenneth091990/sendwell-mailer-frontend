import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../modules/authentication/authSlice";
import recipientSlice from "../modules/recipients/recipientSlice";
import listSlice from "../modules/lists/listSlice";
import supressionSlice from "../modules/supression/supressionSlice";


export const store = configureStore({
    reducer: {
        auth: authSlice,
        recipient: recipientSlice,
        list: listSlice,
        supression: supressionSlice
    }
})