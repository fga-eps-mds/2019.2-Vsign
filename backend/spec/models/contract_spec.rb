require 'rails_helper'

RSpec.describe Contract, type: :model do
  context 'validation tests' do
    subject(:contract) {
      company = Company.create(name: "Company Test")

      script = Script.create(
        kind: "kind_script",
        content: '{ "Start":"start", "Num":1, "End":"end" }',
        title: "Test",
        webhook: "http://bx.com/api/reports",
        document: 0,
        company_id: company.id,
      ) 

      user = User.create(
        email: "teste@gteste.com",
        password: "123", 
        name: "Tester"
      )

      Contract.new(
        company_id: company.id,
        script: script,
        user_id: user,
        order: "Order_test"
      ) 
    }
    
    it "ensures company presence" do
      contract.company_id = nil
      contract.save

      expect(contract).to_not be_valid
    end

    it "ensures script presence" do
      contract.script = nil
      contract.save

      expect(contract).to_not be_valid
    end

    it 'ensures order presence' do
      contract.order = nil
      contract.save

      expect(contract).to_not be_valid
    end

    # it "ensures contract is valid" do
    #   contract.save

    #   expect(contract).to be_valid
    # end

  end
end
