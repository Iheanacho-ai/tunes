import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AsideBar from '../../component/aside-bar/aside-bar';
import ExploreHeader from '../../component/explore-header-div/explore-header-div';
import Spinner from '../../component/spinner/spinner';
import MusicDiv from '../../component/music-div/music-div';
import './genre-categories-playlist-songs.styles.css';

const GenreCategoriesPlaylistSongs = ({genreCategoriesPlaylistSongs, PlayMusic, playASong}) => {

    const [ info, setInfo ] = useState(null)

 
    return(
        <div className ='genre-categories-playlist-songs' >
            <div className = 'genre-categories-playlist-songs-aside-bar-div'>
                <AsideBar getDeezer />
            </div>
            
            <div className ='genre-categories-playlist-songs-side-bar' >
            {
                genreCategoriesPlaylistSongs ? (
                    <div className = 'genre-categories-playlist-songs-side-bar-div'>
                        <div className='genre-categories-playlist-songs-header'>
                            <div className='genre-categories-playlist-songs-header-container'>
                                <div className='genre-categories-playlist-songs-header-image' style= {{ backgroundImage: `url(${genreCategoriesPlaylistSongs.image})`}}></div>
                                <div className='genre-categories-playlist-songs-description'><h3>{genreCategoriesPlaylistSongs.name}</h3></div>
                            </div>
                        </div>

                        <div className= 'genre-categories-playlist-songs-box'>
                            {
                                genreCategoriesPlaylistSongs ? (
                                    <div className= 'genre-categories-playlist-songs-songs-container'>
                                        {genreCategoriesPlaylistSongs.items.map(({track}) => (
                                            <div>
                                                <div className = 'genre-categories-playlist-songs-song'>
                                                    <div className='track-name' ><p>{track.name}</p></div>
                                                    <div className= 'play-icon'  >
                                                        <FontAwesomeIcon icon="play-circle" id= {track.id}  onClick = {PlayMusic} />
                                                    </div>
                                                    <div className='track-artiste' ><p>{track.artists[0].name }</p></div>

                                                </div>

                                                <div className = 'mobile-songs-container' > 
                                                    <div className = 'mobile-songs-description'>
                                                        <h3>{track.name}</h3>
                                                        <div>{track.artists[0].name}</div>
                                                    </div>

                                                    <div className= 'play-icon'><FontAwesomeIcon icon="play-circle" id= {track.id}  onClick = {PlayMusic} /></div>

                                                </div>
                                            </div>
                                        ))}
                                    </div> 
                                ) : <Spinner />
                            }
                        </div>
    
                    </div>
                ) : <Spinner/>
            }
             
            </div>

             <MusicDiv playASong= {playASong} /> 
            

  

        </div>
    );
    
}

export default GenreCategoriesPlaylistSongs;