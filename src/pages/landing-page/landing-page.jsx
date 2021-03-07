import React from 'react';
import Header from '../../component/header/header';
import Pricing from '../../component/pricing/pricing';
import './landing-page.styles.css';

const LandingPage = () => (
    <div className = 'landing-page'>
        <Header/>
       <div className = 'landing-page-container' >
            <div className = 'landing-page-info'>
                Listen to millions of songs on the go!
                <button className = 'landing-page-button'>Sign up for free</button>
            </div>
        </div>
        <Pricing/>


    </div>
);


export default LandingPage;