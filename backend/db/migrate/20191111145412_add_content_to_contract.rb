class AddContentToContract < ActiveRecord::Migration[5.2]
  def change
    add_column :contracts, :content_user, :json
  end
end
