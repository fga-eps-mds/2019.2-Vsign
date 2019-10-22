module Mutations
  class CreateUser < BaseMutation
    argument :email, String, required: true
    argument :password, String, required: true
    argument :name, String, required: false

    type Types::UserType

    def resolve(email: nil, password: nil, name: nil)
      User.create!(
        email: email,
        password: password,
        name: name
      )
    end
  end
end