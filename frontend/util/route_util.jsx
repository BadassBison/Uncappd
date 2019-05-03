import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { withRouter } from "react-router";
import { connect } from 'react-redux';

const Auth = ({component: Component, path, loggedIn, exact}) => (
    <Route path={path} exact={exact} render={(props) => (
      !loggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect to="/home" />
      )
    )}/>
  );

const Protected = ({component: Component, path, loggedIn, exact}) => (
    <Route path={path} exact={exact} render={(props) => (
      loggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      )
    )}/>
  );
  
  const mapStateToProps = state => {
    return {loggedIn: Boolean(state.session.id)};
  };
  
  export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
  export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected));