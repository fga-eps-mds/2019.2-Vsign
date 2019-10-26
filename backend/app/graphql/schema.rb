# frozen_string_literal: true

class Schema < GraphQL::Schema
  mutation(Types::MutationType)
  query(Types::QueryType)
end
