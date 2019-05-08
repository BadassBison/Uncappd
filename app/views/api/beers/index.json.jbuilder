json.array! @beers do |beer|
    json.partial! '/api/beers/beer', beer: beer
end