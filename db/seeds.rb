# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


ActiveRecord::Base.transaction do
    User.destroy_all
    Post.destroy_all
    Beer.destroy_all
    Brewery.destroy_all
    Venue.destroy_all

    User.create!(
        username: "Carlos",
        email: "carlos@gmax.net",
        password: 123456,
        f_name: "Carlos",
        l_name: "Garcia"
    )

    (1..10).each {
        User.create(   
            username: Faker::JapaneseMedia::DragonBall.character,
            email: Faker::Internet.email,
            password: 123456,
            f_name: Faker::Name.first_name,
            l_name: Faker::Name.last_name
        )
    }

    (1..10).each {
        User.create(   
            username: Faker::Artist.name,
            email: Faker::Internet.email,
            password: 123456,
            f_name: Faker::Name.first_name,
            l_name: Faker::Name.last_name
        )
    }

    Venue.create!(
        name: "Bourbon & Branch",
        location: "501 Jones St, San Francisco",
        category: "Cocktail Bar" 
    )
    Venue.create!(
        name: "Tunnel Top Lounge and Bar",
        location: "601 Bush St, San Francisco",
        category: "Bar" 
    )
    Venue.create!(
        name: "Chelsea Place",
        location: "641 Bush St, San Francisco",
        category: "Bar"
    )
    Venue.create!(
        name: "Bar Fluxus",
        location: "18 Harlan Pl, San Francisco",
        category: "Bar" 
    )
    Venue.create!(
        name: "E&O Kitchen and Bar",
        location: "314 Sutter St, San Francisco",
        category: "Asian Bar" 
    )
    Venue.create!(
        name: "Pacific Cocktail Haven",
        location: "580 Sutter St, San Francisco",
        category: "Cocktail bar" 
    )
    Venue.create!(
        name: "Tonga Room & Hurricane Bar",
        location: "950 Mason St, San Francisco",
        category: "Bar" 
    )
    Brewery.create!(
        name: "Bourbon & Branch",
        location: "501 Jones St, San Francisco",
        category: "Cocktail Bar" 
    )
    Brewery.create!(
        name: "Tunnel Top Lounge and Bar",
        location: "601 Bush St, San Francisco",
        category: "Bar" 
    )
    Brewery.create!(
        name: "Chelsea Place",
        location: "641 Bush St, San Francisco",
        category: "Bar" 
    )
    Brewery.create!(
        name: "Bar Fluxus",
        location: "18 Harlan Pl, San Francisco",
        category: "Bar" 
    )
    Brewery.create!(
        name: "E&O Kitchen and Bar",
        location: "314 Sutter St, San Francisco",
        category: "Asian Bar" 
    )
    Brewery.create!(
        name: "Pacific Cocktail Haven",
        location: "580 Sutter St, San Francisco",
        category: "Cocktail bar" 
    )
    Brewery.create!(
        name: "Tonga Room & Hurricane Bar",
        location: "950 Mason St, San Francisco",
        category: "Bar" 
    )

    (1..100).each {
        Beer.create!(
            name: Faker::Beer.name,
            beer_type: Faker::Beer.style,
            brewery_id: Brewery.limit(7).sample.id
        )
    }

    (1..20).each {
        Post.create!(
            content: Faker::Movies::Hobbit.quote,
            rating: 3,
            user_id: 1,
            beer_id: Beer.limit(80).sample.id,
            venue_id: Venue.limit(7).sample.id
        )
    }

end