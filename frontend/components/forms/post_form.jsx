import React from 'react';
import { Link } from 'react-router-dom';

class PostForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            content: '',
            user_id: this.props.user,
            beer_id: '1',
            venue_id: '1'
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.makePost(this.state);
    }

    onChange(field){
        return e => this.setState({ [field]: e.target.value });
    }

    render() {
        return (
            <div className="form-wrapper">
                <div className="form">
                    <h2>Post Form</h2>
                    <form onSubmit={this.handleSubmit}>
                        
                        {/* <input type="hidden" name="post[user_id]" value={this.props.user}/> */}

                        <label htmlFor="form-content">Review:</label>
                        <textarea className="form-content" id="form-content" name="post[content]" onChange={this.onChange("content")} required></textarea>
                        
                        
                        <label htmlFor="form-beer">Beer:</label>
                        {/* <input type="text" name="post[beer_id]" onChange={this.onChange("beer_id")}/> */}
                        <select className="form-beer" id="form-beer" name="post[beer_id]" onChange={this.onChange("beer_id")}>
                            <option value="1">Bud Light</option>
                            <option value="2">Hop Slam</option>
                        </select>
                        

                        <label htmlFor="form-venue">Venue:</label>
                        {/* <input type="text" name="post[venue_id]"  onChange={this.onChange("venue_id")} /> */}
                        <select className="form-venue" id="form-venue" name="post[venue_id]" onChange={this.onChange("venue_id")}>
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