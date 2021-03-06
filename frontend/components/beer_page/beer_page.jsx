import React from 'react';
import { Link } from 'react-router-dom';
import Posts from '../posts/post_index_container';
import PhotoBar from '../photo_bar/photo_bar_container';

class BeerPage extends React.Component {
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
                                        <img src={window.beerProfileImg} alt="beerProfile"/>
                                    </div>
                                    <div className="b-demo-info">
                                        <h1>Amstel Lager</h1>
                                        <Link to="/">Brewery Name</Link>
                                        <p>Beer Type</p>
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
                                    <div className="mid-data"><p>4.2% ABV</p></div>
                                    <div className="mid-data"><p>6 IBU</p></div>
                                    <div className="mid-data"><p>Rating: 4.3</p></div>
                                    <div className="mid-data"><p>Ratings: 12,456</p></div>
                                    <div className="mid-data-end"><p>Added 05/12/12</p></div>
                                </div>


                                <div className="b-description">
                                    <p>Bud Light is brewed using a blend of premium aroma hop varieties, both American-grow <Link to="/">Show More</Link></p>
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
  
export default BeerPage;