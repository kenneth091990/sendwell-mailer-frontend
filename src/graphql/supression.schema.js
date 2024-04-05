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
        suppression_id
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
        suppression_id
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

export const SUPRESSION_DELETE = gql`
mutation supressionDelete($suppression_id: String!) {
    supressionDelete(suppression_id: $suppression_id) {
        suppression_id
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
`;

export const SUPPRESSION_UPDATE = gql`
mutation suppressionUpdate(
  $suppression_id: String!,
  $name: String,
  $description: String,
  $status: Boolean,
  $cemented: Boolean,
  $is_domain_file: Boolean,
  $supression_type: String
){
  suppressionUpdate(
    suppression_id: $suppression_id,
    name: $name,
    description: $description,
    status: $status,
    cemented: $cemented,
    is_domain_file: $is_domain_file,
    supression_type: $supression_type,
  ) {
    suppression_id
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

export const SELECTION_SUPPRESSION = gql`
query selectionSuppression($status: Boolean, $cemented: Boolean) {
  selectionSuppression(status: $status, cemented: $cemented) {
    suppression_id
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
`;