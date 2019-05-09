import React from 'react';
import { Link } from 'react-router-dom';
import Posts from '../posts/post_index_container';
import PhotoBar from '../photo_bar/photo_bar_container';

class UserPage extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <>
                <div className="contents-wrapper">
                    <header>
                        <div className="main-img"><img src={window.demoProfile} /></div>
                    </header>
                </div>

                <div className="page-wrapper">

                    <div className="user-contents">
                        
                        <div className="page-left">

                            <div className="user-photos">
                                <PhotoBar />
                            </div>

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