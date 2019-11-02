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
      images = files[images]

      contract.video.attach(files[video])
      contract.audio.attach(files[audio])

      images.each {|image| contract.image.attach(image)}
    end
  end
end
