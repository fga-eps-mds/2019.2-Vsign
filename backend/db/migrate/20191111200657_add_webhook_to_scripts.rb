class AddWebhookToScripts < ActiveRecord::Migration[5.2]
  def change
    add_column :scripts, :webhook, :string
  end
end
