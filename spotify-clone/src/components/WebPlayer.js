import React from 'react';
import { BsFillVolumeUpFill, BsMusicNoteList, BsFillVolumeMuteFill } from 'react-icons/bs';
import { FaDesktop } from 'react-icons/fa';
import TrackImage from '../images/disc-img.png';

const WebPlayer = () => {
  return (

    <div className="webplayer">
      <div className="top">
        <img src={TrackImage} alt="img..." />
        <p className = "track-title">Sample Song<span className= "artist-name">artist name</span>
        </p>
      </div>
      <div className="bottom">
        <i><BsFillVolumeUpFill /></i>
        {/* need to create on click event here to mute volume in app */}
        <i><BsFillVolumeMuteFill /></i>
        <input type="range" />
        <i><BsMusicNoteList /></i>
        <i><FaDesktop /></i>
      </div>

    </div>
  );
}

export default WebPlayer;
