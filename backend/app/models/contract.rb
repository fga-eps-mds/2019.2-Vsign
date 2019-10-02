require 'bcrypt'

class Contract < ApplicationRecord
    before_create :set_token
    
    belongs_to :company
    belongs_to :user
    

    def set_token
        self.token = BCrypt::Password.new(SecureRandom.urlsafe_base64(12))
        break unless Contract.where(token: token).exists?
    end
end
