import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util.jsx';
import Splash from './splash_container';
import SignUp from './authentication/signup_container';
import LogIn from './authentication/login_container';
import NavBar from './navbar/navbar_container';


const App = ({ children }) => (
    <div>
      <Switch>
        <AuthRoute path="/login" component={LogIn} />
        <AuthRoute path="/signup" component={SignUp} />
        <ProtectedRoute path="/home" component={NavBar} />
        <AuthRoute exact path="/" component={Splash} />
      </Switch>
        
        
      
    </div>
  );
  
  export default App;

//     <Route exact path="/" component={} /> 
// 

//  <Route path="/home" component={NavBar}
//  Components
// 
// splash
// signup
// login
// home
// user profile page
// beer profile page
// brewery profile page
// venue profile page
// 
// <Route exact path="/" component={} />
// <Switch></Switch>