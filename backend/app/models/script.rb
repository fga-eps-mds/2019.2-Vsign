class Script < ApplicationRecord
    belongs_to :company

    def format_content(data) 
        data = JSON.parse(data)
        data.each do |key, val|
            self.content.collect {
                |block| block.gsub! "%#{key}%", val
            }
        end
        self.content
    end

end
