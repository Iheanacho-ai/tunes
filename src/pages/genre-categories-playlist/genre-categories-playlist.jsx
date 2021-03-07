import React from 'react';
import { Link } from 'react-router-dom';
import AsideBar from '../../component/aside-bar/aside-bar';
import ExploreHeader from '../../component/explore-header-div/explore-header-div';
import Spinner from '../../component/spinner/spinner';
import './genre-categories-playlist.styles.css';

const GenreCategoriesPlaylist = (props) => {
    console.log(props);
    return(
        <div className ='genre-categories-playlist' >
            <div className = 'genre-categories-playlist-aside-bar-div'>
                <AsideBar getDeezer />
            </div>

            <div className= 'genre-categories-playlist-side-bar'>
                <ExploreHeader/>
                

                <div className= 'genre-categories-playlist-side-bar-container'>
                   {
                      props.genreCategoriesPlaylist ? (
                        <div className ='genre-categories-side-bar' >
                            {
                                props.genreCategoriesPlaylist.map(({id, images, name }) => (
                                    <div className = 'side-bar' key ={id} >
                                        <Link to = '/genre-playlist/songs'>
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