import React from 'react';
import  Artist from '../images/banner.png';
import { Bluecheck } from '../images/blue-check.png';


const Banner = () => {
    return (
        <div className="banner">
            <img src={Artist}  alt="artist..." className="banner-image" />

        </div>

    );
}

export {Banner} ;
