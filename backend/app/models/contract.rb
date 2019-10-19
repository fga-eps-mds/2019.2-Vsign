# frozen_string_literal: true

class Contract < ApplicationRecord
  belongs_to :company
  belongs_to :user
end
