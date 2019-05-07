import React from 'react';
import { connect } from 'react-redux';
import { makeBeer } from '../../actions/form_actions';
import BeerForm from './beer_form';

const mapSTP = (state, ownProps) => {
    return ({user: state.session.id})
}

const mapDTP = dispatch => ({
    makeBeer: beer => dispatch(makeBeer(beer))
})

export default connect(mapSTP, mapDTP)(BeerForm);