import { createAsyncThunk } from "@reduxjs/toolkit";
import { graphqlMutationThunk, graphqlQueryThunk } from "../../core/constants";
import client from "../../core/client";
import { GET_SUPRESSION_LIST, SUPPRESSION_UPDATE } from "../../graphql/supression.schema";


export const getCementedList = createAsyncThunk(
    'cemented_suppression/get_lists',
    async (payload) => graphqlQueryThunk(
        client,
        GET_SUPRESSION_LIST,
        payload,
        'getSupressionList',
        'getting cemented lists',
        payload?.fetchPolicy
    )
)

export const addCementedList = createAsyncThunk(
    'cemented_suppression/add',
    async (payload) => graphqlMutationThunk(
        client,
        SUPPRESSION_UPDATE,
        payload,
        'suppressionUpdate',
        'adding cemented list'
    )
)

export const deleteCementedList = createAsyncThunk(
    'cemented_suppression/delete',
    async (payload) => graphqlMutationThunk(
        client,
        SUPPRESSION_UPDATE,
        payload,
        'suppressionUpdate',
        'deleting cemented list'
    )
)