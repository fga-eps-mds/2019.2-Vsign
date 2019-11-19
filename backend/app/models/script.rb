# frozen_string_literal: true

class Script < ApplicationRecord
  enum document: { cnh: 0, rg: 1, any: 2 }
  belongs_to :company

  validates_presence_of :document
  validates_presence_of :kind, :content, :title

  def format_content(data)
    data = JSON.parse(data)
    data.each do |key, val|
      content.collect do |block|
        block.gsub! "%#{key}%", val
      end
    end
    content
  end

  def isExpired
    return Date.today < self.expiration_day
  end
end
