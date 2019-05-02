import React from 'react';
import { Link } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';
import Typed from 'typed.js';

class LogIn extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoUser = this.demoUser.bind(this);
    this.clearInputs = this.clearInputs.bind(this);
    }

    clearInputs() {
        let elements = Array.from(document.getElementsByClassName("input"));
        elements.map(input => input.value = "");
    }

    demoUser(e) {
        e.preventDefault;
        this.clearInputs();

        const username = {
            strings: ["Bison"],
            typeSpeed: 80
        }

        const password = {
            strings: ["pass1234"],
            typeSpeed: 80
        }

        new Typed("#username", username);
        setTimeout(() => {
            new Typed("#password", password);
        }, 600);
        
    }
    
    onChange(field){
        return e => this.setState({ [field]: e.target.value });
    }
    
    handleSubmit(e) {
        e.preventDefault();
        this.props.signIn(this.state);
    }

    responseFacebook(response) {
        console.log("response")
    }

    onClick() {
        console.log("clicked")
    }

    render() {
        return (
            <div>
            <div id="fb-root"></div>
            
                <div className="login-signup"></div>
                <div className="login-wrapper">
                    <form id="login-form" onSubmit={this.handleSubmit}>
                        
                        <div className="form-logo-sm">
                            <h2>Logo Goes Here</h2>
                        </div>

                        <div className="facebook-login">
                            <FacebookLogin
                                appId="323049325046608"
                                autoLoad={true}
                                fields="name,email,picture"
                                onClick={this.componentClicked}
                                callback={this.responseFacebook}    
                            />
                        </div>

                        <div className="or"><span><p>OR</p></span></div>

                        <div className="signin-field">
                            <input type="text" id="username" className="input" name="user[username]" placeholder="Username" onChange={this.onChange("username")}/> 
                        </div>
                        
                        <div className="signin-field">
                            <input type="text" id="password" className="input" name="user[password]" placeholder="password" onChange={this.onChange("password")} />
                        </div>

                        <div className="submit-form">
                            <input type="submit" value="Sign In" />
                            <input type="button" value="Demo User" onClick={this.demoUser} />
                        </div>

                        <div className="forgot-password">
                            <div className="forgot-border">
                                <a href="#">Forgot your password?</a>
                            </div>
                        </div>

                        <div className="signup-link">
                            <h3>New around here? <Link to="/signup" className="link">Sign Up!</Link></h3>
                        </div>
                    </form> 
                </div> 
            </div>
        )
    }
};
  
export default LogIn;


//  required pattern="banana|cherry"