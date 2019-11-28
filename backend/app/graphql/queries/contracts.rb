module Queries
    class Contracts < BaseQuery
      description "Gets all contracts of the current user."

      type [Types::ContractType], null: true
  
      def resolve
        current_user = context[:current_user]
        current_user.contracts
      end
    end
  end