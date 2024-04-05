import { createSlice } from "@reduxjs/toolkit"
import { addCementedList, deleteCementedList, getCementedList } from "./cementedSuppressionThunk";

const initialState = {
    event: "",
    status: "initial",
    message: "",
    data: null,
}

export const CEMENTED_SUPPRESSION_EVENT = {
    get_lists: "get_cemented_lists",
    add: "add_cemented_list",
    delete: "delete_cemented_list",
}

const cementedSuppressionSlice = createSlice({
    name: "cemented_suppression",
    initialState,
    reducers: {
        resetCementedState: ({ data, event, message, status }) => {
            event = "";
            status = "initial";
            message = "";
            data = null;
        }
    },
    extraReducers: builders => {
        builders.addCase(getCementedList.pending, (state) => {
            state.event = CEMENTED_SUPPRESSION_EVENT.get_lists;
            state.status = "loading";
        }).addCase(getCementedList.fulfilled, (state, { payload }) => {
            state.event = CEMENTED_SUPPRESSION_EVENT.get_lists;
            if (payload?.message) {
                state.status = "error";
                state.message = payload?.message;
            } else {
                state.status = "success"
                state.data = payload;
                state.message = "success";
            }
        }).addCase(getCementedList.rejected, (state, { error }) => {
            state.event = CEMENTED_SUPPRESSION_EVENT.get_lists;
            state.status = "error";
            state.message = error?.message ?? "Something went wrong. Please try again"
        })

        builders.addCase(addCementedList.pending, (state) => {
            state.event = CEMENTED_SUPPRESSION_EVENT.add;
            state.status = "loading";
        }).addCase(addCementedList.fulfilled, (state, { payload }) => {
            state.event = CEMENTED_SUPPRESSION_EVENT.add;
            if (payload?.message) {
                state.status = "error";
                state.message = payload?.message;
            } else {
                state.status = "success";
                state.message = "Successfully added cemented suppression";
                state.data = payload;
            }
        }).addCase(addCementedList.rejected, (state, { error }) => {
            state.event = CEMENTED_SUPPRESSION_EVENT.add;
            state.status = "error";
            state.message = error?.message ?? "Something went wrong. Please try again";
        })

        builders.addCase(deleteCementedList.pending, (state) => {
            state.event = CEMENTED_SUPPRESSION_EVENT.delete;
            state.status = "loading";
        }).addCase(deleteCementedList.fulfilled, (state, { payload }) => {
            state.event = CEMENTED_SUPPRESSION_EVENT.delete;
            if (payload?.message) {
                state.status = "error";
                state.message = payload?.message;
            } else {
                state.status = "success";
                state.data = payload;
                state.message = "Successfully deleted cemented suppression";
            }
        }).addCase(deleteCementedList.rejected, (state, { error }) => {
            state.event = CEMENTED_SUPPRESSION_EVENT.delete;
            state.status = "error";
            state.message = error?.message ?? "Something went wrong. Please try again";
        })
    }
})

export const { resetCementedState } = cementedSuppressionSlice.actions;

export const selectCementSuppression = (state) => state.cemented_suppression

export default cementedSuppressionSlice.reducer;