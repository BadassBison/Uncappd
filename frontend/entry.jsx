import React from 'react';
import ReactDOM from 'react-dom';
import { getState, dispatch } from 'redux';
import configureStore from './store/store';
import Root from './components/root';
import { signUp, signIn, signOut } from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
  let store = configureStore();
  const root = document.getElementById('root');
  
  window.signUp = signUp;
  window.signIn = signIn;
  window.signOut = signOut;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  
  ReactDOM.render(<Root store={store} />, root);
});

