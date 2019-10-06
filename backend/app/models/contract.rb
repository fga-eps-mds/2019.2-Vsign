class Contract < ApplicationRecord
    include BCrypt
    
    before_create :set_token
    
    belongs_to :company
    belongs_to :user

    validates_presence_of :order, :script

    # Should be uncommented if crew decides to use rails native
    # frontend for creating Contracts
    # def to_param
    #     token
    # end
    
    def set_token
        loop do
            token = Password.create(SecureRandom.urlsafe_base64(12))
            
            # Removing special characteres that will
            # break url
            ["$", "/", "."].each do |str|
                token = token.delete str
            end

            self.token = token
            break unless Contract.where(token: token).exists?
        end
    end
end
