import React from 'react';
import { connect } from 'react-redux';
import { signOut } from '../actions/session_actions';
import Splash from './splash';

const mapSTP = (state, ownProps) => ({
    currentUser: state.users[session.id]
})

const mapDTP = dispatch => ({
    logOut: () => dispatch(signOut())
})

export default connect(mapSTP, mapDTP)(Splash)