# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'

Test.destroy_all
Store.destroy_all
Job.destroy_all
Article.destroy_all

dollar = Store.create(name: 'Dollar Store', location: Faker::Address.full_address, rating: Faker::Number.between(from: 0, to: 5))
appliance = Store.create(name: 'Odds and Ends', location: Faker::Address.full_address, rating: Faker::Number.between(from: 0, to: 5))
lightning = Store.create(name: "Lightning's Cars", location: Faker::Address.full_address, rating: Faker::Number.between(from: 0, to: 5))
homedepot = Store.create(name: 'Home Depot', location: Faker::Address.full_address, rating: Faker::Number.between(from: 0, to: 5))
smiths = Store.create(name: 'Smiths', location: Faker::Address.full_address, rating: Faker::Number.between(from: 0, to: 5))
petstore = Store.create(name: 'Pet Store', location: Faker::Address.full_address, rating: Faker::Number.between(from: 0, to: 5))
bookstore = Store.create(name: "Fred's Books", location: Faker::Address.full_address, rating: Faker::Number.between(from: 0, to: 5))
teavana = Store.create(name: 'Tea Vana', location: Faker::Address.full_address, rating: Faker::Number.between(from: 0, to: 5))
gamestop = Store.create(name: 'Game Stop', location: Faker::Address.full_address, rating: Faker::Number.between(from: 0, to: 5))
blockbuster = Store.create(name: 'Blockbuster', location: Faker::Address.full_address, rating: Faker::Number.between(from: 0, to: 5))

10.times do
  dollar.items.create(name: Faker::Commerce.product_name , desc: Faker::Lorem.sentence , price: 1.00 )
end

10.times do
  appliance.items.create(name: Faker::Appliance.equipment, desc: Faker::Lorem.sentence, price: rand(500.00..4000.00))
end

10.times do
  lightning.items.create(name: Faker::Vehicle.make_and_model , desc: Faker::Lorem.sentence, price: rand(4000.00..100000.00))
end

10.times do
  homedepot.items.create(name: Faker::Construction.material, desc: Faker::Lorem.sentence, price: rand(10.00..200.00))
end

10.times do
  smiths.items.create(name: Faker::Food.ingredient, desc: Faker::Food.description, price: rand(3.00..100.00))
end

10.times do
  petstore.items.create(name: Faker::Creature::Dog.breed, desc: Faker::Creature::Dog.sound, price: rand(100.00..2000.00))
end

10.times do
  bookstore.items.create(name: Faker::Book.title, desc: Faker::Lorem.sentence, price: rand(10.00..100.00))
end

10.times do
  teavana.items.create(name: Faker::Tea.variety, desc: Faker::Lorem.sentence, price: rand(10.00..50.00))
end

10.times do
  gamestop.items.create(name: Faker::Game.title, desc: Faker::Hipster.sentence, price: rand(15.00..60.00))
end

10.times do
  blockbuster.items.create(name: Faker::Movie.title, desc: Faker::Movie.quote, price: rand(2.00..10.00))
end

10.times do
  Job.create(title: Faker::Job.title , company: Faker::Company.name, salary: Faker::Number.between(from: 15.00, to: 100.00))
end
10.times do
  Article.create(title: Faker::Educator.subject , author: Faker::Name.name, body: Faker::Hipster.paragraph )
end
 
puts "seeded Store#{Store.all.size}"
puts "seeded Item#{Item.all.size}"
puts "seeded Job#{Job.all.size}"
puts "seeded Article#{Article.all.size}"