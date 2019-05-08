import {
  RECEIVE_ALL_POSTS,
  RECEIVE_POST
} from '../actions/form_actions';
import merge from 'lodash/merge';

const postsReducer = (state = {}, action) => {
    
    Object.freeze(state);
    switch(action.type){

        case RECEIVE_ALL_POSTS:
          let newState = {};
          for (let post of action.posts) { newState[post.id] = post }
          return newState;  

        case RECEIVE_POST:
          return merge({}, state, { [action.post.id]: action.post });
        
        // case DELETE_POST:
        //   return {};

        default:
          return state;
    }
};

export default postsReducer;