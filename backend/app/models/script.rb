# frozen_string_literal: true

class Script < ApplicationRecord
  belongs_to :company

  def format_content(data)
    data = JSON.parse(data)
    data.each do |key, val|
      content.collect do |block|
        block.gsub! "%#{key}%", val
      end
    end
    content
  end
end
