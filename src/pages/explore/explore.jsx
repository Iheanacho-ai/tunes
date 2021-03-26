import React from 'react';
import { Link } from 'react-router-dom';
import AsideBar from '../../component/aside-bar/aside-bar';
import ExploreHeader from '../../component/explore-header-div/explore-header-div';
import Spinner from '../../component/spinner/spinner';
import './explore.styles.css';


const Explore = (props) => {
    return(
    <div className ='explore' >
        <div className = 'explore-aside-bar-div'>
            <AsideBar searchMusic = {props.searchMusic} color = 'grey'/>
        </div>
        
        <div className ='explore-side-bar' >
            <ExploreHeader searchMusic = {props.searchMusic}/>
            <h2 className= 'explore-side-bar-header'>Listen to some of our carefully curated playlists </h2>
            <div className= 'explore-side-bar-container'>
                {
                    props.genreCategories ? (
                        
                        <div className = 'side-bar-div'>
                            
                            {
                                props.genreCategories.map(({id, name, icons }) => (
                                    <Link to = '/genre-playlist' > 
                                        <div className = 'side-bar' key ={id} >
                                            <div className ='genre-box'  id = {id} style= {{ backgroundImage: `url(${icons[0].url})`}} onClick= { props.getGenrePlaylist} >
                                                <p className= 'genre-p'>{name}</p>
                                            </div>
                                        </div>
                                    </Link >


                                ))
                            }
                        </div> 
                    ) : <Spinner/>
                }
            </div>
           

            
        </div>
        
    </div>
)};
    



export default Explore;