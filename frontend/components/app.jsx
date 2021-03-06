import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util.jsx';
import Splash from './splash_container';
import SignUp from './authentication/signup_container';
import LogIn from './authentication/login_container';
import NavBar from './navbar/navbar_container';
import PersonalPage from './personal_page/personal_page_container';
import UserPage from './user_page/user_page_container';
import BeerPage from './beer_page/beer_page_container';
import BreweryPage from './brewery_page/brewery_page_container';
import PostForm from './forms/post_form_container';
import BeerForm from './forms/beer_form_container';
import BreweryForm from './forms/brewery_form_container';
import VenueForm from './forms/venue_form_container';

const App = ({ children }) => (
    <div>
      <Route path="/" component={NavBar} />
      <Switch>
        <AuthRoute path="/login" component={LogIn} />
        <AuthRoute path="/signup" component={SignUp} />
        <ProtectedRoute path="/addpost" component={PostForm} />
        <ProtectedRoute path="/addbeer" component={BeerForm} />
        <ProtectedRoute path="/addbrewery" component={BreweryForm} />
        <ProtectedRoute path="/addvenue" component={VenueForm} />
        <ProtectedRoute path="/brewery" component={BreweryPage} />
        <ProtectedRoute path="/beer" component={BeerPage} />
        <ProtectedRoute path="/user" component={UserPage} />
        <ProtectedRoute path="/home" component={PersonalPage} />
        <AuthRoute exact path="/" component={Splash} />
        <Redirect to="/" />
      </Switch>
        
    </div>
  );
  
  export default App;
     