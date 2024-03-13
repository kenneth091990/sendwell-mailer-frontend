import { createAsyncThunk } from "@reduxjs/toolkit";
import { graphqlMutationThunk, graphqlQueryThunk } from "../../core/constants";
import client from "../../core/client";
import { CREATE_RECIPIENT_FROM_LIST, GET_RECIPIENT_TO_LIST } from "../../graphql/recipient.schema";


export const createFromRecipientList = createAsyncThunk(
    'recipient/create_from_list',
    async (payload) => await graphqlMutationThunk(
        client,
        CREATE_RECIPIENT_FROM_LIST,
        payload,
        'createFromRecipientList',
        'Creating New List'
    )
)

export const getRecipientToList = createAsyncThunk(
    'recipient/get_recipient_to_list',
    async (payload) => await graphqlQueryThunk(
        client,
        GET_RECIPIENT_TO_LIST,
        payload,
        'getRecipientToList',
        'Getting Recipient Lists',
        payload?.fetchPolicy
    )
)