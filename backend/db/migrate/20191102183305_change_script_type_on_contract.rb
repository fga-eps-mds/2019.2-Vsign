class ChangeScriptTypeOnContract < ActiveRecord::Migration[5.2]
  def up
    change_column :contracts, :script, :json, using: 'script::json'
  end

  def down
    change_column :contracts, :script, :string
  end

end
