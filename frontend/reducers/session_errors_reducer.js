import {
    RECEIVE_CURRENT_USER,
    RECEIVE_ERRORS,
    CLEAR_ERRORS
} from '../actions/session_actions';
import merge from 'lodash/merge';

const sessionErrorsReducer = (state = [], action) => {
    
    Object.freeze(state);
    switch(action.type){

        case RECEIVE_CURRENT_USER, CLEAR_ERRORS:
          return [];

        case RECEIVE_ERRORS:
          return action.errors;

        default:
          return state;
    }
};

export default sessionErrorsReducer;