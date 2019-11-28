# frozen_string_literal: true

class User < ApplicationRecord
  extend Devise::Models
  include Tokenizable

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
         :jwt_authenticatable, :devise,
         jwt_revocation_strategy: JWTBlacklist

  has_one_attached :user_document
  has_many :contracts

  validates_presence_of :name, :email, :password

end
