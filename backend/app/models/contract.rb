# frozen_string_literal: true

class Contract < ApplicationRecord
  enum document: {cnh: 0, rg: 1, any: 2}
  
  belongs_to :company
  belongs_to :user

  has_one_attached :video
  has_one_attached :audio
  has_many_attached :image
end
