import React from 'react';

import './pricing-item.styles.css';

const PricingItem = ({price, color}) => (
    <div className= {`${ color } pricing-item`} >
        <div className = 'pricing-item-info' >
            <h3>Tunes Free</h3>
            <h3>${price}</h3>
            <span>/month</span>
        </div>

        <ul className = 'pricing-item-pro'>
            <li>32 million tracks</li>
            <li>Shuffle Play</li>
            <li>No ads</li>
            <li>Get unlimited skips</li>
            <li>Offline mode</li>
        </ul>

        <div className = 'pricing-item-footer'>
            <button className = 'pricing-item-button'>Sign In</button>
            <a href="www.google.com" className = 'pricing-item-a'>More Info</a>
        </div>

        
        
    </div>
);

export default PricingItem;
