import React from 'react';
import Artist from '../images/jerm.jpg';
import BlueCheck from '../images/blue-check.png';
import { FaEllipsisH, FaHeadphones, FaCheck } from 'react-icons/fa';

const Banner = () => {
    return (
        <div className="banner">
            <img src={Artist} alt="artist..." className="banner-image" />
            <div className="content">
                <div className="breadcrumb">
                    <p>
                        Home <span>/Popular Artist</span>

                    </p>
                    <i><FaEllipsisH />

                    </i>

                </div>

                <div className="artist">
                    <div className="left">
                        <div className="artist-name">
                            <h2>Jerm</h2>
                            <img src={BlueCheck} alt="..." />
                        </div>
                        <p> <i><FaHeadphones /> </i>1,000,000,000<span>Monthly Listeners</span></p>

                    </div>
                    <div className="right">
                        <a href="#">Play</a>
                        <a href="#">


                        <i><FaCheck /> </i>
                        Following</a>
                    </div>

                </div>
            </div>
            <div className="bottom-section"></div>
        </div>

    );
}

export { Banner };
