import React from 'react';
import { Link } from 'react-router-dom';

const Splash = () => (
    <>
        <h2>Splash page</h2>
        <nav className="login-signup">
            <Link to={"/signup"}>Signup</Link>&nbsp;
            <Link to={"/login"}>Log In</Link>
        </nav>
    </>
    // const personalGreeting = () => (
    //     <hgroup className="header-group">
    // )
    
    
        
);
  
export default Splash;

// { currentUser, logOut }