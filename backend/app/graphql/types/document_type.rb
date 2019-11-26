module Types
    class DocumentType < BaseObject
        field :id, ID, null: false
        field :description, String, null: true
        field :expiration, String, null: true
        field :is_valid, Boolean, null: true
    end
end