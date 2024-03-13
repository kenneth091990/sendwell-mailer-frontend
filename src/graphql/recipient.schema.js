import { gql } from "@apollo/client";

export const CREATE_RECIPIENT_FROM_LIST = gql`
mutation createFromRecipientList(
    $recipientList: [RecipientInput],
    $listTitle: String!,
    $listDescription: String,
    $status: Boolean,
) {
    createFromRecipientList(
        recipientList: $recipientList,
        listTitle: $listTitle,
        listDescription: $listDescription,
        status: $status,
    ) {
        recipient_id
        email_local_part
        domain_id
        domain {
            domain_id
            domain_name
        }
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
    }
}
`;

export const GET_RECIPIENT_TO_LIST = gql`
query getRecipientToList(
    $searchInput: String,
    $status: Boolean,
    $pageSize: Int!,
    $page: Int!,
) {
    getRecipientToList(
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