# frozen_string_literal: true

class Contract < ApplicationRecord
  belongs_to :company
  belongs_to :user

  has_one_attached :contract_video
  has_one_attached :contract_audio
  has_many_attached :contract_image
end
