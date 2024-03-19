import { createSlice } from "@reduxjs/toolkit"
import { createList, deleteList, downloadList, getLists, mergeList, updateList } from "./listThunk";



const initialState = {
    event: "",
    status: "initial",
    message: "",
    data: null
}

export const LIST_EVENTS = {
    create: "create_list",
    update: "update_list",
    merge: "merge_list",
    delete: "delete_list",
    download: "download_list",
    get_list: "get_list_lists",
}

const listSlice = createSlice({
    name: "lists",
    initialState,
    reducers: {
        resetListState: (state) => {
            state.data = null;
            state.event = "";
            state.message = "";
            state.status = "initial";
        }
    },
    extraReducers: builders => {
        builders.addCase(createList.pending, (state) => {
            state.event = LIST_EVENTS.create;
            state.status = "loading";
        }).addCase(createList.fulfilled, (state, { payload }) => {
            state.event = LIST_EVENTS.create
            if (payload?.message) {
                state.status = "error";
                state.message = payload?.message;
            } else {
                state.status = "success";
                state.message = "Successfully created new List";
                state.data = payload;
            }
        }).addCase(createList.rejected, (state, { error }) => {
            state.event = LIST_EVENTS.create
            state.status = "error";
            state.message = error?.message ?? "Something went wrong. Please try again";
        })

        builders.addCase(updateList.pending, (state) => {
            state.event = LIST_EVENTS.update;
            state.status = "loading";
        }).addCase(updateList.fulfilled, (state, { payload }) => {
            state.event = LIST_EVENTS.update
            if (payload?.message) {
                state.status = "error";
                state.message = payload?.message;
            } else {
                state.status = "success";
                state.message = "Successfully updated List";
                state.data = payload;
            }
        }).addCase(updateList.rejected, (state, { error }) => {
            state.event = LIST_EVENTS.update
            state.status = "error";
            state.message = error?.message ?? "Something went wrong. Please try again";
        })

        builders.addCase(deleteList.pending, (state) => {
            state.event = LIST_EVENTS.delete
            state.status = "loading";
        }).addCase(deleteList.fulfilled, (state, { payload }) => {
            state.event = LIST_EVENTS.delete
            if (payload?.message) {
                state.status = "error";
                state.message = payload?.message;
            } else {
                state.status = "success";
                state.message = "Successfully deleted List";
                state.data = payload;
            }
        }).addCase(deleteList.rejected, (state, { error }) => {
            state.event = LIST_EVENTS.delete
            state.status = "error";
            state.message = error?.message ?? "Something went wrong. Please try again";
        })

        builders.addCase(getLists.pending, (state) => {
            state.event = LIST_EVENTS.get_list
            state.status = "loading";
        }).addCase(getLists.fulfilled, (state, { payload }) => {
            state.event = LIST_EVENTS.get_list
            if (payload?.message) {
                state.status = "error";
                state.message = payload?.message;
            } else {
                state.status = "success";
                state.message = "Success";
                state.data = payload;
            }
        }).addCase(getLists.rejected, (state, { error }) => {
            state.event = LIST_EVENTS.get_list
            state.status = "error";
            state.message = error?.message ?? "Something went wrong. Please try again";
        })

        builders.addCase(downloadList.pending, (state) => {
            state.event = LIST_EVENTS.download
            state.status = "loading";
        }).addCase(downloadList.fulfilled, (state, { payload }) => {
            state.event = LIST_EVENTS.download
            if (payload?.message) {
                state.status = "error";
                state.message = payload?.message;
            } else {
                state.status = "success";
                state.message = "Success exporting csv report file";
                state.data = payload;
            }
        }).addCase(downloadList.rejected, (state, { error }) => {
            state.event = LIST_EVENTS.download
            state.status = "error";
            state.message = error?.message ?? "Something went wrong. Please try again";
        })

        builders.addCase(mergeList.pending, (state) => {
            state.event = LIST_EVENTS.merge
            state.status = "loading";
        }).addCase(mergeList.fulfilled, (state, { payload }) => {
            state.event = LIST_EVENTS.merge
            if (payload?.message) {
                state.status = "error";
                state.message = payload?.message;
            } else {
                state.status = "success";
                state.message = "Success merging new List";
                state.data = payload;
            }
        }).addCase(mergeList.rejected, (state, { error }) => {
            state.event = LIST_EVENTS.merge
            state.status = "error";
            state.message = error?.message ?? "Something went wrong. Please try again";
        })
    }
})


export const { resetListState } = listSlice.actions;

export const selectListState = (state) => state.list;

export default listSlice.reducer;