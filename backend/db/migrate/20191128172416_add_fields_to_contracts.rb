class AddFieldsToContracts < ActiveRecord::Migration[5.2]
  def change
    add_column :contracts, :status, :integer
    add_column :contracts, :message, :string
  end
end
