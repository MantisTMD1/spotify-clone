import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { BsMusicNoteList, BsTrash } from 'react-icons/bs';
import { Playlist } from './Playlist.js';

const MenuPlaylist = () => {
  return <div className="playlist-left-container">
    <div className="name-container">
      <p>Playlist</p>

      <i>
        <FaPlus />

      </i>
    </div>
    <div className="playlist-scroll">
      {Playlist &&
        Playlist.map((list) => (
          <div className="playlist" key={list.id}>


            <i className="music-list">
              <BsMusicNoteList />
            </i>
            <p>{list.name}</p>
            <i className="trashcan">
              <BsTrash />
            </i>
          </div>
        ))}
    </div>
  </div>
}

export default MenuPlaylist;
