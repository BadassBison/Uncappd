import React from 'react';
import { Link } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';
import NavBar from './navbar/navbar';

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
            <div className="main-wrapper">
                <div className="left-content">
                    <div className="uncappd-logo"><img src={window.logoWhiteURL} /></div>
                    <div className="little-hr"></div>
                    <p className="discover">Discover and share your favorite beer.</p>
                    <div className="facebook-login">
                            <FacebookLogin
                                appId="323049325046608"
                                autoLoad={true}
                                fields="name,email,picture"
                                onClick={componentClicked}
                                callback={responseFacebook}    
                            />
                    </div>
                </div>

                
                <div className="right-content"></div>
                
            </div>
        </div>
        </>
    );

    const personalGreeting = () => (
        <hgroup className="header-group">
            <NavBar />
          <h2 className="header-name">Hi, {currentUser.username}!</h2>
          <button className="header-button" onClick={signOut}>Log Out</button>
          
        </hgroup>
    );

    return currentUser ? personalGreeting() : sessionLinks();
};  

function responseFacebook(response) {
    console.log("response")
}

function componentClicked() {
    console.log("clicked")
}
    
export default Splash;
