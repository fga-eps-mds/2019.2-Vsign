# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Script, type: :model do
  context 'validation tests' do
    subject(:script) { 
      Script.new(
        kind: "kind_script",
        content: '{ "Start":"start", "Num":1, "End":"end" }',
        title: "Test",
        document: 0
      ) 
    }
    
    it 'ensures title presence' do
      script.title = nil
      script.save

      it { should_not be_valid }
      # expect(script).to eq(false)
    end

    it 'ensures kind presence' do
      script.kind = nil
      script.save

      it { should_not be_valid }
      # expect(script).to eq(false)
    end

    it 'ensures content presence' do
      script.content = nil
      script.save

      it { should_not be_valid }
      # expect(script).to eq(false)
    end

    it "ensures document presence" do
      script.document = nil
      script.save

      it { should_not be_valid }
    end

    it "ensures script is valid" do
      script.save

      it { should be_valid }
    end
  end
end
