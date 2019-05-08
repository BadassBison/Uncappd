import React from 'react';
import { Link } from 'react-router-dom';
import Posts from '../posts/post_index_container';

class UserPage extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <>
                <div className="contents-wrapper">
                    <header></header>
                </div>
                <div className="page-wrapper">
                    <div className="page-contents">
                        
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
  
export default UserPage;