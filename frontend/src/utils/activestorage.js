import { FileChecksum } from "activestorage/src/file_checksum";
import { BlobUpload } from "activestorage/src/blob_upload";

async function calculateChecksum(file) {
  return new Promise((resolve, reject) => {
    FileChecksum.create(file, (error, checksum) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(checksum);
    });
  });
}

export const getFileMetadata = async (file) => {
  console.log(file);
  return new Promise((resolve) => {
    calculateChecksum(file).then((checksum) => {
      resolve({
        checksum,
        filename: file.name,
        contentType: file.type,
        byteSize: file.size
      });
    });
  }).then(metadata => metadata);
};

export const directUpload = (url, headers, file) => {
  const upload = new BlobUpload({ file, directUploadData: { url, headers } });
  return new Promise((resolve, reject) => {
    upload.create(error => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    })
  });
};