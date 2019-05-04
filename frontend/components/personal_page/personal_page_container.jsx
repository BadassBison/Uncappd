import React from 'react';
import { connect } from 'react-redux';
import PersonalPage from './personal_page';


const mapSTP = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id]
})

const mapDTP = dispatch => ({
    signOut: () => dispatch(signOut())
})

export default connect(mapSTP, null)(PersonalPage);