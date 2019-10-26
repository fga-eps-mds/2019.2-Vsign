# frozen_string_literal: true

module Types
  # AttachContractFilesInputType
  class AttachContractFilesInputType < GraphQL::Schema::InputObject
    description 'File information required to prepare a direct upload'

    argument :video, String, 'BlobId do video', required: true
    argument :images, [String], 'BlobId das imagens', required: true
    argument :audio, String, 'BlobId das imagens', required: true
  end
end
