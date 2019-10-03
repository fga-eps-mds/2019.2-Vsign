require 'rails_helper'

RSpec.describe Contract, type: :model do
  describe "Associations" do
    it { should belong_to(:company) }
    it { should belong_to(:user) }
  end

  describe "Validations" do
    it { should validate_presence_of(:order) }
    it { should validate_presence_of(:script) }
    it { should validate_presence_of(:token) }
  end

  user = User.create!(
    email: 'teste@teste.com',
    password: '12345678',
    name: 'Fulano de Tal'
  )
  
  company = Company.create!(name: "Teste")

  subject {
    described_class.new(
      order: 'Order',
      script: 'Script',
      user_id: user.id,
      company_id: company.id,
      token: 'abc123'
    )
  }
  
  it "is not valid without User" do
    subject.user_id = nil
    expect(subject).to_not be_valid
  end

  it "is not valid without Company" do
    subject.company_id = nil
    expect(subject).to_not be_valid
  end

  it "is not valid without order" do
    subject.order = nil
    expect(subject).to_not be_valid
  end

  it "should not be valid without script" do
    subject.script = nil
    expect(subject).to_not be_valid
  end

  # it "should have an encrypted token" do
    # subject.user_id = user.id
    # subject.company_id = company.id
    # # contract = Contract.new(user_id: user.id, company_id: company.id)
    # expect(subject).to_have 
  # end

  it "is valid with valid attributes" do
    expect(subject).to be_valid
  end
end
