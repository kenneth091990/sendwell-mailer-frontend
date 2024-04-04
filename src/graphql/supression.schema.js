import { gql } from "@apollo/client";

export const GET_SUPRESSION_LIST = gql`
query getSupressionList(
    $searchInput: String,
    $status: Boolean,
    $cemented: Boolean,
    $suppression_type: String,
    $pageSize: Int!,
    $page: Int!,
    $startDate: String,
    $endDate: String,
  ){
    getSupressionList(
      searchInput: $searchInput,
      status: $status,
      cemented: $cemented,
      suppression_type: $suppression_type,
      pageSize: $pageSize,
      page: $page,
      startDate: $startDate,
      endDate: $endDate,
    ) {
      totalItems
      supressions {
        supression_id
        name
        description
        filepath
        status
        cemented
        is_domain_file
        supression_type
        created_at
        updated_at
      }
      totalPages
      currentPage
    }
  }
`

export const SUPRESSION_UPLOAD = gql`
mutation supressionFileUpload(
        $name: String!,
        $description: String,
        $filepath: Upload!,
        $status: Boolean 
    ) {
    supressionFileUpload(
        name: $name,
        description: $description,
        filepath: $filepath,
        status: $status,
    ) {
        supression_id
        name
        description
        filepath
        status
        cemented
        is_domain_file
        supression_type
        created_at
        updated_at
    }
}
`