import React from 'react';
import { Link } from 'react-router-dom';

class SignUp extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: '',
            repeatPass: '',
            f_name: '',
            l_name: '',
            location: '',
            gender: '',
            country: '',
            birthday: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onChange(field){
        return e => this.setState({ [field]: e.target.value });
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.signUp(this.state);
    }
    
    render() {
        return (
            <div>
                <div className="login-signup"></div>
                <div className="form-wrapper">
                    <form id="signup-form" onSubmit={this.handleSubmit}>
                        
                        <div className="form-logo">
                            <h2>Logo Goes Here</h2>
                        </div>

                        <div className="form-info">
                            <p>Are you a brewery that's trying to get added to Untappd, claim and manage your brewery page, or access your brewery account? Check this out first: <a href="#">Getting on Untappd: Brewery Guide</a></p>
                        </div>

                        <div className="form-user-info">
                            <p>All fields below are required unless specified.</p>
                        </div>

                        <div className="row">
                            <div className="form-field">
                                <input type="text" name="user[username]" placeholder="Username" onChange={this.onChange("username")} />
                            </div>
                            
                            <div className="form-field">
                                <input type="text" name="user[email]" placeholder="Email" onChange={this.onChange("email")} /><br />
                            </div>
                        </div>

                        <div className="form-password-info">
                            <p>Avoid using common words and include a mix of letters and numbers.</p>
                        </div>
                        
                        <div className="row">
                            <div className="form-field">
                                <input type="text" name="user[password]" placeholder="password" onChange={this.onChange("password")} />
                            </div>
                            
                            <div className="form-field">
                                <input type="text" name="user[repeat_password]" placeholder="Repeat Password" onChange={this.onChange("repeatPass")} />
                            </div>
                        </div>

                        <div className="row">
                            <div className="form-field">
                                <input type="text" name="user[f_name]" placeholder="First Name" onChange={this.onChange("f_name")} />
                            </div>
                            
                            <div className="form-field">
                                <input type="text" name="user[l_name]" placeholder="Last Name" onChange={this.onChange("l_name")} />
                            </div>
                        </div>

                        <div className="row">
                            <div className="form-field">
                                <input type="text" name="user[location]" placeholder="Location (Optional)" onChange={this.onChange("location")} />
                            </div>
                            
                            <div className="form-field">
                                <input type="text" name="user[gender]" placeholder="Select Your Gender" onChange={this.onChange("gender")} />
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="form-field">
                                <input type="text" name="user[country]" placeholder="Select Your Country" onChange={this.onChange("country")} />
                            </div>
                            
                            <div className="form-field">
                                <input type="text" name="user[birthday]" placeholder="birthday" onChange={this.onChange("birthday")} />
                            </div>
                        </div>
                        
                        <div className="privacy-statement">
                            <p>You must be of legal drinking age in your country to join Untappd. By clicking Create Account, you agree to our Terms of Use and our Privacy Policy</p>
                        </div>

                        <div className="submit-form">
                            <input type="submit" value="Create Account" />
                        </div>
                    </form>
                    <Link to={"/"}>Back Home</Link>  
                </div> 
            </div>
        )
    }
}
  
export default SignUp;