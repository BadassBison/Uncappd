import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
})
const logoutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER 
    }
}
export const receiveErrors = errors => ({
    type: RECEIVE_ERRORS,
    errors
})
export const clearErrors = () => ({
    type: CLEAR_ERRORS
})

export const signUp = user => dispatch => (
    SessionApiUtil.signUp(user)
        .then(user => dispatch(receiveCurrentUser(user)), 
        error => dispatch(receiveErrors(error.responseJSON)))
)
export const signIn = user => dispatch => (
    SessionApiUtil.signIn(user)
        .then(user => dispatch(receiveCurrentUser(user)), 
        error => dispatch(receiveErrors(error.responseJSON)))
)
export const signOut = () => dispatch => (
    SessionApiUtil.signOut()
        .then(() => dispatch(logoutCurrentUser()), 
        error => dispatch(receiveErrors(error.responseJSON)))
)