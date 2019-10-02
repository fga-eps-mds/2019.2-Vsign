class AddTokenToContracts < ActiveRecord::Migration[5.2]
  def up
    add_column :contracts, :token, :string
    add_index :contracts, :token, unique: true
  end

  def down
    remove_index :contracts, :token
    remove_column :contracts, :token
  end
end
