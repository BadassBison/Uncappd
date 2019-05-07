import React from 'react';
import { Link } from 'react-router-dom';

class PostForm extends React.Component {
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.makePost(this.state);
    }

    render() {
        return (
            <div className="form-wrapper">
                <div className="form">
                    <h2>Post Form</h2>
                    <form onSubmit={this.handleSubmit}>
                        
                        <label htmlFor="form-content">Review:</label>
                        <textarea className="form-content" id="form-content" name="post[content]"></textarea>
                        
                        
                        <label htmlFor="form-beer">Beer:</label>
                        <select className="form-beer" id="form-beer" name="post[beer_id]">
                            <option value="1">Bud Light</option>
                            <option value="2">Hop Slam</option>
                        </select>
                        

                        <label htmlFor="form-venue">Venue:</label>
                        <select className="form-venue" id="form-venue" name="post[venue_id]" >
                            <option value="1">Patsies</option>
                            <option value="2">Good Fellas</option>
                            <option value="3">Thunder Dome</option>
                        </select>

                        <input type="submit" value="Submit"/>
                        
                    </form>
                </div>
            </div>
        )
    }
}

export default PostForm;