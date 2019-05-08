import React from 'react';
import { Link } from 'react-router-dom';
import Post from './post_container';

class Posts extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }
    
    onChange(field){
        return e => this.setState({ [field]: e.target.value });
    }
    
    handleSubmit(e) {
        e.preventDefault();
        this.props.signIn(this.state);
    }

    render() {
        return (
            <div className="posts-wrapper">
                <h3>Recent Posts</h3>
                <div className="post"><Post /></div>
                <div className="post"><Post /></div>
                <div className="post"><Post /></div>
                <div className="post"><Post /></div>
            </div>
        )
    }
};
  
export default Posts;


//  required pattern="banana|cherry"