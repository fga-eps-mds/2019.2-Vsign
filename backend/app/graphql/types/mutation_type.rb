module Types
  class MutationType < BaseObject

    field :create_direct_upload, mutation: Mutations::CreateDirectUpload

  end
end