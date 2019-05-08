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
        // debugger
        return (
            <div key={this.props.key} className="post-wrapper">
                
                <p>
                    <Link to="/home">
                        {user.fName} {user.lName}
                    </Link> is drinking {this.props.beer.name} at {this.props.venue.name} {brewery}
                </p><br />
                <p>{this.props.post.content}</p><br />
                <p>Rating: {this.props.post.rating}</p><br />
            </div>
        )
    }
};
  
export default Post;