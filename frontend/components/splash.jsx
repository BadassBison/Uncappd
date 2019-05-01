import React from 'react';
import { Link } from 'react-router-dom';

const Splash = ({ currentUser, signOut }) => {
    
    const sessionLinks = () => (
        <>
        <div className="">
            <div className="masthead"></div>
            <div id="link-wrapper">
                    <Link to="/login">SIGN IN</Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/signup">CREATE AN ACCOUNT</Link>
            </div>
            

        </div>
        </>
    );

    const personalGreeting = () => (
        <hgroup className="header-group">
          <h2 className="header-name">Hi, {currentUser.username}!</h2>
          <button className="header-button" onClick={signOut}>Log Out</button>
        </hgroup>
    );

    return currentUser ? personalGreeting() : sessionLinks();
};  
    
export default Splash;
