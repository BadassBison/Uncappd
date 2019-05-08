import React from 'react';
import { Link } from 'react-router-dom';

// User info
// Beer info
// Brewery info >> from beer
// Venue info


class Post extends React.Component {
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
            <div className="post-wrapper">
                <p>Post Header</p>
                <p>Image</p>
                <p>Post Footer</p>
            </div>
        )
    }
};
  
export default Post;