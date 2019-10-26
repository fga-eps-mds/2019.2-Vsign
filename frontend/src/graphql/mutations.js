import { client as apollo } from './client';
import gql from 'graphql-tag';

export async function uploadMutation(variables) {
    const UPLOAD_MUTATION = gql`
        mutation UploadMutation($input: CreateDirectUploadInput!) {
            createDirectUpload(input: $input) {
                url,
                headers,
                signedBlobId
            }
        }
    `;

    const response = await apollo.mutate({
        mutation: UPLOAD_MUTATION,
        variables
    });
    return response;
}

export async function loginUser(variables) {
    const LOGIN_USER = gql`
        mutation login($email: String!, $password: String!) {
            login(
                email: $email
                password: $password
            ) {
                token
            }
        }
    `;

    const response = await apollo.mutate({
        mutation: LOGIN_USER,
        variables
    });

    return response;
}