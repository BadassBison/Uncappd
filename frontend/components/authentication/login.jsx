import React from 'react';
import { Link } from 'react-router-dom';

const LogIn = () => (
    <>
        <h2>Log In Page</h2>
        <form id="LogInForm">
            <input type="text" name="user[username]" placeholder="Username" />
            <input type="text" name="user[password]" placeholder="password" />
            <input type="submit" value="Create Account" />
         </form>
         <Link to={"/"}>Back Home</Link>   
    </>
);
  
export default LogIn;
