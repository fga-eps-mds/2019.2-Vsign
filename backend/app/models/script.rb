# frozen_string_literal: true

class Script < ApplicationRecord
  belongs_to :company

  def format_content(data)
    data.each do |key, val|
      content.collect do |block|
        block.gsub! "%#{key}%", val.to_s
      end
    end
    content
  end
end
