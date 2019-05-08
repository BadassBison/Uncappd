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
        let brewery = this.props.brewery ? `from ${this.props.brewery.name}` : "";
        return (
            <div key={this.props.key} className="post-wrapper">
                
                <div className="post-top">
                    <div className="profile-img"></div>
                    <div className="post-info">
                        <Link to="/home">{user.fName} {user.lName} </Link> 
                        is drinking 
                        <Link to="/home">{this.props.beer.name} </Link> 
                        at 
                        <Link to="/home">{this.props.venue.name} </Link> 
                        <Link to="/home">{brewery}</Link>
                    </div>
                    <div className="beer-logo"></div>
                </div>
                
                <div className="post-body">
                    <div className="post-arrow"></div>
                    <div className="post-content">
                        <p>{this.props.post.content}</p>
                        <p>Rating: {this.props.post.rating}</p>
                    </div>
                    <div className="post-image"></div>
                    <span className="post-time"></span>
                    <span className="post-show"><Link to="/home">View Detailed Check-in</Link></span>
                </div>
            </div>
        )
    }
};
  
export default Post;