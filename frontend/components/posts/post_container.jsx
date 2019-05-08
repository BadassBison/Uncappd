import React from 'react';
import { connect } from 'react-redux';
import Post from './post';

const mapSTP = (state, ownProps) => {
    
    // debugger
    
    return( 
        {
            currentUser: state.entities.users[state.session.id],
            beer: state.entities.beers[ownProps.post.beerId],
            brewery: state.entities.brewerys[state.entities.beers[ownProps.post.beerId].breweryId],
            venue: state.entities.venues[ownProps.post.venueId]
        }
    )
}

const mapDTP = dispatch => ({
    
})

export default connect(mapSTP, null)(Post);