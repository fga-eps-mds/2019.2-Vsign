class CreateDocuments < ActiveRecord::Migration[5.2]
  def change
    create_table :documents do |t|
      t.integer :type
      t.date :expiration
      t.boolean :valid, default: false

      t.timestamps
    end
  end
end
