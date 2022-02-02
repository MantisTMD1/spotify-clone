import React from 'react';
import { FaSpotify, FaEllipsisH } from 'react-icons/fa';
import "../styles/LeftMenu.css";
import Menulist from './MenuList.js';
import Menu from './Menu.js'

const leftMenu = () => {
    return (

        <div className="left-menu">
            <div className="logo-container">
                <div className="logo">

                    <i>
                        <FaSpotify />

                    </i>


                </div>

                <i>
                    <FaEllipsisH />

                </i>
            </div>

            <div className="search-bar">
                <input type="text" placeholder="Getcho search on" />

            </div>
            <Menu title={'Menu'} menuObject={ Menulist } />

        </div>

    );
}

export default leftMenu;
