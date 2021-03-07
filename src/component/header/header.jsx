import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ToggleMenu from '../toggle-menu/toggle-menu';
import './header.styles.css';



const Header = () => {
    const [hidden, setHidden ] = useState(true) 
    
    const toggleMenuNav = () => setHidden(!hidden );
    
 
    return(
        <div className = 'header'>
            <div className = 'header-container'>
                <div className = 'header-icon'>tunes</div>
                <div>
                    <button className = 'account-button'>
                        <Link to = 'signin' >Log in</Link>
                    </button>
    
                    <button className = 'inverted account-button'>
                        <Link to = 'signup' >Sign up</Link>
                    </button>
                </div>
    
                <div className= 'toggle-nav' onClick = { toggleMenuNav } >
                    <div className= {`${hidden ? null : 'cross-toggle-nav' } nav-toggle-bar`}>
                        <span className = 'bar-1' ></span>
                        <span className = 'bar-2'></span>
                        <span className = 'bar-3'></span>
                    </div>
                </div>
                { hidden ? null : <ToggleMenu/> }
                
            </div>
        </div>
    )

};

export default Header;