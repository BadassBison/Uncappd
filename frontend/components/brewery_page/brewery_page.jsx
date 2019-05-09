import React from 'react';
import { Link } from 'react-router-dom';
import Posts from '../posts/post_index_container';
import PhotoBar from '../photo_bar/photo_bar_container';

class BreweryPage extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <>
                <div className="page-wrapper">
                    <div className="page-contents">
                        <div className="page-left">
                            <div className="b-info">
                                <div className="b-head">
                                    <div className="b-profile-img">
                                        <img src={window.breweryProfileImg} alt="breweryProfile"/>
                                    </div>
                                    <div className="b-demo-info">
                                        <h1>Stone Brewing</h1>
                                        <Link to="/">Escondido, CA United States</Link>
                                        <p>Regional Brewery</p>
                                    </div>
                                    <div className="b-counter">
                                        <div className="b-box-ul b-box">
                                            <p><span className="stat">TOTAL</span><span className="b-data">1.2M+</span></p>
                                        </div>
                                        <div className="b-box-ur b-box">
                                            <p><span className="stat">UNIQUE</span><span className="b-data">236,145</span></p>
                                        </div>
                                        <div className="b-box-dl b-box">
                                            <p><span className="stat">MONTHLY</span><span className="b-data">23,965</span></p>
                                        </div>
                                        <div className="b-box-dr b-box">
                                            <p><span className="stat">YOU</span><span className="b-data">7</span></p>
                                        </div>
                                    </div>
                                </div>

                                <div className="b-mid-info">
                                    <div className="mid-data"><p>Rating: 4.1</p></div>
                                    <div className="mid-data"><p>Ratings: 612,456</p></div>
                                    <div className="mid-data"><Link to="/beer">1324 Beers</Link></div>
                                    <div className="mid-data"><p>Added 05/12/12</p></div>
                                    <div className="mid-data-end"><div className="star"><i class="fas fa-star"></i></div></div>
                                </div>


                                <div className="b-description">
                                    <p>Founded by Greg Koch and Steve Wagner in 1996, San Diego-based Stone Brewing is the <Link to="/">Show More</Link></p>
                                    <div className="b-buttons">
                                        <div className="b-btn"><i class="fas fa-check"></i></div> 
                                        <div className="b-btn"><i class="fas fa-plus"></i></div>
                                    </div>
                                </div>

                            </div>
                            
                            <div className="user-photos">
                                <PhotoBar />
                            </div>

                            <div className="posts">
                                <Posts />
                            </div>
                        </div>
                        
                        <div className="page-right">
                            <div className="b-edits">
                                <a href="https://github.com/BadassBison/Uncappd/issues">Propose Edit</a>
                                <a href="https://github.com/BadassBison/Uncappd/issues">Propose Duplicate</a>
                            </div>
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
  
export default BreweryPage;