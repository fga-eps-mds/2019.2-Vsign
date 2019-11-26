module Types
  class UserType < BaseObject
    field :id, ID, null: false
    field :name, String, null: true
    field :token, String, null: false
    field :documents, [Types::DocumentType], null: true
    field :has_document, Boolean, null: false

    def has_document
      has_document = context[:current_user].documents.length > 0;
    end
  end
end