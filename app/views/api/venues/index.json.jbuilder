json.array! @venues do |venue|
    json.partial! '/api/venues/venue', venue: venue
end