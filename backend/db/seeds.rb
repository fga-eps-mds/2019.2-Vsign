# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'

document_types = ["cnh", "rg", "any"]

10.times do |t|
  user = User.create(
    email: Faker::Internet.email, 
    password: Faker::Internet.password, 
    name: Faker::Name.name
  )

  company = Company.create(
    name: Faker::Company.name
  )

  script = Script.create(
    title: "Contrato - #{t}",
    kind: "Empréstimo",
    content: Faker::Lorem.paragraph,
    company_id: company.id,
    document: document_types.sample,
    expiration_day: Date.today.to_s(:db)
  )

  contract = Contract.create(
    script: Faker::Cannabis.cannabinoid, 
    order: Faker::Cannabis.buzzword, 
    user_id: User.all.sample.id, 
    company_id: Company.all.sample.id
  )

  puts "Seeding 10 of each..."
  puts "User: #{user.name} - Company: #{company.name} - Contract: #{contract.script}"
end
