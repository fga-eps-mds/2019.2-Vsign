# frozen_string_literal: true

module Mutations
  # AttachContractFiles
  class AttachContractFiles < BaseMutation
    argument :contract_id, String, required: true
    argument :files, Types::AttachContractFilesInputType, required: true
    type Types::AttachContractFilesType

    def resolve(contract_id: nil, files: nil)
      current_user = context[:current_user]
      contract = current_user.contracts.find(contract_id)

      files = files.to_h
      
      contract.video.attach(files[:video])
      contract.audio.attach(files[:audio])
      
      images = files[:images]
      images.each {|image| contract.image.attach(image)}

      ExtractAudioTextJob.perform_later contract.id

      {
        success: true
      }
    end
  end
end
