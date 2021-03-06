import * as FormApiUtil from '../util/form_api_util';

export const RECEIVE_ALL_POSTS = "RECEIVE_ALL_POSTS";
export const RECEIVE_POST = 'RECEIVE_POST';
export const DELETE_POST = 'DELETE_POST';
// export const UPDATE_POST = 'UPDATE_POST';
export const RECEIVE_ALL_BEERS = "RECEIVE_ALL_BEERS";
export const RECEIVE_BEER = 'RECEIVE_BEER';
export const DELETE_BEER = 'DELETE_BEER';
// export const UPDATE_BEER = 'UPDATE_BEER';
export const RECEIVE_ALL_BREWERYS = "RECEIVE_ALL_BREWERYS";
export const RECEIVE_BREWERY = 'RECEIVE_BREWERY';
export const DELETE_BREWERY = 'DELETE_BREWERY';
// export const UPDATE_BREWERY = 'UPDATE_BREWERY';
export const RECEIVE_ALL_VENUES = "RECEIVE_ALL_VENUES";
export const RECEIVE_VENUE = 'RECEIVE_VENUE';
export const DELETE_VENUE = 'DELETE_VENUE';
// export const UPDATE_VENUE = 'UPDATE_VENUE';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';


const receiveAllPosts = posts => ({
    type: RECEIVE_ALL_POSTS,
    posts
})
const receivePost = post => ({
    type: RECEIVE_POST,
    post
})
const removePost = postId => ({
    type: DELETE_POST,
    postId
})
// const updatePost = post => ({
//     type: UPDATE_POST,
//     post
// })
const receiveAllBeers = beers => ({
    type: RECEIVE_ALL_BEERS,
    beers
})
const receiveBeer = beer => ({
    type: RECEIVE_BEER,
    beer
})
const removeBeer = beerId => ({
    type: DELETE_BEER,
    beerId
})
// const updateBeer = beer => ({
//     type: UPDATE_BEER,
//     beer
// })
const receiveAllBrewerys = brewerys => ({
    type: RECEIVE_ALL_BREWERYS,
    brewerys
})
const receiveBrewery = brewery => ({
    type: RECEIVE_BREWERY,
    brewery
})
const removeBrewery = breweryId => ({
    type: DELETE_BREWERY,
    breweryId
})
// const updateBrewery = brewery => ({
//     type: UPDATE_BREWERY,
//     brewery
// })
const receiveAllVenues = venues => ({
    type: RECEIVE_ALL_VENUES,
    venues
})
const receiveVenue = venue => ({
    type: RECEIVE_VENUE,
    venue
})
const removeVenue = venueId => ({
    type: DELETE_VENUE,
    venueId
})
// const updateVenue = venue => ({
//     type: UPDATE_VENUE,
//     venue
// })

export const receiveErrors = errors => ({
    type: RECEIVE_ERRORS,
    errors
})

export const fetchPosts = () => dispatch => (
    FormApiUtil.fetchPosts()
        .then(posts => dispatch(receiveAllPosts(posts)), 
        error => dispatch(receiveErrors(error.responseJSON)))
)
export const makePost = post => dispatch => (
    FormApiUtil.makePost(post)
        .then(post => dispatch(receivePost(post)), 
        error => dispatch(receiveErrors(error.responseJSON)))
)
export const deletePost = postId => dispatch => (
    FormApiUtil.deletePost(postId)
        .then((postId) => dispatch(removePost(postId)), 
        error => dispatch(receiveErrors(error.responseJSON)))
)
// export const updatePost = post => dispatch => (
//     FormApiUtil.updatePost(post)
//         .then(post => dispatch(receivePost(post)), 
//         error => dispatch(receiveErrors(error.responseJSON)))
// )
export const fetchBeers = () => dispatch => (
    FormApiUtil.fetchBeers()
        .then(beers => dispatch(receiveAllBeers(beers)), 
        error => dispatch(receiveErrors(error.responseJSON)))
)
export const makeBeer = beer => dispatch => (
    FormApiUtil.makeBeer(beer)
        .then(beer => dispatch(receiveBeer(beer)), 
        error => dispatch(receiveErrors(error.responseJSON)))
)


export const fetchBrewerys = () => dispatch => (
    FormApiUtil.fetchBrewerys()
        .then(brewerys => dispatch(receiveAllBrewerys(brewerys)), 
        error => dispatch(receiveErrors(error.responseJSON)))
)
export const makeBrewery = brewery => dispatch => (
    FormApiUtil.makeBrewery(brewery)
        .then(brewery => dispatch(receiveBrewery(brewery)), 
        error => dispatch(receiveErrors(error.responseJSON)))
)


export const fetchVenues = () => dispatch => (
    FormApiUtil.fetchVenues()
        .then(venues => dispatch(receiveAllVenues(venues)), 
        error => dispatch(receiveErrors(error.responseJSON)))
)
export const makeVenue = venue => dispatch => {
    return (
        FormApiUtil.makeVenue(venue)
            .then(venue => dispatch(receiveVenue(venue)), 
            error => dispatch(receiveErrors(error.responseJSON)))
    )
}
