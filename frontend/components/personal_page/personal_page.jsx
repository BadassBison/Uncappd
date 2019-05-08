import React from 'react';
import { Link } from 'react-router-dom';
import Posts from '../posts/post_index_container';

class PersonalPage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }
    
    // onChange(field){
    //     return e => this.setState({ [field]: e.target.value });
    // }
    
    // handleSubmit(e) {
    //     e.preventDefault();
    //     this.props.signIn(this.state);
    // }

    render() {
        return (
            <>
                <div className="personal-page-wrapper">
                    <div className="contents-wrapper">
                        <header></header>
                    </div>
                </div>
                <Posts />
            </>
        )
    }
};
  
export default PersonalPage;