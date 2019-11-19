class Document < ApplicationRecord
    enum document_type: { cnh: 0, rg: 1, any: 2 }
    
    belongs_to :user
    has_one_attached :document
end
