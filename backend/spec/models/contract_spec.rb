require 'rails_helper'

RSpec.describe Contract, type: :model do
  it "is valid with valid attributes" do
    expect(Contract.new).to be_valid
  end
end
