import React from 'react';
import { Link } from 'react-router-dom';

class BeerForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            beerType: '',
            rating: '',
            breweryId: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.makeBeer(this.state);
    }

    onChange(field){
        return e => this.setState({ [field]: e.target.value });
    }

    render() {
        return (
            <div className="form-wrapper">
                <div className="form">
                    <h2>Beer Form</h2>
                    <form  onSubmit={this.handleSubmit}>
                        
                        {/* <input type="hidden" name="beer[user_id]" value={this.props.user}/> */}
                        
                        <label htmlFor="form-content">Name:</label>
                        <input type="text" className="form-content" id="form-content" name="beer[name]" onChange={this.onChange("name")} />
                        
                        
                        <label htmlFor="form-beer-type">Beer Type:</label>
                        <input type="text" name="beer[beer_type]" onChange={this.onChange("beer_type")} />
                        {/* <select className="form-beer-type" id="form-beer-type">
                            <option>Lager</option>
                            <option>IPA</option>
                        </select> */}
                        

                        <label htmlFor="form-rating">Rating:</label>
                        <input type="text" name="beer[rating]" onChange={this.onChange("rating")} />
                        {/* <select className="form-rating" id="form-rating">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select> */}

                        <label htmlFor="form-brewery">Brewery:</label>
                        <input type="text" name="beer[brewery_id]" onChange={this.onChange("brewery_id")} />
                        {/* <select className="form-brewery" id="form-brewery">
                            <option>New Belgium</option>
                            <option>Bells</option>
                        </select> */}

                        <input type="submit" value="Submit"/>

                    </form>
                </div>
            </div>
        )
    }
}

export default BeerForm;