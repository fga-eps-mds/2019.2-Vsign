class User < ApplicationRecord
  extend Devise::Models
  include Tokenizable

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
         :jwt_authenticatable, :devise,
         jwt_revocation_strategy: JWTBlacklist

  has_one_attached :user_document
end
  