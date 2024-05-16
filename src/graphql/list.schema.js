import { gql } from "@apollo/client";

export const CREATE_LIST = gql`
mutation createList(
    $recipientList: [RecipientInput],
    $listTitle: String!,
    $fileType: String!,
    $listDescription: String,
    $status: Boolean,
) {
    createList(
        recipientList: $recipientList,
        listTitle: $listTitle,
        listDescription: $listDescription,
        fileType: $fileType,
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
        recipient_count
        description
        status
    }
}
`;

export const DOWNLOAD_LIST = gql`
mutation downloadList($list_id: String!) {
    downloadList(list_id: $list_id) {
        list_id
        name        
        recipient_to_list {
            recipient {
                email_local_part
                first_name
                last_name
                street_1
                street_2
                city
                state
                zip
                phone
                gender
                country
                military_service
                site_name
                credit_rating
                sub_vertical_name
                loan_purpose
                mortgage_loan_purpose
                total_loan_amount
                opt_in_date
                vertical
                vehicle_make
                vehicle_model
                own_or_rent
                ip_address
                birthday
                age
                signup_id_hash
                electric_company
                vehicle_year
                domain {
                    domain_name
                  	domain_id
                }
            }
        }
    }
}
`;

export const MERGE_LIST = gql`
mutation mergeList($list_ids: [String], $name: String!, $description: String) {
    mergeList(list_ids: $list_ids, name: $name, description: $description) {
        list_id
        name        
        description
        status
    }
}
`