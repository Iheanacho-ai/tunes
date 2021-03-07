import React from 'react';
import { Link } from 'react-router-dom';
import './aside-bar.styles.css';

const AsideBar = ({ getDeezer, searchInput, hc }) => (
    <div className = 'aside-bar'>
        <h2>tunes</h2>
            <div className = 'search-input-container'><input type="text" name="search" value = {searchInput} className = 'search-input' onChange = {hc}/></div>
        <div className = 'aside-bar-container'>
         
            <div className = 'aside-bar-div' onClick = { getDeezer }  ><Link to ='/listen' >Listen </Link></div>
            <div className = 'aside-bar-div'><Link>Favourite</Link></div>
        </div>

    </div>
);

export default AsideBar;