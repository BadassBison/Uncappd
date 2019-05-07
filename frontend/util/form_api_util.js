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

// Beers
export const makeBeer = beer => (
    $.ajax({ 
        url: 'api/beers', 
        method: 'POST', 
        data: {beer} 
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

// Venue
export const makeVenue = venue => (
    $.ajax({ 
        url: 'api/venues', 
        method: 'POST', 
        data: {venue} 
    })
)