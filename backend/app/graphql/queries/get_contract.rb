module Queries
  class GetContract < BaseQuery
    description "Finds contract by token or id"
    
    argument :id, ID, required: true

    type Types::ContractType, null: true

    def resolve(id: nil)
      current_user = context[:current_user]
      current_user.contracts.find(id)
    end
  end
end