import { uploadMutation } from '../../graphql/mutations';
import { directUpload, getFileMetadata } from '../../utils/activestorage';


export default upload =  async (file) => {
        const input = await getFileMetadata(file);
        const { data } = await uploadMutation({ input });
        const { createDirectUpload } = data;
        const { url, headers, signedBlobId } = createDirectUpload;
        const response = await directUpload(url, JSON.parse(headers), file)
        return {response, signedBlobId}
        // do smth with signedBlobId – our file has been uploaded!
}