require 'rails_helper'

RSpec.describe User, type: :model do
  context 'validation tests' do
    subject(:user) {
      User.new(
        name: "James",
        email: "james@test.com",
        password: "1234567"
      )
    }
    
    it "ensures name presence" do
      user.name = nil
      user.save

      expect(user).to_not be_valid
    end

    it 'ensures email presence' do
      user.email = nil
      user.save

      expect(user).to_not be_valid
    end

    it "ensures user is valid" do
      user.save

      expect(user).to be_valid
    end

    it 'email invalid - is not unique' do
      user2 = User.new(
        name: "James",
        email: "james@test.com",
        password: "1234567"
      )
      user2.save
      expect(subject).to be_invalid
    end

    it 'email valid - is unique' do
      user2 = User.new(
        name: "James",
        email: "james9@test.com",
        password: "1234567"
      )
      user2.save
      expect(subject).to be_valid
    end

  end
end
