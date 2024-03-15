import { createSlice } from "@reduxjs/toolkit"



const initialState = {
    event: "",
    status: "initial",
    message: "",
    data: null
}

export const LIST_EVENTS = {
    
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

    }
})


export const { resetListState } = listSlice.actions;

export const selectListState = (state) => state.list;

export default listSlice.reducer;