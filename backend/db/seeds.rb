require 'faker'

10.times do 
  user = User.create!(
    email: Faker::Internet.email, 
    password: "123456", 
    name: Faker::Name.name
  )

  company = Company.create!(
    name: Faker::Company.name,
    api_key: Faker::Alphanumeric.alphanumeric(number: 20, min_alpha: 5, min_numeric: 5)
  )

  contract = Contract.create(
    script: [
      Faker::Cannabis.cannabinoid, 
      Faker::Cannabis.cannabinoid,
      Faker::Cannabis.cannabinoid
    ], 
    order: Faker::Cannabis.buzzword, 
    user_id: User.all.sample.id, 
    company_id: Company.all.sample.id
  )

  puts "Seeding 10 of each..."
  puts "User: #{user.email} - Company: #{company.name} - Contract: #{contract.script}"
end
