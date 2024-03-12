import { createSlice } from "@reduxjs/toolkit";
import { confirmUserThunk, forgotPasswordThunk, getCurrentUserThunk, loginThunk, registerUserThunk, resetPasswordThunk } from "./authThunks";

const initialState = {
    status: "initial",
    event: "",
    message: "",
    data: null
}


export const AUTH_EVENTS = {
    login: "login",
    currentUser: "currentUser",
    loggedOut: "loggedOut",
    confirmUser: "confirmUser",
    register: "register",
    forgotPassword: "forgotPassword",
    resetPassword: "resetPassword"
}


const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        resetAuth: (state) => {
            state.status = "initial";
            state.event = "";
            state.message = "";
            state.data = null;
        }
    },
    extraReducers: builders => {
        builders.addCase(loginThunk.pending, (state) => {
            state.event = AUTH_EVENTS.login;
            state.status = "loading";
        }).addCase(loginThunk.fulfilled, (state, { payload }) => {
            state.event = AUTH_EVENTS.login;
            if (payload?.message) {
                state.status = "error";
                state.message = payload?.message;
            } else {
                state.status = "success";
                state.message = `Success logged in ${payload?.data?.username}`
                state.data = payload;
            }
        }).addCase(loginThunk.rejected, (state, { error }) => {
            state.event = AUTH_EVENTS.login;
            state.status = "error";
            state.message = error?.message;
        })

        builders.addCase(registerUserThunk.pending, (state) => {
            state.event = AUTH_EVENTS.register;
            state.status = "loading";
        }).addCase(registerUserThunk.fulfilled, (state, { payload }) => {
            state.event = AUTH_EVENTS.register;
            if (payload?.message) {
                state.status = "error";
                state.message = payload?.message;
            } else {
                state.status = "success";
                state.message = "Successfully registered. Please wait for the confirmation email to login your account";
                state.data = payload;
            }
        }).addCase(registerUserThunk.rejected, (state, { error }) => {
            state.event = AUTH_EVENTS.register;
            state.status = "error";
            state.message = error?.message;
        })


        builders.addCase(resetPasswordThunk.pending, (state) => {
            state.event = AUTH_EVENTS.resetPassword
            state.status = "loading"
        }).addCase(resetPasswordThunk.fulfilled, (state, { payload }) => {
            state.event = AUTH_EVENTS.resetPassword
            if (payload?.message) {
                state.status = "error";
                state.message = payload?.message;
            } else {
                state.status = "success";
                state.data = payload;
                state.message = `Successfully updated password for ${payload?.username}`
            }
        }).addCase(resetPasswordThunk.rejected, (state, { error }) => {
            state.event = AUTH_EVENTS.resetPassword
            state.status = "error";
            state.message = error?.message;
        })

        builders.addCase(forgotPasswordThunk.pending, (state) => {
            state.event = AUTH_EVENTS.forgotPassword
            state.status = "loading"
        }).addCase(forgotPasswordThunk.fulfilled, (state, { payload }) => {
            state.event = AUTH_EVENTS.forgotPassword
            if (payload?.message) {
                state.status = "error";
                state.message = payload?.message;
            } else {
                state.status = "success";
                state.message = `Successfully sent reset password request on your email`;
                state.data = payload
            }
        }).addCase(forgotPasswordThunk.rejected, (state, { error }) => {
            state.event = AUTH_EVENTS.forgotPassword
            state.status = "error";
            state.message = error?.message;
        })

        builders.addCase(confirmUserThunk.pending, (state) => {
            state.event = AUTH_EVENTS.confirmUser
            state.status = "loading";
        }).addCase(confirmUserThunk.fulfilled, (state, { payload }) => {
            state.event = AUTH_EVENTS.confirmUser
            if (payload?.message) {
                state.status = "error";
                state.message = payload?.message;
            } else {
                state.status = "success";
                state.message = `Success confirming your user account`;
                state.data = payload;
            }
        }).addCase(confirmUserThunk.rejected, (state, { error }) => {
            state.event = AUTH_EVENTS.confirmUser
            state.status = "error";
            state.message = error?.message;
        })

        builders.addCase(getCurrentUserThunk.pending, (state) => {
            state.event = AUTH_EVENTS.currentUser;
            state.status = "loading";
        }).addCase(getCurrentUserThunk.fulfilled, (state, { payload }) => {
            state.event = AUTH_EVENTS.currentUser;
            if (payload?.message) {
                state.status = 'error';
                state.message = payload?.message;
            } else {
                state.status = "success";
                state.data = payload;
                state.message = "success";
            }
        }).addCase(getCurrentUserThunk.rejected, (state, { error }) => {
            state.event = AUTH_EVENTS.currentUser;
            state.status = "error";
            state.message = error?.message;
        })
    }
})


export const { resetAuth } = authSlice.actions;

export const getAuthState = (state) => state.auth;

export default authSlice.reducer;