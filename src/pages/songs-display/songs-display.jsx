import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Spinner from '../../component/spinner/spinner';
import ExploreHeader from '../../component/explore-header-div/explore-header-div';
import AsideBar from '../../component/aside-bar/aside-bar';
import './songs-display.styles.css';

const SongDisplay = ({songs, PlayMusic, searchMusic}) => {
    console.log(songs)
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
                                    <div className = 'song'>
                                        <div className='track-name' ><p>name</p></div>
                                        <div className= 'play-icon'  >
                                            <FontAwesomeIcon icon="play-circle" id= 'id'  onClick = {PlayMusic} />
                                        </div>
                                        <div className='track-artiste' ><p>name</p></div>
            
                                    </div>
                                
                                </div>
            
                                <div className= 'artiste-display-result'>
                                    <h3 id ='artistes'>Artistes</h3>
                                    <div className= 'singers-container'>
                                        <div className= 'singers'>
                                            <div className= 'singers-image'></div>
                                            <div></div>
                                        </div>
                                        <div className= 'singers'>
                                            <div className= 'singers-image'></div>
                                            <div></div>
                                        </div>
                                    </div>
            
                                </div>
            
                            </div>
                        )   : <Spinner/>
                    }

            </div>
        </div>
    )
};

export default SongDisplay;