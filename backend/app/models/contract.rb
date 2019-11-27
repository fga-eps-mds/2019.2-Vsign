# frozen_string_literal: true

class Contract < ApplicationRecord
  after_create :send_email_new_contract
  
  belongs_to :company
  belongs_to :user

  has_one_attached :video
  has_one_attached :audio
  has_many_attached :image

  def base_url
    devel = Rails.env.development?

    if devel
      # return "http://localhost:3001/"
      return "https://develop.dar0d46dq2rcb.amplifyapp.com/"
    else
      return "https://master.dar0d46dq2rcb.amplifyapp.com/"
    end
  end
  
  def send_email_new_contract
    SendgridMailer.send(
      self.user.email,
      { 
        buttonURL: base_url + self.token.to_s
      },
      "d-977dd6915e8a430bbed0ab92c9a4421a" 
    )
  end
end
