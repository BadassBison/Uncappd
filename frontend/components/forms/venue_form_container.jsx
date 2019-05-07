import React from 'react';
import { connect } from 'react-redux';
import { makeVenue } from '../../actions/form_actions';
import VenueForm from './Venue_form';

const mapSTP = (state, ownProps) => ({
    
})

const mapDTP = dispatch => ({
    makeVenue: venue => dispatch(makeVenue(venue))
})

export default connect(mapSTP, mapDTP)(VenueForm);