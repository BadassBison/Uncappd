import React from 'react';
import { connect } from 'react-redux';
import NavBar from './navbar';
import { signOut } from '../../actions/session_actions';



const mapSTP = (state, ownProps) => {
    
}

const mapDTP = dispatch => ({
    signOut: () => dispatch(signOut())
})

export default connect(null, mapDTP)(NavBar);