import React from 'react';
import { Link } from 'react-router-dom';

const Greetings = () => (
    <>
        <h2>Greetings page</h2>
        <Link to={"/signup"}>Signup</Link>
        <Link to={"/login"}>Log In</Link>
    </>
);
  
export default Greetings;