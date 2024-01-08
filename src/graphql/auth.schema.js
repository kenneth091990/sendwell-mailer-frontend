import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
mutation loginUser($emailOrUsername: String!, $password: String!){
    loginUser(emailOrUsername: $emailOrUsername, password: $password){
        token
        data {
            id
            role
            username
            email
            password
            firstName
            middleName
            lastName
            photoUrl
            createdAt
            updatedAt
        }
    }
}
`;

export const REGISTER_USER = gql`
mutation registerUser(
    $role: String,
    $username: String!,
    $email: String!,
    $password: String!,
    $firstName: String,
    $middleName: String,
    $lastName: String,
    $photoUrl: Upload,
){
    registerUser(
        role: $role,
        username: $username,
        email: $email,
        password: $password,
        firstName: $firstName,
        middleName: $middleName,
        lastName: $lastName,
        photoUrl: $photoUrl,
    ){
        id
        role
        username
        email
        password
        firstName
        middleName
        lastName
        photoUrl
        createdAt
        updatedAt
    }
}
`;

export const FORGOT_PASSWORD = gql`
mutation forgotPasswordUser($emailOrUsername: String!){
    forgotPasswordUser(emailOrUsername: $emailOrUsername){
        id
        role
        username
        email
    }
}
`;

export const RESET_PASSWORD = gql`
mutation resetPasswordUser($token: String!, $password: String!, $confirm_password: String!) {
    resetPasswordUser(token: $token, password: $password, confirm_password: $confirm_password) {
        id
        role
        username
        email
    }
}
`;

export const CONFIRM_USER = gql`
mutation confirmUser($token: String!) {
    confirmUser(token: $token) {
        token
        data {
            id
            role
            username
            email
            password
            firstName
            middleName
            lastName
            photoUrl
            createdAt
            updatedAt
        }
    }
}
`;


// * QUERIES
export const GET_CURRENTUSER = gql`
query currentUser{
    currentUser{
        token
        data {
            id
            role
            username
            email
            password
            firstName
            middleName
            lastName
            photoUrl
            createdAt
            updatedAt
        }
    }
}
`;