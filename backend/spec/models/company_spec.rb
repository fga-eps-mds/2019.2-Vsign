require 'rails_helper'

RSpec.describe Company, type: :model do
  
  context "attributes" do
  
    it "has a name" do 
      company = Company.create!(name: "My Awesome Company Name") # creating a new company 'instance'
      expect(company.name).to eq("My Awesome Company Name") # this is our expectation
    end
    
  end
end
