module Mutations
    class AttachContractFiles < BaseMutation
        argument :input, Types::CreateDirectUploadInputType, required: true
        type Types::UploadType

        def resolve(blob_id: )
            if
            @contract.contract_video.attach(blob_id)
        end
    end