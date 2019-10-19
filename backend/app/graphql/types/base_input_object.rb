module Types
  class BaseInputObject < GraphQL::Schema::InputObject
    argument_class BaseArgument
  end
end
