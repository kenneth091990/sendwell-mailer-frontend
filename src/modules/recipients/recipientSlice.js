import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    event: "",
    status: "initial",
    message: "",
    data: null
}


const recipientSlice = createSlice({
    name: "recipients",
    initialState,
    reducers: {
        resetRecipientState: (state) => {
            state.data = null;
            state.event = "";
            state.status = "initial";
            state.message = "";
        }
    },
    extraReducers: builders => {

    }
})

export const { resetRecipientState } = recipientSlice.actions;

export const selectRecipient = (state) => state.recipient;

export default recipientSlice.reducer;