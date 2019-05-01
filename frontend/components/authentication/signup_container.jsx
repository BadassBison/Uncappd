import React from 'react';
import { connect } from 'react-redux';
import { signUp } from '../../actions/session_actions';
import SignUp from './signup';

const mapSTP = (state, ownProps) => {
    return (
        {errors: state.errors.session}
    )
}

const mapDTP = dispatch => ({
    signUp: user => dispatch(signUp(user))
})

export default connect(mapSTP, mapDTP)(SignUp)