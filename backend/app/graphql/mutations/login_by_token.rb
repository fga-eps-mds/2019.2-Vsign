module Mutations
  class LoginByToken < BaseMutation
    argument :token, String, required: true

    type Types::UserType

    def resolve(token: nil)
      contract = Contract.find_by(token: token)
      puts contract.user
      User.find_for_authentication(email: contract.user.email)
    end

  end
end