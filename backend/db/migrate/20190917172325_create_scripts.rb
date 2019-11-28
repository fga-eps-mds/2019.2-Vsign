# frozen_string_literal: true

class CreateScripts < ActiveRecord::Migration[5.2]
  def change
    create_table :scripts do |t|
      t.string :title
      t.string :kind
      t.json :content
      t.references :company, foreign_key: true

      t.timestamps
    end
  end
end
