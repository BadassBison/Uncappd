import React from 'react';
import { connect } from 'react-redux';
import UserPage from './user_page';


const mapSTP = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id]
})

const mapDTP = dispatch => ({
    
})

export default connect(mapSTP, null)(UserPage);