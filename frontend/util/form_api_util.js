// Posts

export const makePost = post => (
    $.ajax({ 
        url: 'api/posts', 
        method: 'POST', 
        data: {post} 
    })
)

export const deletePost = postId => (
    $.ajax({ 
        url: `api/posts/${postId}`, 
        method: 'DELETE'
    })
)

export const updatePost = post => (
    $.ajax({ 
        url: `api/posts/${post}`, 
        method: 'PATCH'
    })
)

// Beers
export const makeBeer = beer => (
    $.ajax({ 
        url: 'api/beers', 
        method: 'POST', 
        data: {beer} 
    })
)

export const deleteBeer = beerId => (
    $.ajax({ 
        url: `api/beers/${beerId}`, 
        method: 'DELETE'
    })
)

export const updatebeer = beer => (
    $.ajax({ 
        url: `api/beers/${beer}`, 
        method: 'PATCH'
    })
)

// Brewery
export const makeBrewery = brewery => (
    $.ajax({ 
        url: 'api/brewerys', 
        method: 'POST', 
        data: {brewery} 
    })
)

export const deletebrewery = breweryId => (
    $.ajax({ 
        url: `api/brewerys/${breweryId}`, 
        method: 'DELETE'
    })
)

export const updatebrewery = brewery => (
    $.ajax({ 
        url: `api/brewerys/${brewery}`, 
        method: 'PATCH'
    })
)

// Venue
export const makeVenue = venue => (
    $.ajax({ 
        url: 'api/venues', 
        method: 'POST', 
        data: {venue} 
    })
)

export const deleteVenue = VenueId => (
    $.ajax({ 
        url: `api/Venues/${VenueId}`, 
        method: 'DELETE'
    })
)

export const updateVenue = Venue => (
    $.ajax({ 
        url: `api/Venues/${Venue}`, 
        method: 'PATCH'
    })
)