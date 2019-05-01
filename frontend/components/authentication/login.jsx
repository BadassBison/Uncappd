import React from 'react';
import { Link } from 'react-router-dom';

class LogIn extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    onChange(field){
        return e => this.setState({ [field]: e.target.value });
    }
    
    handleSubmit(e){
        e.preventDefault();
        this.props.signIn(this.state);
    }
    
    render() {
        return (
            <>
                <h2>Log In Page</h2>
                <form id="LogInForm" onSubmit={this.handleSubmit}>
                    <input type="text" name="user[username]" placeholder="Username" onChange={this.onChange("username")} />
                    <input type="text" name="user[password]" placeholder="Password" onChange={this.onChange("password")} /><br />
                    <input type="submit" value="Sign In" />
                </form>
                <Link to={"/"}>Back Home</Link>   
            </>
        )
    }
};
  
export default LogIn;
