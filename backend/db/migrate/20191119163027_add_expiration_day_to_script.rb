class AddExpirationDayToScript < ActiveRecord::Migration[5.2]
  def change
    add_column :scripts, :expiration_day, :date
  end
end
