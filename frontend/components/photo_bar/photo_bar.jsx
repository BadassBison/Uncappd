import React from 'react';
import { Link } from 'react-router-dom';

class PhotoBar extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <>
                <span><img src={window[`beer${Math.ceil(Math.random() * 13)}`]} /></span>
                <span><img src={window[`beer${Math.ceil(Math.random() * 13)}`]} /></span>
                <span><img src={window[`beer${Math.ceil(Math.random() * 13)}`]} /></span>
                <span><img src={window[`beer${Math.ceil(Math.random() * 13)}`]} /></span>
                <span><img src={window[`beer${Math.ceil(Math.random() * 13)}`]} /></span>
            </>
        )
    }
}

export default PhotoBar;