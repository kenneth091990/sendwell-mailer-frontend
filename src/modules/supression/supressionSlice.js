import { createSlice } from "@reduxjs/toolkit"
import { getSupressionList, supressionFileUpload } from "./supressionThunk";

const initialState = {
    event: "",
    status: "initial",
    message: "",
    data: null
}


export const SUPRESSION_EVENTS = {
    upload_files: "upload_supression_files",
    get_list: "get_supression_list",

}


const supressionSlice = createSlice({
    name: "supression",
    initialState,
    reducers: {
        resetSupressionState: (state) => {
            state.event = "";
            state.status = 'initial';
            state.data = null;
            state.message = "";
        }
    },
    extraReducers: builders => {
        builders.addCase(getSupressionList.pending, (state) => {
            state.event = SUPRESSION_EVENTS.get_list;
            state.status = "loading";
        }).addCase(getSupressionList.fulfilled, (state, { payload }) => {
            state.event = SUPRESSION_EVENTS.get_list;
            if (payload?.message) {
                state.status = "error";
                state.message = payload?.message;
            } else {
                state.message = 'success';
                state.data = payload;
                state.status = "success"
            }
        }).addCase(getSupressionList.rejected, (state, { error }) => {
            state.event = SUPRESSION_EVENTS.get_list;
            state.status = 'error';
            state.message = error?.message ?? "Something went wrong. Please try again";
        })

        builders.addCase(supressionFileUpload.pending, (state) => {
            state.event = SUPRESSION_EVENTS.upload_files;
            state.status = "loading";
        }).addCase(supressionFileUpload.fulfilled, (state, { payload }) => {
            state.event = SUPRESSION_EVENTS.upload_files;
            if (payload?.message) {
                state.status = "error";
                state.message = payload?.message;
            } else {
                state.status = "success";
                state.message = 'Successfully uploaded new Supression List';
                state.data = payload;
            }
        }).addCase(supressionFileUpload.rejected, (state, { error }) => {
            state.event = SUPRESSION_EVENTS.upload_files;
            state.status = 'error';
            state.message = error?.message ?? "Something went wrong. Please try again";
        })
    }
})


export const { resetSupressionState } = supressionSlice.actions;

export const selectSupression = (state) => state.supression;

export default supressionSlice.reducer;