import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logOut }) => {
    const sessionLinks = () => (
        <nav className="login-signup">
            <Link to={"/signup"}>Signup</Link>&nbsp;
            <Link to={"/login"}>Log In</Link>
        </nav>
    )
    const personalGreeting = () => (
        <hgroup className="header-group">
            
    )
    
    
    <>
        <h2>Greeting page</h2>
        
        
    </>
};
  
export default Greeting;