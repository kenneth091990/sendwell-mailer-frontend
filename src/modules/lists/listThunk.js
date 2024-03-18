import { createAsyncThunk } from "@reduxjs/toolkit";
import { graphqlMutationThunk, graphqlQueryThunk } from "../../core/constants";
import client from "../../core/client";
import { CREATE_LIST, DELETE_LIST, GET_LISTS, UPDATE_LIST } from "../../graphql/list.schema";

export const createList = createAsyncThunk(
    'lists/create_list',
    async (payload) => await graphqlMutationThunk(
        client,
        CREATE_LIST,
        payload,
        'createList',
        'creating new list'
    )
)

export const updateList = createAsyncThunk(
    'lists/update_list',
    async (payload) => await graphqlMutationThunk(
        client,
        UPDATE_LIST,
        payload,
        'updateList',
        'updating new list'
    )
)

export const deleteList = createAsyncThunk(
    'lists/delete_list',
    async (payload) => graphqlMutationThunk(
        client,
        DELETE_LIST,
        payload,
        'deleteList',
        'deleting list'
    )
)

export const getLists = createAsyncThunk(
    'lists/get_lists',
    async (payload) => graphqlQueryThunk(
        client,
        GET_LISTS,
        payload,
        'getLists',
        'getting lists data',
        payload?.fetchPolicy ?? "cache-first"
    )
)