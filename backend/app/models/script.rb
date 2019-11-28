# frozen_string_literal: true

class Script < ApplicationRecord
  enum document: { cnh: 0, rg: 1, any: 2 }
  belongs_to :company

  validates_presence_of :document
  validates_presence_of :kind, :content, :title

  def format_content(data)
    data.each do |key, val|
      content.collect do |block|
        block.gsub! "%#{key}%", val.to_s
      end
    end
    content
  end
end
