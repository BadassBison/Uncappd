import React from 'react';
import ReactDOM from 'react-dom';
import { getState, dispatch } from 'redux';
import configureStore from './store/store';
import Root from './components/root';
import { signUp, signIn, signOut } from './actions/session_actions';
// import { makePost } from './actions/form_actions';
import { makePost, makeBeer, makeBrewery, makeVenue } from './util/form_api_util';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser },
        posts: {},
        beers: {},
        brewerys: {},
        venues: {}
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  const root = document.getElementById('root');
  
  window.signUp = signUp;
  window.signIn = signIn;
  window.signOut = signOut;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.makePost = makePost;
  window.makeBeer = makeBeer;
  window.makeBrewery = makeBrewery;
  window.makeVenue = makeVenue;
  
  ReactDOM.render(<Root store={store} />, root);
});