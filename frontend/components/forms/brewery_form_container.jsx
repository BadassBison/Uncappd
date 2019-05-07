import React from 'react';
import { connect } from 'react-redux';
import { makeBrewery } from '../../actions/form_actions';
import BreweryForm from './brewery_form';

const mapSTP = (state, ownProps) => ({
    
})

const mapDTP = dispatch => ({
    makeBrewery: brewery => dispatch(makeBrewery(brewery))
})

export default connect(mapSTP, mapDTP)(BreweryForm);