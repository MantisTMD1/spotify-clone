import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { BsMusicNoteList, BsTrash } from 'react-icons/bs';
import { PLayList } from './Playlist.js';



const MenuPlaylist = () => {
    return <div className="playlist-container">
        <div className="name-container">
            <p>Playlist</p>
            <i>
                <FaPlus />

            </i>
        </div>
        <div className="playlist-scroll">
            {
                PLayList && PlayList.map((list) => {
                    
                })
            }
            <div className="playlist">

                <i className="music-list"><BsMusicNoteList />
                </i>
                <p>Sample Junk</p>

                <i className="trashcan">
                    <BsTrash />
                </i>
            </div>

        </div>
    </div>;
}

export default MenuPlaylist;
