# frozen_string_literal: true

class User < ApplicationRecord
  extend Devise::Models
  include Tokenizable

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
         :jwt_authenticatable, :devise,
         jwt_revocation_strategy: JWTBlacklist

  has_many :contracts
  has_many :documents
  has_one_attached :user_document

  def has_valid_document document_type
    return self.documents.where("valid = TRUE AND document_type = ?", document_type)
  end
end
