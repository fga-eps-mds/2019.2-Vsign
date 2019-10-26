module Types
  class MutationType < BaseObject

    # field :create_direct_upload, mutation: Mutations::CreateDirectUpload
    field :create_user, mutation: Mutations::CreateUser
    field :login, mutation: Mutations::LogUser
  end
end