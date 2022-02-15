import React from 'react';
import '../styles/mainMenu.css';
import { Banner } from './Banner.js';
import { FaUsers } from 'react-icons/fa';

const mainMenu = () => {
    return (

        <div className="maincontainer">
            <Banner />
            <div className="menu-list">
                <ul>
                    <li> <a href="#">Popular</a> </li>
                    <li> <a href="#">Albums</a> </li>
                    <li> <a href="#">Songs</a> </li>
                    <li> <a href="#">About</a> </li>


                </ul>
                <p>

                    <i><FaUsers /> </i>
                    10 trillion <span>followers</span>
                </p>
            </div>
        </div>

    );
}

export default mainMenu;