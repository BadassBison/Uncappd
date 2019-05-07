import React from 'react';
import { Link } from 'react-router-dom';

class BeerForm extends React.Component {
    constructor(props){
        super(props)

    }

    render() {
        return (
            <div className="form-wrapper">
                <div className="form">
                    <h2>Beer Form</h2>
                    <form>
                        
                        <label htmlFor="form-content">Name:</label>
                        <input type="text" className="form-content" id="form-content" />
                        
                        
                        <label htmlFor="form-beer-type">Beer Type:</label>
                        <select className="form-beer-type" id="form-beer-type">
                            <option>Lager</option>
                            <option>IPA</option>
                        </select>
                        

                        <label htmlFor="form-rating">Rating:</label>
                        <select className="form-rating" id="form-rating">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>

                        <label htmlFor="form-brewery">Brewery:</label>
                        <select className="form-brewery" id="form-brewery">
                            <option>New Belgium</option>
                            <option>Bells</option>
                        </select>

                        <input type="submit" value="Submit"/>

                    </form>
                </div>
            </div>
        )
    }
}

export default BeerForm;