class AddDocumentToContract < ActiveRecord::Migration[5.2]
  def change
    add_column :contracts, :document, :integer
  end
end
