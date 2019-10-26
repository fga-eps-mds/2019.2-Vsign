# frozen_string_literal: true

module Mutations
  # AttachContractFiles
  class AttachContractFiles < BaseMutation
    argument :contract_id, Int, required: true
    argument :files, Types::AttachContractFilesInputType, required: true
    type Types::AttachContractFilesType

    def resolve(contract_id, files)
      # implement
    end
  end
end
