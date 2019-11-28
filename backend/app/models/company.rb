# frozen_string_literal: true

class Company < ApplicationRecord
  has_many :script

  validates_presence_of :name, :api_key
end
