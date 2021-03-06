import {
    RECEIVE_ALL_BREWERYS,
    RECEIVE_BREWERY
} from '../actions/form_actions';
import merge from 'lodash/merge';

const breweryReducer = (state = {}, action) => {
    
    Object.freeze(state);
    switch(action.type){

        case RECEIVE_ALL_BREWERYS:
          let newState = {};
          for (let brewery of action.brewerys) { newState[brewery.id] = brewery }
          return newState;  
        
        case RECEIVE_BREWERY:
          return merge({}, state, { [action.brewery.id]: action.brewery });

        default:
          return state;
    }
};

export default breweryReducer;