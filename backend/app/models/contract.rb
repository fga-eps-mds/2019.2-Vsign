# frozen_string_literal: true

class Contract < ApplicationRecord
  after_create :send_email_new_contract
  
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
        buttonURL: app.login_by_token_path(token: self.token)
      },
      "d-977dd6915e8a430bbed0ab92c9a4421a" 
    )
  end

end
