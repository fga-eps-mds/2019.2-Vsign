class AddDocumentToScript < ActiveRecord::Migration[5.2]
  def change
    add_column :scripts, :document, :integer
  end
end
