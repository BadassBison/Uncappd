import React from 'react';
import { connect } from 'react-redux';
import { 
    fetchPosts,
    fetchBeers,
    fetchBrewerys,
    fetchVenues
 } from '../../actions/form_actions'
import Posts from './post_index';

const mapSTP = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    posts: Object.values(state.entities.posts),
    beers: Object.values(state.entities.beers),
    brewerys: Object.values(state.entities.brewerys),
    venues: Object.values(state.entities.venues),
})

const mapDTP = dispatch => ({
    fetchPosts: () => dispatch(fetchPosts()),
    fetchBeers: () => dispatch(fetchBeers()),
    fetchBrewerys: () => dispatch(fetchBrewerys()),
    fetchVenues: () => dispatch(fetchVenues())
})

export default connect(mapSTP, mapDTP)(Posts);