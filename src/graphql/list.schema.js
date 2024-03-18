import { gql } from "@apollo/client";

export const CREATE_LIST = gql`
mutation createList(
    $recipientList: [RecipientInput],
    $listTitle: String!,
    $listDescription: String,
    $status: Boolean,
) {
    createList(
        recipientList: $recipientList,
        listTitle: $listTitle,
        listDescription: $listDescription,
        status: $status,
    ) {
        list_id
        name
        description
        status
    }
}
`

export const UPDATE_LIST = gql`
mutation updateList(
    $list_id: String!,
    $name: String!,
    $description: String,
    $status: Boolean!,
){
    updateList(
        list_id: $list_id,
        name: $name,
        description: $description,
        status: $status,
    ) {
        list_id
        name
        description
        status
    }
}
`;

export const DELETE_LIST = gql`
mutation deleteList($list_id: String!){
    deleteList(list_id: $list_id) {
        list_id
        name
        description
        status
    }
}
`;

export const GET_LISTS = gql`
query getLists(
    $searchInput: String,
    $status: Boolean,
    $pageSize: Int!,
    $page: Int!,
) {
    getLists(
        searchInput: $searchInput,
        status: $status,
        pageSize: $pageSize,
        page: $page,
    ) {
        totalItems
        totalPages
        lists{
        list_id
        name
        description
        status
        recipient_to_list {
            recipient_id
                recipient {
                    email_local_part
                }
            }
        }
    }
}
`;