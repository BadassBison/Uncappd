import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Splash from './splash_container';
import SignUp from './authentication/signup_container';
import LogIn from './authentication/login_container';

const App = ({ children }) => (
    <div>
      <Switch>
        <Route path="/login" component={LogIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/" component={Splash} />
      </Switch>
        
      
    </div>
  );
  
  export default App;

//     <Route exact path="/" component={} /> 
// 
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