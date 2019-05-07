import {
    RECEIVE_BREWERY
} from '../actions/form_actions';
import merge from 'lodash/merge';

const breweryReducer = (state = {}, action) => {
    
    Object.freeze(state);
    switch(action.type){

        // case RECEIVE_POST:
        //   return merge({}, state, { [action.currentUser.id]: action.currentUser });

        default:
          return state;
    }
};

export default breweryReducer;