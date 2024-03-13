import { createSlice } from "@reduxjs/toolkit"
import { createFromRecipientList, getRecipientToList } from "./recipientThunks";

const initialState = {
    event: "",
    status: "initial",
    message: "",
    data: null
}

export const RECIPIENT_EVENT = {
    create_list: 'create_recipient_from_list',
    get_recipient_to_list: 'get_recipient_to_list',
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
        builders.addCase(createFromRecipientList.pending, (state) => {
            state.event = RECIPIENT_EVENT.create_list;
            state.status = "loading";
        }).addCase(createFromRecipientList.fulfilled, (state, { payload }) => {
            state.event = RECIPIENT_EVENT.create_list;
            if (payload?.message) {
                state.status = "error";
                state.message = payload?.message;
            } else {
                state.status = "success";
                state.message = "Success creating new List from Imported CSV File";
                console.log(payload, "fromasdkflahjkdfga dfg")
                state.data = payload;
            }
        }).addCase(createFromRecipientList.rejected, (state, { error }) => {
            state.event = RECIPIENT_EVENT.create_list;
            state.status = "error";
            state.message = error?.message ?? "Something went wrong. Please try again";
        })

        builders.addCase(getRecipientToList.pending, (state) => {
            state.event = RECIPIENT_EVENT.get_recipient_to_list;
            state.status = "loading";
        }).addCase(getRecipientToList.fulfilled, (state, { payload }) => {
            state.event = RECIPIENT_EVENT.get_recipient_to_list;
            if (payload?.message) {
                state.status = "error";
                state.message = payload?.message;
            } else {
                state.status = "success";
                state.message = "Success";
                console.log(payload, "fromasdkflahjkdfga dfg")
                state.data = payload;
            }
        }).addCase(getRecipientToList.rejected, (state, { error }) => {
            state.event = RECIPIENT_EVENT.get_recipient_to_list;
            state.status = "error";
            state.message = error?.message ?? "Something went wrong. Please try again";
        })
    }
})

export const { resetRecipientState } = recipientSlice.actions;

export const selectRecipient = (state) => state.recipient;

export default recipientSlice.reducer;