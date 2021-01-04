import React from 'react';
import { Link } from 'react-router-dom';
import './toggle-menu.styles.css';

const ToggleMenu = () => (
    <div className= 'toggle-menu'> 
        <Link to= '/signin'>
            <div> Log in</div>
        </Link>
        <Link to= '/signup'>
            <div> Sign up</div>
        </Link> 
        
    </div>
);

export default ToggleMenu;
