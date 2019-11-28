# frozen_string_literal: true
include Rails.application.routes.url_helpers

class Contract < ApplicationRecord

  after_create :send_email_new_contract

  enum document: { pending: 0, approved: 1, rejected: 2 }

  belongs_to :company
  belongs_to :user

  has_one_attached :video
  has_one_attached :audio
  has_many_attached :image

  validates_presence_of :company_id, :user_id, :script, :order

  def send_email_new_contract
    SendgridMailer.send(
      self.user.email,
      {
        name: self.user.name, 
        buttonURL: login_by_token_path(token: self.token)
      },
      "d-977dd6915e8a430bbed0ab92c9a4421a" 
    )
  end

end
