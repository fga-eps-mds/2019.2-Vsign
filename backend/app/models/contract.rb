# frozen_string_literal: true

class Contract < ApplicationRecord
  after_save :send_email_new_contract
  
  belongs_to :company
  belongs_to :user

  has_one_attached :video
  has_one_attached :audio
  has_many_attached :image

  def send_email_new_contract
    SendgridMailer(self.user.email, { buttonURL: url_for()})
  end
end
