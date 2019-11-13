class AddTokenToContract < ActiveRecord::Migration[5.2]
  def change
    add_column :contracts, :token, :string
  end
end
