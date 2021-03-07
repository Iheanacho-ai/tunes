import React, { useState } from 'react';
import { auth } from '../../firebase/firebase.utils';
import './explore-header-div.styles.css';


const ExploreHeader = () => {
    const [hidden, setHidden ] = useState(true);

    const toggleMenuNav = () => setHidden(!hidden );

    return(
        <div className = 'header-div' >
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
