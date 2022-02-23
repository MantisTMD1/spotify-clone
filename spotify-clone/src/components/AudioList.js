import React from 'react';
import { FaHeadphones, FaRegClock, FaHeart, FaRegHeart } from 'react-icons/fa';
import { Songs } from './Songs';

function AudioList() {
    return (
        <div className="audio-list">

            <h2 className="title-Queue"> Queue <span>{Songs.length} songs</span>
            </h2>
            <div className="playlist-container">
                {
                    Songs && Songs.map((song, index) => (
                        <div className="songs" key={song.id}>
                            <div className="song-number">{index+1}
                            </div>
                            <div className="song">
                                <div className="album-art">
                                    <img src="" alt="..." />


                                </div>

                                <div className="section">
                                    <p className="song-name">The boys are back in town
                                        <span className="artist-name">Jermy Worm</span>
                                    </p>

                                    <div className="plays">
                                        <p className="play">
                                            <i> <FaHeadphones /> </i>
                                            900,0000,0000
                                        </p>
                                        <p className="duration">
                                            <i><FaRegClock /></i>
                                            2.58s
                                        </p>
                                        <div className="liked">
                                            <i><FaHeart /></i> <i><FaRegHeart /></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    ))}


            </div>

        </div >
    )
}

export { AudioList };