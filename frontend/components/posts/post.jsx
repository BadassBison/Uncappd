import React from 'react';
import { Link } from 'react-router-dom';

// User info
// Beer info
// Brewery info >> from beer
// Venue info


class Post extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        let user = this.props.currentUser;
        return (
            <div key={this.props.key} className="post-wrapper">
                <p>{user.fName} {user.lName}</p><br />
                <p>{this.props.post.content}</p><br />
                <p>{this.props.post.rating}</p><br />
                <p>{this.props.post.beerId}</p><br />
                <p>{this.props.post.venueId}</p><br />
            </div>
        )
    }
};
  
export default Post;