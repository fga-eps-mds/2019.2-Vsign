# frozen_string_literal: true

module Types
  class QueryType < BaseObject
    field :get_contract, resolver: Queries::GetContract, null: true
    field :current_user, resolver: Queries::CurrentUser, null: true
  end
end
