import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute } from '../util/route_util.jsx';
import Splash from './splash_container';
import SignUp from './authentication/signup_container';
import LogIn from './authentication/login_container';


const App = ({ children }) => (
    <div>
      <Switch>
        <AuthRoute path="/login" component={LogIn} />
        <AuthRoute path="/signup" component={SignUp} />
        
      </Switch>
        <Route path="/" component={Splash} />
        
      
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