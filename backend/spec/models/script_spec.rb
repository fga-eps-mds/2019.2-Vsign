# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Script, type: :model do
  context 'validation tests' do
    subject(:script) {
      company = Company.create(name: "Teste", api_key: "key_api")

      Script.new(
        kind: "kind_script",
        content: '{ "Start":"start", "Num":1, "End":"end" }',
        title: "Test",
        webhook: "http://bx.com/api/reports",
        document: 0,
        company_id: company.id,
      ) 
    }
    
    it 'ensures title presence' do
      script.title = nil
      script.save

      expect(script).to_not be_valid
    end

    it 'ensures kind presence' do
      script.kind = nil
      script.save

      expect(script).to_not be_valid
    end

    it 'ensures content presence' do
      script.content = nil
      script.save

      expect(script).to_not be_valid
    end

    it "ensures document presence" do
      script.document = nil
      script.save

      expect(script).to_not be_valid
    end

    it "ensures company presence" do
      script.company_id = nil
      script.save

      expect(script).to_not be_valid
    end

    it "ensures webhook presence" do
      script.webhook = nil
      script.save

      expect(script).to_not be_valid
    end

    it "ensures script is valid" do
      script.save

      expect(script).to be_valid
    end

  end
end
