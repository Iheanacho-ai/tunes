import React, { useState } from 'react';
import { auth } from '../../firebase/firebase.utils';
import './explore-header-div.styles.css';


const ExploreHeader = (props) => {

    const [searchValue, setSearchValue ] = useState('');    
    const [hidden, setHidden ] = useState(true);

    const handleChange = e => {
        const { value } = e.target;

        setSearchValue(value);

    }

    const toggleMenuNav = () => setHidden(!hidden );

    return(
        <div className = 'header-div' >
            <input type="search" name="search" className="search-mobile-input" placeholder = 'Search for songs, artistes' value ={searchValue} onChange = {handleChange} onKeyPress = {(e) => props.searchMusic(e, searchValue)}/>
            <div className= 'user-image' onClick = { toggleMenuNav }></div>

            { 
                hidden ? null : 
                
                <div className = 'user-toggle-menu' >
                    <div onClick = {() => auth.signOut()}> Log Out </div>
                </div> 
            }
        </div>
    )

};

export default ExploreHeader;
