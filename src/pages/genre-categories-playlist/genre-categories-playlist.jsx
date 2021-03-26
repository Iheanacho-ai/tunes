import React from 'react';
import { Link } from 'react-router-dom';
import AsideBar from '../../component/aside-bar/aside-bar';
import ExploreHeader from '../../component/explore-header-div/explore-header-div';
import Spinner from '../../component/spinner/spinner';
import './genre-categories-playlist.styles.css';

const GenreCategoriesPlaylist = (props) => {
    return(
        <div className ='genre-categories-playlist' >
            <div className = 'genre-categories-playlist-aside-bar-div'>
                <AsideBar searchMusic = {props.searchMusic} />
            </div>

            <div className= 'genre-categories-playlist-side-bar'>
                <ExploreHeader searchMusic = {props.searchMusic}/>
                

                <div className= 'genre-categories-playlist-side-bar-container'>
                   {
                      props.genreCategoriesPlaylist ? (
                        <div className ='genre-categories-side-bar' >
                            {
                                props.genreCategoriesPlaylist.map(({id, images, name }) => (
                                    <div className = 'playlist-side-bar' key ={id} >
                                        <Link to = '/genre-playlist/playlist'>
                                            <div className ={ `genre-box ${ name}`} id = {id} style= {{ backgroundImage: `url(${images[0].url})`}} onClick= {props.getGenrePlaylistSongs } ></div>
                                            
                                        </Link>
                                        
                                    </div>

                                ))
                            }
                                    
                        </div>
                           

                     ) : <Spinner/>
                    }
                </div>
                 
            </div>
            
        </div>
    );
    
}

export default GenreCategoriesPlaylist;