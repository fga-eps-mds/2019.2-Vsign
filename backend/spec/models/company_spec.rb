require 'rails_helper'

RSpec.describe Company, type: :model do
  context 'validation tests' do
    subject(:company) {
      Company.new(
        name: "Company Test",
        api_key: "key_api")
    }
    

    it "ensures name presence" do
      company.name = nil
      company.save

      expect(company).to_not be_valid
    end

    it 'ensures api_key presence' do
      company.api_key = nil
      company.save

      expect(company).to_not be_valid
    end

    it "ensures company is valid" do
      company.save

      expect(company).to be_valid
    end

  end
end
