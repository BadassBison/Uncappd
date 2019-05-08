import React from 'react';
import { Link } from 'react-router-dom';
import Post from './post_container';

class Posts extends React.Component {
    constructor(props){
        super(props)
        this.allPosts;
    }

    componentDidMount(){
        this.props.fetchPosts();
        this.props.fetchBeers();
        this.props.fetchBrewerys();
        this.props.fetchVenues();
    }

    render() {
        if(this.props.posts.length !== 0) {
            this.allPosts = this.props.posts.map(
                post => {
                    return <div className="post"><Post post={post} key={post.id} /></div>
                }
            )
        }
        
        return (
            <div className="posts-wrapper">
                <h3>Recent Posts</h3>
                {this.allPosts}
            </div>
        )
    }
};
  
export default Posts;


//  required pattern="banana|cherry"