import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import postsReducer from './posts_reducer';
import beersReducer from './beers_reducer';
import brewerysReducer from './brewerys_reducer';
import venuesReducer from './venues_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    posts: postsReducer,
    beers: beersReducer,
    brewerys: brewerysReducer,
    venues: venuesReducer
})

export default entitiesReducer;