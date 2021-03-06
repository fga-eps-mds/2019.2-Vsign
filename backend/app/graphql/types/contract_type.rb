module Types
  class ContractType < BaseObject
    field :id, ID, null: false
    field :script, String, null: false
    field :order, String, null: false
    field :user, Types::UserType, null: false
    field :company, Types::CompanyType, null: false
    field :token, String, null: false
    field :created_at, String, null: false
  end
end