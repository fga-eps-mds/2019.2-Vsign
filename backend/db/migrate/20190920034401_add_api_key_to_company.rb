class AddApiKeyToCompany < ActiveRecord::Migration[5.2]
  def change
    add_column :companies, :api_key, :string
  end
end
