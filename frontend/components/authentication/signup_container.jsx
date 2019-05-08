import React from 'react';
import { connect } from 'react-redux';
import { signUp, clearErrors } from '../../actions/session_actions';
import SignUp from './signup';

const mapSTP = (state, ownProps) => {
    return (
        { errors: state.errors.session }
    )
}

const mapDTP = dispatch => ({
    signUp: user => dispatch(signUp(user)),
    clearErrors: () => dispatch(clearErrors())
})

export default connect(mapSTP, mapDTP)(SignUp)