import React from 'react';
import { connect } from 'react-redux';
import Posts from './post_index';

const mapSTP = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id]
})

const mapDTP = dispatch => ({
    
})

export default connect(mapSTP, null)(Posts);