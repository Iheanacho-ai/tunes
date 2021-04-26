import React from 'react';
import './music-div.styles.css';

const MusicDiv = ({playASong, playANewSong  }) => {
    return (
        <div className = 'music-div'>
           {
               playASong || playANewSong ? (
                   <div className = 'music-container'>
                   { playASong ? (<div className = 'music-image' style= {{ backgroundImage: `url(${playASong.track.album.images[0].url} )`}}></div>) : playANewSong ? (<div className = 'music-image' style= {{ backgroundImage: `url(${playANewSong.album.images[0].url} )`}}></div>) : null }
                        <div className = 'music-name'>
                            { 
                                playASong ? (<h3>{playASong.name}</h3>) 
                                : playANewSong ? (<h3>{playANewSong.name}</h3>) 
                                : null }
                            <p>
                                {
                                   playASong ? playASong.track.artists.map(item =>
                                        <span>{`${item.name }, `}</span>
                                    ) : playANewSong ? playANewSong.artists.map(item =>
                                        <span>{`${item.name }, `}</span>
                                    ) : null
                                }
                            </p>
                        </div>
                        <div className = 'music-audio' >
                            <audio controls src={playASong ? playASong.track.preview_url : playANewSong ? playANewSong.preview_url : null }></audio>
                        </div> 
                   </div>
                ) : null
           }
        </div>
    )
};

export default MusicDiv;    