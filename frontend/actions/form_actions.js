import * as FormApiUtil from '../util/form_api_util';

export const RECEIVE_POST = 'RECEIVE_POST';
export const DELETE_POST = 'DELETE_POST';
export const RECEIVE_BEER = 'RECEIVE_BEER';
export const DELETE_BEER = 'DELETE_BEER';
export const RECEIVE_BREWERY = 'RECEIVE_BREWERY';
export const DELETE_BREWERY = 'DELETE_BREWERY';
export const RECEIVE_VENUE = 'RECEIVE_VENUE';
export const DELETE_VENUE = 'DELETE_VENUE';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

const receivePost = post => ({
    type: RECEIVE_POST,
    post
})

const removePost = postId => ({
    type: DELETE_POST,
    postId
})

const receiveBeer = beer => ({
    type: RECEIVE_BEER,
    beer
})

const receiveBrewery = brewery => ({
    type: RECEIVE_BREWERY,
    brewery
})

const receiveVenue = venue => ({
    type: RECEIVE_VENUE,
    venue
})

export const receiveErrors = errors => ({
    type: RECEIVE_ERRORS,
    errors
})

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
export const makeBeer = beer => dispatch => (
    FormApiUtil.makeBeer(beer)
        .then(beer => dispatch(receiveBeer(beer)), 
        error => dispatch(receiveErrors(error.responseJSON)))
)
export const makeBrewery = brewery => dispatch => (
    FormApiUtil.makeBrewery(brewery)
        .then(brewery => dispatch(receiveBrewery(brewery)), 
        error => dispatch(receiveErrors(error.responseJSON)))
)
export const makeVenue = venue => dispatch => {
    return (
        FormApiUtil.makeVenue(venue)
            .then(venue => dispatch(receiveVenue(venue)), 
            error => dispatch(receiveErrors(error.responseJSON)))
    )
}
