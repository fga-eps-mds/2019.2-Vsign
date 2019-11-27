# frozen_string_literal: true

class Contract < ApplicationRecord
  belongs_to :company
  belongs_to :user

  has_one_attached :video
  has_one_attached :audio
  has_many_attached :image

  validates_presence_of :company_id, :user_id, :script, :order
end
