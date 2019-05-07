import React from 'react';
import { Link } from 'react-router-dom';

class VenueForm extends React.Component {
    constructor(props){
        super(props)

    }

    render() {
        return (
            <div className="form-wrapper">
                <div className="form">
                    <h2>Venue Form</h2>
                    <form>
                        
                        <label htmlFor="form-name">Name:</label>
                        <input type="text" className="form-content" id="form-content" />
                        
                        <label htmlFor="form-location">Location:</label>
                        <input type="text" className="form-content" id="form-content" />
                        
                        
                        <label htmlFor="form-category">Category:</label>
                        <select className="form-beer-type" id="form-beer-type">
                            <option>Regional</option>
                            <option>Micro Brewery</option>
                        </select>

                        <input type="submit" value="Submit"/>
                        
                    </form>
                </div>
            </div>
        )
    }
}

export default VenueForm;