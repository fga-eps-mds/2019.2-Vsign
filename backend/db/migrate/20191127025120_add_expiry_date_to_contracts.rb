class AddExpiryDateToContracts < ActiveRecord::Migration[5.2]
  def change
    add_column :contracts, :expiration_date, :date
  end
end
