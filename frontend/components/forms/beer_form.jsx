import React from 'react';
import { Link } from 'react-router-dom';

class BeerForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            beer_type: 'lager',
            brewery_id: 1
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
                        
                        
                        <label htmlFor="form-content">Name:</label>
                        <input type="text" className="form-content" id="form-content" name="beer[name]" onChange={this.onChange("name")} />
                        
                        
                        <label htmlFor="form-beer-type">Beer Type:</label>
                        <select className="form-beer-type" id="form-beer-type" name="beer[beer_type]" onChange={this.onChange("beer_type")}>
                            <option value="lager">Lager</option>
                            <option value="ipa">IPA</option>
                        </select>
                        

                        <label htmlFor="form-brewery">Brewery:</label>
                        <select className="form-brewery" id="form-brewery" name="beer[brewery_id]" onChange={this.onChange("brewery_id")}>
                            <option value="1">New Belgium</option>
                            <option value="2">Bells</option>
                        </select>


                        <input type="submit" value="Submit"/>

                    </form>
                </div>
            </div>
        )
    }
}

export default BeerForm;