import React from 'react';
import { Link } from 'react-router-dom';

class VenueForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            location: '',
            category: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.makeVenue(this.state);
    }

    onChange(field){
        return e => this.setState({ [field]: e.target.value });
    }

    onSelectChange(value){
        return e => this.setState({ category: value });
    }

    render() {
        return (
            <div className="form-wrapper">
                <div className="form">
                    <h2>Venue Form</h2>
                    <form onSubmit={this.handleSubmit}>
                        
                        <label htmlFor="form-name">Name:</label>
                        <input type="text" className="form-content" id="form-content" name="venue[name]" onChange={this.onChange("name")} />
                        
                        <label htmlFor="form-location">Location:</label>
                        <input type="text" className="form-content" id="form-content" name="venue[location]"  onChange={this.onChange("location")} />
                        
                        
                        <label htmlFor="form-category">Category:</label>
                        <input type="text" className="form-content" id="form-content" name="venue[category]"  onChange={this.onChange("category")} />
                        {/* <select className="form-beer-type" id="form-beer-type" name="venue[category]"  onChange={this.onSelectChange()}>
                            <option value="regional">Regional</option>
                            <option value="micro">Micro Brewery</option>
                        </select> */}

                        <input type="submit" value="Submit"/>
                        
                    </form>
                </div>
            </div>
        )
    }
}

export default VenueForm;