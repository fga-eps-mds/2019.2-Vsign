class CreateContracts < ActiveRecord::Migration[5.2]
  def change
    create_table :contracts do |t|
      t.references :company, foreign_key: true
      t.string :script
      t.references :user, foreign_key: true
      t.string :order

      t.timestamps
    end
  end
end
