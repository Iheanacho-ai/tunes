import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import './aside-bar.styles.css';

const AsideBar = (props) => {
    console.log(props);



    const [searchValue, setSearchValue ] = useState('');
    

    const handleChange = e => {
        const { value } = e.target;

        setSearchValue(value);

    }




    
    return(
        <div className = 'aside-bar'>
           

            <div className='mobile-toggle' >
                <h2>tunes</h2>
                    <div className = 'search-input-container'><input type="text" name="search" placeholder = 'Search for songs, artistes' value ={searchValue} onChange = {handleChange} onKeyPress = {(e) => props.searchMusic(e, searchValue)} /></div>
                <div className = 'aside-bar-container'>
                
                    <div className = 'aside-bar-div' ><Link to ='/explore' >Explore </Link></div>
                    <div className = 'aside-bar-div'><Link>Favourite</Link></div>
                </div>
            </div>


        </div>
)};

export default AsideBar;