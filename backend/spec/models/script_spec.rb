# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Script, type: :model do
  context 'validation tests' do
    subject(:script) {
      c = Company.create(name: "Teste")

      Script.new(
        kind: "kind_script",
        content: '{ "Start":"start", "Num":1, "End":"end" }',
        title: "Test",
        document: 0,
        company_id: c.id
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

    it "ensures document is valid" do
      script.document = "another"
      script.save

      expect(script).to_not be_valid
    end

    it "ensures script is valid" do
      script.save

      expect(script).to be_valid
    end
  end
end
