module Types
  class CompanyType < BaseObject
    field :id, ID, null: false
    field :name, String, null: true
  end
end