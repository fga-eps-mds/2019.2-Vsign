require 'rails_helper'

RSpec.describe Script, type: :model do
  context 'validation tests' do 

    it 'ensures title presence' do
      script = Script.new(kind: 'kind_script', content: '{ "Start":"start", "Num":1, "End":"end" }').save
      expect(script).to eq(false)
    end

    it 'ensures kind presence' do
      script = Script.new(title: 'title_script', content: '{ "Start":"start", "Num":1, "End":"end" }').save
      expect(script).to eq(false)
    end

    it 'ensures content presence' do
      script = Script.new(title: 'title_script', kind: 'kind_script').save
      expect(script).to eq(false)
    end
    
  end
end
