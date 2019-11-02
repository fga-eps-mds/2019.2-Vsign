import { uploadMutation } from '../../graphql/mutations';
import { directUpload, getFileMetadata } from '../../utils/activestorage';


export const upload = async (file) => {
    console.log(file);
    getFileMetadata(file).then(a => console.log(a));
    // console.log(input);
    const input = {};
    const { data } = await uploadMutation({ input });
    const { createDirectUpload } = data;
    const { url, headers, signedBlobId } = createDirectUpload;
    const response = await directUpload(url, JSON.parse(headers), file)
    return {
        response,
        signedBlobId
    };
}