import React from 'react';
import { connect } from 'react-redux';
import { signIn, clearErrors } from '../../actions/session_actions';
import LogIn from './login';

const mapSTP = (state, ownProps) => {
    return (
        { errors: state.errors.session }
    )
}

const mapDTP = dispatch => ({
    signIn: user => dispatch(signIn(user)),
    clearErrors: () => dispatch(clearErrors())
})

export default connect(mapSTP, mapDTP)(LogIn)