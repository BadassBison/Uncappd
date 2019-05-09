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
                        <div className="user-information">
                            <h1>Carlos Garcia</h1>
                            <div className="location">
                                <p>BigBaller</p>
                                <p>California, USA</p>
                            </div>
                            <div className="user-links">
                                <a href="#"><span className="b-data">11,024</span>&nbsp;<span className="stat">TOTAL</span></a>
                                <a href="#"><span className="b-data">5</span>&nbsp;<span className="stat">UNIQUE</span></a>
                                <a href="#"><span className="b-data">865</span>&nbsp;<span className="stat">BADGES</span></a>
                                <a href="#"><span className="b-data">79,746</span>&nbsp;<span className="stat">FRIENDS</span></a>
                            </div>
                        </div>
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