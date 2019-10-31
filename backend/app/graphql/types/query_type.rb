# frozen_string_literal: true

module Types
  class QueryType < BaseObject
    field :all_users, [UserType], null: false

    def all_users
      User.all
    end

    field :get_contract, resolver: Queries::GetContract, null: true
    field :current_user, resolver: Queries::CurrentUser, null: true
  end
end
