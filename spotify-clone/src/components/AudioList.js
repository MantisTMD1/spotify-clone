import React, { useState } from 'react';
import { FaHeadphones, FaRegClock, FaHeart, FaRegHeart } from 'react-icons/fa';
import { Songs } from './Songs';

const AudioList = () => {
    const [song, setSong] = useState(Songs[0].song);
    const [img, setImage] = useState(Songs[0].imgSrc);

    const changeLike = (id) => {
        Songs.forEach((song) => {
            if (song.id === id) {
                song.favorite = !song.favorite;
            }
        });
    }

    return (
        <div className="audio-list">

            <h2 className="title-Queue"> Queue <span>{Songs.length} songs</span>
            </h2>
            <div className="playlist-container">
                {
                    Songs && Songs.map((song, index) => (
                        <div className="songs" key={song.id}>
                            <div className="song-number">{index + 1}
                            </div>
                            <div className="song">
                                <div className="album-art">
                                    <img src={song?.imgSrc} alt="..." />


                                </div>

                                <div className="section">
                                    <p className="song-name">{song?.songName}
                                        <span className="artist-name">{song?.artist}</span>
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
                                        <div className="liked"
                                            onClick={() => changeLike(song?.id)}
                                        >

                                            {song?.favorite ? (
                                                <i><FaHeart />
                                                </i>
                                            ) :
                                                (<i><FaRegHeart />
                                                </i>
                                                )}





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