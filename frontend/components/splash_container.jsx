import React from 'react';
import { connect } from 'react-redux';
import { signOut } from '../actions/session_actions';
import Splash from './splash';

const mapSTP = ({ session, entities: { users } }) => {
    return {
      currentUser: users[session.id]
    };
  };

const mapDTP = dispatch => ({
    signOut: () => dispatch(signOut())
})

export default connect(mapSTP, mapDTP)(Splash)