import React from 'react';
import { Link } from 'react-router-dom';


class Post extends React.Component {
    constructor(props){
        super(props)
        this.num = Math.ceil(Math.random() * 2);
        this.beer = `beer${this.num}`;
    }

    render() {
        let user = this.props.currentUser;
        let brewery = this.props.brewery ? `${this.props.brewery.name}` : "";
        let from = this.props.brewery ? "from" : ""
        return (
            <div key={this.props.key} className="post-wrapper">
                
                <div className="post-top">
                    <div className="profile-img"><img src={window.demoProfile} /></div>
                    <div className="post-info">
                        <Link to="/user"> {user.fName} {user.lName} </Link> 
                        is drinking 
                        <Link to="/beer"> {this.props.beer.name} </Link> 
                        at 
                        <Link to="/home"> {this.props.venue.name} </Link> 
                        {from} <Link to="/brewery"> {brewery} </Link>
                    </div>
                    <div className="beer-logo"><img src={window.beerLogo} /></div>
                </div>
                
                <div className="post-body">
                    <div className="post-arrow"></div>
                    <div className="post-content">
                        <p>{this.props.post.content}</p>
                        <p>Rating: {this.props.post.rating}</p>
                    </div>
                    <div className="post-image"><img src={window[this.beer]} /></div>
                    <span className="post-time">5 May 19</span>
                    <span className="post-show"><Link to="/home">View Detailed Check-in</Link></span>
                </div>
            </div>
        )
    }
};
  
export default Post;