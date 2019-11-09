import { getFileMetadata, directUpload } from './activestorage';
import { uploadMutation } from '../graphql/mutations';

export const upload = async (file) => {
    const input = await getFileMetadata(file);
    const { data } = await uploadMutation({ input });
    const { createDirectUpload } = data;
    const { url, headers, signedBlobId } = createDirectUpload;
    const response = await directUpload(url, JSON.parse(headers), file);
    return {
        response,
        signedBlobId
    };
}
