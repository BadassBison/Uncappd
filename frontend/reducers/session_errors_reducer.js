import {
    RECEIVE_CURRENT_USER,
    RECEIVE_ERRORS
} from '../actions/session_actions';
import merge from 'lodash/merge';

const sessionErrorsReducer = (state = [], action) => {
    
    Object.freeze(state);
    switch(action.type){

        case RECEIVE_CURRENT_USER:
          return [];

        case RECEIVE_ERRORS:
          return merge([], state, {sigin: action});

        default:
          return state;
    }
};

export default sessionErrorsReducer;