# frozen_string_literal: true

module Types
  class MutationType < BaseObject

    field :create_user, mutation: Mutations::CreateUser
    field :login, mutation: Mutations::LogUser, null: true
    field :create_direct_upload, mutation: Mutations::CreateDirectUpload
    field :attach_contract_files, mutation: Mutations::AttachContractFiles

  end
end