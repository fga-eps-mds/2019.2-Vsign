class AddExpiryDateToContracts < ActiveRecord::Migration[5.2]
  def change
    add_column :contracts, :expiration_date, :date, null: false, default: Date.today + 1.week
  end
end
