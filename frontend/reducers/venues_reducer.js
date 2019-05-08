import {
    RECEIVE_ALL_VENUES,
    RECEIVE_VENUE
} from '../actions/form_actions';
import merge from 'lodash/merge';

const venueReducer = (state = {}, action) => {
    
    Object.freeze(state);
    switch(action.type){

        case RECEIVE_ALL_VENUES:
          let newState = {};
          for (let venue of action.venues) { newState[venue.id] = venue }
          return newState;  

        case RECEIVE_VENUE:
          return merge({}, state, { [action.venue.id]: action.venue });

        default:
          return state;
    }
};

export default venueReducer;