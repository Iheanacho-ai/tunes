import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import './aside-bar.styles.css';

const AsideBar = ({ getDeezer, searchInput, hc }) => {

    const [hidden, setHidden ] = useState(true);
    const [searchValue, setSearchValue ] = useState('');
    
    const toggleMenuNav = () => setHidden(!hidden );



    
    return(
        <div className = 'aside-bar'>
            <div className= 'toggle-nav' onClick = { toggleMenuNav } >
                <div className= {`${hidden ? null : 'cross-toggle-nav' } nav-toggle-bar`}>
                    <span className = 'bar-1' ></span>
                    <span className = 'bar-2'></span>
                    <span className = 'bar-3'></span>
                </div>
            </div>

            <div className= {`${hidden ? 'mobile-toggle' : null } mobile-side-bar`}>
                <h2>tunes</h2>
                    <div className = 'search-input-container'><input type="text" name="search" value = {searchValue} className = 'search-input' onChange = {setSearchValue(searchValue)}/></div>
                <div className = 'aside-bar-container'>
                
                    <div className = 'aside-bar-div' onClick = { getDeezer }  ><Link to ='/listen' >Listen </Link></div>
                    <div className = 'aside-bar-div'><Link>Favourite</Link></div>
                </div>
            </div>


        </div>
)};

export default AsideBar;