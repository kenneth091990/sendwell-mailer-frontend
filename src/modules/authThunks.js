import { createAsyncThunk } from "@reduxjs/toolkit";
import client from "../core/client";
import { graphqlMutationThunk, graphqlQueryThunk } from "../core/constants";
import { CONFIRM_USER, FORGOT_PASSWORD, GET_CURRENTUSER, LOGIN_USER, REGISTER_USER, RESET_PASSWORD } from "../graphql/auth.schema";

export const loginThunk = createAsyncThunk(
    'auth/login',
    async (payload) => await graphqlMutationThunk(client,
        LOGIN_USER,
        payload,
        'loginUser',
        'loggin user account'
    )
)

export const registerUserThunk = createAsyncThunk(
    'auth/register',
    async (payload) => await graphqlMutationThunk(
        client,
        REGISTER_USER,
        payload,
        'registerUser',
        'registering user account'
    )
)

export const forgotPasswordThunk = createAsyncThunk(
    'auth/forgot_password',
    async (payload) => await graphqlMutationThunk(
        client,
        FORGOT_PASSWORD,
        payload,
        'forgotPasswordUser',
        'getting user details'
    )
)

export const resetPasswordThunk = createAsyncThunk(
    'auth/reset_password',
    async (payload) => await graphqlMutationThunk(
        client,
        RESET_PASSWORD,
        payload,
        'resetPasswordUser',
        'getting user details',
    )
)

export const confirmUserThunk = createAsyncThunk(
    'auth/confirm_user',
    async (payload) => graphqlMutationThunk(
        client,
        CONFIRM_USER,
        payload,
        'confirmUser',
        'getting user details'
    )
)

export const getCurrentUserThunk = createAsyncThunk(
    'auth/current_user',
    async (payload) => graphqlQueryThunk(client,
        GET_CURRENTUSER,
        {},
        'currentUser',
        'getting user details',
        payload?.fetchPolicy)
)