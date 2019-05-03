import React from 'react';
import { Link } from 'react-router-dom';
import Typed from 'typed.js';

class NavBar extends React.Component {
    
    constructor(props){
        super(props);
        this.demo = this.demo.bind(this);
    }

    componentDidMount() {
        this.demo();
    }

    demo() {
        const inputField = {
            strings: [
                "This is a demo",
                "This will have some functionality soon",
                "Please feel free to look around",
                "If you like what you see, go to the footer",
                "I can tell you are amused by the consistent messages",
                "This is a very simple plugin called Typed",
                "This website was my full stack project through App Academy"
            ],
            typeSpeed: 100
        }
    
        new Typed("#nav-bar-input", inputField);
    }
    
    render() {
        return ( 
        <>
        <div className="nav-wrapper">
            <div className="nav-logo">
                <Link to={"/"}><img src={window.navLogo} /></Link>
            </div>
            <div className="nav-links">
                <div className="nav-left">
                    <a href="#">The Pub</a>
                    <a href="#">Top Rated</a>
                    <a href="#">Supporter</a>
                    <a href="#">Help</a>
                </div>

                <div className="nav-right">
                    <div className="user-icon">
                        <button className="logout-btn" onClick={this.props.signOut}><img src={window.userIcon} /></button>
                    </div>
                    <input type="text" id="nav-bar-input" className="nav-search" />
                </div>
            </div>
        </div>
        </>
        )
    }
};

export default NavBar;