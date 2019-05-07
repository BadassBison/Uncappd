import * as FormApiUtil from '../util/form_api_util';

export const RECEIVE_POST = 'RECEIVE_POST';
export const DELETE_POST = 'DELETE_POST';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

const receivePost = post => ({
    type: RECEIVE_POST,
    post
})

const removePost = postId => ({
    type: DELETE_POST,
    postId
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