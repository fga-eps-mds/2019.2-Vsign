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
