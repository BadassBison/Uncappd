import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
})
const logoutCurrentUser = currentUser => ({
    type: LOGOUT_CURRENT_USER,
    user: currentUser.id
})
export const receiveErrors = currentUser => ({
    type: RECEIVE_ERRORS,
    errors: user.errors
})

export const signUp = user => dispatch => (
    SessionApiUtil.signUp(user).then(user => dispatch(receiveCurrentUser(user)))
)
export const signIn = user => dispatch => (
    SessionApiUtil.signIn(user).then(user => dispatch(receiveCurrentUser(user)))
)
export const signOut = () => dispatch => (
    SessionApiUtil.signOut().then(() => dispatch(logoutCurrentUser()))
)