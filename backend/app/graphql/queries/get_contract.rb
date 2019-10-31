module Queries
  class GetContract < BaseQuery
    description "Finds contract by token or id"
    
    argument :id, ID, required: true
    argument :token, String, required: false

    type Types::ContractType, null: true

    def resolve(id:, token:)
      contract = !token.blank? ? Contract.where(token: token).first : Contract.find(id)
      
      return contract
    end
  end
end