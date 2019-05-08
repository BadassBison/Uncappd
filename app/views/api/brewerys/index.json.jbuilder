json.array! @brewerys do |brewery|
    json.partial! '/api/brewerys/brewery', brewery: brewery
end