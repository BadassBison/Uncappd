import React from 'react';
import { connect } from 'react-redux';
import { makePost } from '../../actions/form_actions';
import PostForm from './post_form';

const mapSTP = (state, ownProps) => {
    return ({user: state.session.id})
}

const mapDTP = dispatch => ({
    makePost: post => dispatch(makePost(post))
})

export default connect(mapSTP, mapDTP)(PostForm);