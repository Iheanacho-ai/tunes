import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Spinner from '../../component/spinner/spinner';
import ExploreHeader from '../../component/explore-header-div/explore-header-div';
import AsideBar from '../../component/aside-bar/aside-bar';
import MusicDiv from '../../component/music-div/music-div';
import './songs-display.styles.css';

const SongDisplay = ({songs, PlaySongs, searchMusic, playANewSong}) => {
    console.log(songs, 'songs')
    return(
        <div className = 'songs-display'>
            <div className = 'songs-display-asidebar' >
                <AsideBar />
            </div>
            <div className = 'songs-display-sidebar'>
                <ExploreHeader searchMusic = {searchMusic}/>
                
                <div className = 'songs-display-header'>
                    <p><a href="#tracks">Tracks</a></p>
                    <p><a href="#artistes">Artistes</a></p>
                </div>
                    {
                        songs ? (
                            <div className = 'songs-display-asidebar-container'>
            
                                <div className = 'songs-display-result'>
                                    <h3 id ='tracks' >Tracks</h3>
                                    {songs.tracks.map(track =>(
                                        <div className = 'song'>
                                            <div className='track-name' ><p>{track.name}</p></div>
                                            <div className= 'play-icon'  id= {track.id}>
                                                <FontAwesomeIcon icon="play-circle" id= {track.id}  onClick = {PlaySongs} />
                                            </div>
                                            <div className='track-artiste' ><p>{track.artists[0].name}</p></div>
                
                                        </div>
                                    ))}
                                
                                </div>
            
                                <div className= 'artiste-display-result'>
                                    <h3 id ='artistes'>Artistes</h3>
                                    {
                                        songs.artists ? (
                                            <div className= 'singers-container'>
                                                {
                                                    songs.artists.map(({name, followers, images}) => (
                                                        <div className= 'singers'>
                                                            <div className= 'singers-image' style= {{ backgroundImage: `url(${images[0].url})`}}></div>
                                                            <div>
                                                                <h3>{name}</h3>
                                                                <p>Followers: {followers.total}</p>
                                                            </div>
                                                        </div>
        
                                                    ))
                                                }
                                            </div>
                                        ): <Spinner/>
                                    }
            
                                </div>
            
                            </div>
                        )   : <Spinner/>
                    }

            </div>

            <MusicDiv playANewSong= {playANewSong} /> 

        </div>
    )
};

export default SongDisplay;