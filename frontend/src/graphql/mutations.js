import { client as apollo } from './client';
import gql from 'graphql-tag';

export async function uploadMutation(variables) {
    const mutation = gql`
        mutation UploadMutation($input: CreateDirectUploadInput!) {
            createDirectUpload(input: $input) {
                url,
                headers,
                signedBlobId
            }
        }
    `;

    return await apollo.mutate({
        mutation,
        variables
    });
}

export async function current_user() {
    const query = gql`
        query currentUser {
            currentUser {
                id
                name
            }
        }
    `;

    return await apollo.query({
        query
    });
}

export async function attachContractFilesMutation(variables) {
    const mutation = gql`
        mutation AttachContractFilesMutation($contractId: String!, $files: AttachContractFilesInput!) {
            attachContractFiles(contractId: $contractId, files: $files) {
                success
            }
        }
    `;

    return await apollo.mutate({
        mutation,
        variables
    });
};

export async function loginUser(variables) {
    const mutation = gql`
        mutation login($email: String!, $password: String!) {
            login(
                email: $email
                password: $password
            ) {
                token
            }
        }
    `;

    return await apollo.mutate({
        mutation,
        variables
    });
}

export async function loginByTokenMutation(variables) {
    const mutation = gql`
        mutation LoginByToken($token: String!) {
            loginByToken(token: $token) {
                token,
                name
            }
        }
    `;

    return await apollo.mutate({
        mutation,
        variables
    });
}