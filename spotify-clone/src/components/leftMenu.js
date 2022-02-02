import React from 'react';
import { FaSpotify, FaEllipsisH } from 'react-icons/fa';
import "../styles/LeftMenu.css";
import Menulist from './MenuList.js';
import Menu from './Menu.js'
import MenuPLaylist from './MenuPlaylist.js'

const leftMenu = () => {
    return (

        <div className="left-menu">
            <div className="logo-container">
                <div className="logo">

                    <i className="logo-2">
                        <a href="#">
                            <FaSpotify />

                        </a>
                    </i>


                </div>

                <i>
                    <a className="dots" href="#">
                        <FaEllipsisH />
                    </a>
                </i>
            </div>

            <div className="search-bar">
                <input type="text" placeholder="Getcho search on" />

            </div>
            <Menu title={'Menu'} menuObject={Menulist} />

            <MenuPLaylist />
        </div>

    );
}

export default leftMenu;
