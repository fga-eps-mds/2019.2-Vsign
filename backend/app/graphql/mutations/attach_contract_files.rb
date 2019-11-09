# frozen_string_literal: true

module Mutations
  # AttachContractFiles
  class AttachContractFiles < BaseMutation
    argument :contract_id, Int, required: true
    argument :files, Types::AttachContractFilesInputType, required: true
    type Types::AttachContractFilesType

    def resolve(contract_id: nil, files: nil)
      contract = Contract.find(id: contract_id, user: current_user )

      files = files.to_h
      
      contract.video.attach(files[:video])
      contract.audio.attach(files[:audio])
      
      images = files[:images]
      images.each {|image| contract.image.attach(image)}
      ExtractAudioTextJob.perform_later contract.id
    end
  end
end
