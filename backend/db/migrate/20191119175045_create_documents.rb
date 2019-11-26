class CreateDocuments < ActiveRecord::Migration[5.2]
  def change
    create_table :documents do |t|
      t.integer :description
      t.date :expiration
      t.boolean :is_valid, default: false
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
