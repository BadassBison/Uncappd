import {
    RECEIVE_BEER
} from '../actions/form_actions';
import merge from 'lodash/merge';

const beersReducer = (state = {}, action) => {
    
    Object.freeze(state);
    switch(action.type){

        case RECEIVE_BEER:
          return merge({}, state, { [action.beer.id]: action.beer });
        
        // case DELETE_BEER:
        //   return {};

        default:
          return state;
    }
};

export default beersReducer;