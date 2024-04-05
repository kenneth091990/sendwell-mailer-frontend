import { createAsyncThunk } from "@reduxjs/toolkit";
import { graphqlMutationThunk, graphqlQueryThunk } from "../../core/constants";
import client from "../../core/client";
import { GET_SUPRESSION_LIST, SUPRESSION_DELETE, SUPRESSION_UPLOAD } from "../../graphql/supression.schema";

export const getSupressionList = createAsyncThunk(
    'supression/get_list',
    async (payload) => graphqlQueryThunk(
        client,
        GET_SUPRESSION_LIST,
        payload,
        'getSupressionList',
        'getting supression list',
        payload?.fetchPolicy
    )
)

export const supressionFileUpload = createAsyncThunk(
    'supression/upload_list',
    async (payload) => graphqlMutationThunk(
        client,
        SUPRESSION_UPLOAD,
        payload,
        'supressionFileUpload',
        'uploading supression file'
    )
)

export const supressionDelete = createAsyncThunk(
    'supression/delete',
    async (payload) => graphqlMutationThunk(
        client,
        SUPRESSION_DELETE,
        payload,
        'supressionDelete',
        'deleteing supression file'
    )
)