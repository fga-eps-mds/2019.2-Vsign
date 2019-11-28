module Queries
  class CurrentUser < BaseQuery
    type Types::UserType, null: true

    def resolve
      return context[:current_user]
    end
  end
end