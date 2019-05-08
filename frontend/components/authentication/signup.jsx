import React from 'react';
import { Link } from 'react-router-dom';
import ReCAPTCHA from "react-google-recaptcha";
import Typed from 'typed.js';

class SignUp extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            email: '',
            password: '',
            repeatPass: '',
            f_name: '',
            l_name: '',
            location: '',
            gender: '',
            country: '',
            birthday: '',
            recaptcha: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoUser = this.demoUser.bind(this);
        this.clearInputs = this.clearInputs.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange(field){
        return e => this.setState({ [field]: e.target.value });
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.signUp(this.state);
    }

    clearInputs() {
        let elements = Array.from(document.getElementsByClassName("input"));
        elements.map(input => input.value = "");
    }

    makeid(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
     }

    demoUser(e) {
        e.preventDefault;
        this.clearInputs();
        this.props.clearErrors();

        let a = this.makeid(8);
        // let a = 'bison';
        let b = this.makeid(8);
        // let b = 'bison';

        const username = {
            strings: [a],
            typeSpeed: 80
        }
        const email = {
            strings: [b + "@gmail.com"],
            typeSpeed: 80
        }
        const pass1 = {
            strings: ["pass1234"],
            typeSpeed: 80
        }
        const pass2 = {
            strings: ["pass1234"],
            typeSpeed: 80
        }
        const fname = {
            strings: ["Jeff"],
            typeSpeed: 80
        }
        const lname = {
            strings: ["Smith"],
            typeSpeed: 80
        }
        const location = {
            strings: ["San Francisco"],
            typeSpeed: 80
        }
        const gender = {
            strings: ["Male"],
            typeSpeed: 80
        }
        const country = {
            strings: ["United States"],
            typeSpeed: 80
        }
        const bday = {
            strings: ["2/12/92"],
            typeSpeed: 80
        }

        new Typed("#username", username);
        new Typed("#email", email);
        new Typed("#pass1", pass1);
        new Typed("#pass2", pass2);
        new Typed("#fname", fname);
        new Typed("#lname", lname);
        new Typed("#location", location);
        new Typed("#gender", gender);
        new Typed("#country", country);
        new Typed("#bday", bday);

        this.setState({
                username: a,
                email: b,
                password: 'pass1234',
                repeatPass: 'pass12343',
                f_name: 'Jeff',
                l_name: 'Smith',
                location: 'San Francisco',
                gender: 'Male',
                country: 'United States',
                birthday: '2/12/92'
        })

    }

    render() {
       
        return (
            <div>
                <div className="login-signup"></div>
                <div className="signup-wrapper">
                    <form id="signup-form" onSubmit={this.handleSubmit}>
                        
                        <div className="form-logo">
                            <img src={window.logoURL} />
                        </div>

                        <div className="form-info">
                            <p>Are you a brewery that's trying to get added to Untappd, claim and manage your brewery page, or access your brewery account? Check this out first: <a href="#">Getting on Untappd: Brewery Guide</a></p>
                        </div>

                        <div className="form-user-info">
                            <p><strong>All fields below are required unless specified.</strong></p>
                        </div>

                        <div className="row">
                            <div className="form-field">
                                <input type="text" id='username' className="input logo" name="user[username]" placeholder="Username" onChange={this.onChange("username")} />
                                <i className="fas fa-user"></i>
                            </div>
                            
                            <div className="form-field">
                                <input type="text" id="email" className="input logo" name="user[email]" placeholder="Email" onChange={this.onChange("email")} /><br />
                                <i className="fas fa-envelope"></i>
                            </div>
                        </div>

                        <div className="form-password-info">
                            <p>Avoid using common words and include a mix of letters and numbers.</p>
                        </div>
                        
                        <div className="row">
                            <div className="form-field">
                                <input type="text" id="pass1" className="input logo" name="user[password]" placeholder="password" onChange={this.onChange("password")} />
                                <i className="fas fa-lock"></i>
                            </div>
                            
                            <div className="form-field">
                                <input type="text" id="pass2" className="input logo" name="user[repeat_password]" placeholder="Repeat Password" onChange={this.onChange("repeatPass")} />
                                <i className="fas fa-lock"></i>
                            </div>
                        </div>

                        <div className="row-space signin-errors">{this.props.errors}</div>

                        <div className="row">
                            <div className="form-field">
                                <input type="text" id="fname" className="input" name="user[f_name]" placeholder="First Name" onChange={this.onChange("f_name")} />
                            </div>
                            
                            <div className="form-field">
                                <input type="text" id="lname" className="input" name="user[l_name]" placeholder="Last Name" onChange={this.onChange("l_name")} />
                            </div>
                        </div>

                        <div className="row">
                            <div className="form-field">
                                <input type="text" id="location" className="input" name="user[location]" placeholder="Location (Optional)" onChange={this.onChange("location")} />
                            </div>
                            
                            <div className="form-field">
                                <input type="text" id="gender" className="input" name="user[gender]" placeholder="Select Your Gender" onChange={this.onChange("gender")} />
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="form-field">
                                <input type="text" id="country" className="input" name="user[country]" placeholder="Select Your Country" onChange={this.onChange("country")} />
                            </div>
                            
                            <div className="form-field">
                                <input type="text" id="bday" className="input" name="user[birthday]" placeholder="birthday" onChange={this.onChange("birthday")} />
                            </div>
                        </div>
                        
                        <div className="recaptcha" id="test">
                            <ReCAPTCHA sitekey="6Le9c6EUAAAAAJ8wFffA0cyehFjUMs3a3Uvq5nK-" />
                        </div>

                        <div className="privacy-statement">
                            <p>You must be of legal drinking age in your country to join Untappd. By clicking Create Account, you agree to our <a href="https://github.com/BadassBison/Uncappd/wiki" target="_blank" >Terms of Use</a> and our <a href="https://github.com/BadassBison/Uncappd/wiki" target="_blank">Privacy Policy</a></p>
                        </div>

                        <div className="submit-form">
                            <input type="submit" value="Create Account" />
                            <input type="button" id="demo" onClick={this.demoUser} value="Demo User" />
                        </div>
                    </form> 
                </div> 
                
            </div>
        )
    }
}
  
export default SignUp;