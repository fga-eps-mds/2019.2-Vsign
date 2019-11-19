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

  def has_valid_document
    return self.documents.where(valid: true)
  end

  def has_valid_document_where document_type
    return self.documents.where(document_type: document_type)
  end
end
