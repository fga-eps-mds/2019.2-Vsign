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

export async function attachContractFilesMutation(variables) {
    const ATTACH_CONTRACT_FILES_MUTATION = gql`
        mutation AttachContractFilesMutation($input: AttachContractFiles!) {
            attachContractFiles(input: $input) {
                contractId,
                files(input: $input) {
                    video,
                    images,
                    audio
                }
            }
        }
    `;

    const response = await apollo.mutate({
        mutation: ATTACH_CONTRACT_FILES_MUTATION,
        variables
    });
    return response
}