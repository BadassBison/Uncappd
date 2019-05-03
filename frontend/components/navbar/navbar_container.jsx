import React from 'react';
import { connect } from 'react-redux';
import NavBar from './navbar';
import { signOut } from '../../actions/session_actions';



const mapSTP = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id]
})

const mapDTP = dispatch => ({
    signOut: () => dispatch(signOut())
})

export default connect(mapSTP, mapDTP)(NavBar);