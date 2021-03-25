import React from 'react';
import './music-div.styles.css';

const MusicDiv = ({playASong}) => {
    return (
        <div className = 'music-div'>
           {
               playASong ? (
                   <div className = 'music-container'>
                        <div className = 'music-image' style= {{ backgroundImage: `url(${playASong.track.album.images[0].url})`}}></div>
                        <div className = 'music-name'>
                            <h3>{playASong.track.name}</h3>
                            <p>
                                {
                                    playASong.track.artists.map(item =>
                                        <span>{`${item.name }, `}</span>
                                    )
                                }
                            </p>
                        </div>
                        <div className = 'music-audio' >
                            <audio controls src={playASong.track.preview_url}></audio>
                        </div> 
                   </div>
                ) : null
           }
        </div>
    )
};

export default MusicDiv;    