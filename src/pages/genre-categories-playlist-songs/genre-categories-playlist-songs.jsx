import React from 'react';
import AsideBar from '../../component/aside-bar/aside-bar';
import ExploreHeader from '../../component/explore-header-div/explore-header-div';
import Spinner from '../../component/spinner/spinner';
import './genre-categories-playlist-songs.styles.css';

const GenreCategoriesPlaylistSongs = ({name, image}) => {
    console.log(name, image + 'props');
    return(
        <div className ='genre-categories-playlist-songs' >
            <div className = 'genre-categories-playlist-songs-aside-bar-div'>
                <AsideBar getDeezer />
            </div>
            
            <div className ='genre-categories-playlist-songs-side-bar' >
            {
                name ? (
                    <div className = 'genre-categories-playlist-songs-side-bar-div'>
                        <div className='genre-categories-playlist-songs-header'>
                            <div className='genre-categories-playlist-songs-header-container'>
                                <div className='genre-categories-playlist-songs-header-image' style= {{ backgroundImage: `url(${image})`}}></div>
                                <div className='genre-categories-playlist-songs-description'><h3>{name}</h3></div>
                            </div>
                        </div>
                        <div className= 'genre-categories-playlist-songs-songs'>
                            {/* <div className= 'genre-categories-playlist-songs-songs-container'>
                                {playlistSongs.map(track => (
                                    <div className = 'genre-categories-playlist-songs-song'></div>
                                ))}
                            </div> */}
                        </div>
    
                    </div>
                ) : <Spinner/>
            }
                
            </div>
        </div>
    );
    
}

export default GenreCategoriesPlaylistSongs;