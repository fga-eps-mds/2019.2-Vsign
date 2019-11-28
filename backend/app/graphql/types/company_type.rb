module Types
  class CompanyType < BaseObject
    field :id, ID, null: false
    field :name, String, null: true
    field :api_key, String, null: false
  end
end