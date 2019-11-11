# frozen_string_literal: true

module Types
  class MutationType < BaseObject

    field :login, mutation: Mutations::LoginUser, null: true
    field :create_direct_upload, mutation: Mutations::CreateDirectUpload
    field :attach_contract_files, mutation: Mutations::AttachContractFiles

  end
end