import React from 'react';
import { Link } from 'react-router-dom';
import Posts from '../posts/post_index_container';

class PersonalPage extends React.Component {
    constructor(props){
        super(props)
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
                    <div className="page-contents">
                        {/* <div className="contents-wrapper">
                            <header></header>
                        </div> */}
                        <div className="page-left">
                            <div className="posts">
                                <Posts />
                            </div>
                        </div>
                        <div className="page-right">
                            <div className="box"></div>
                            <div className="box"></div>
                            <div className="box"></div>
                            <div className="box"></div>
                        </div>

                    </div>
                </div>
            </>
        )
    }
};
  
export default PersonalPage;