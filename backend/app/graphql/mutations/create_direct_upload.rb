# frozen_string_literal: true

module Mutations
  # CreateDirectUpload
  class CreateDirectUpload < BaseMutation
    argument :input, Types::CreateDirectUploadInputType, required: true
    type Types::DirectUploadType

    def resolve(input: nil)
      blob = ActiveStorage::Blob.create_before_direct_upload!(input.to_h)
      {
        url: blob.service_url_for_direct_upload,
        headers: blob.service_headers_for_direct_upload.to_json,
        blob_id: blob.id,
        signed_blob_id: blob.signed_id
      }
    end
  end
end
