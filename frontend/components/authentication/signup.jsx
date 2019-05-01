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
            <>
            <h2>Sign Up Page</h2>
            <form id="signupForm" onSubmit={this.handleSubmit}>
                <input type="text" name="user[username]" placeholder="Username" onChange={this.onChange("username")} />
                <input type="text" name="user[email]" placeholder="Email" onChange={this.onChange("email")} /><br />
                <input type="text" name="user[password]" placeholder="password" onChange={this.onChange("password")} />
                <input type="text" name="user[repeat_password]" placeholder="Repeat Password" onChange={this.onChange("repeatPass")} /><br />
                <input type="text" name="user[f_name]" placeholder="First Name" onChange={this.onChange("f_name")} />
                <input type="text" name="user[l_name]" placeholder="Last Name" onChange={this.onChange("l_name")} /><br />
                <input type="text" name="user[location]" placeholder="Location (Optional)" onChange={this.onChange("location")} />
                <input type="text" name="user[gender]" placeholder="Select Your Gender" onChange={this.onChange("gender")} /><br />
                <input type="text" name="user[country]" placeholder="Select Your Country" onChange={this.onChange("country")} />
                <input type="text" name="user[birthday]" placeholder="birthday" onChange={this.onChange("birthday")} /><br />
                <input type="submit" value="Create Account" />
            </form>
            <Link to={"/"}>Back Home</Link>   
        </>
        )
    }
}
  
export default SignUp;