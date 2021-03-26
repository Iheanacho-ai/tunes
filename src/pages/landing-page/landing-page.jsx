import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../component/header/header';
import Pricing from '../../component/pricing/pricing';
import './landing-page.styles.css';

const LandingPage = () => (
    <div className = 'landing-page'>
        <Header/>
       <div className = 'landing-page-container'style= {{ backgroundImage: `url(https://res.cloudinary.com/amarachi-2812/image/upload/v1616715897/clay-banks-fEVaiLwWvlU-unsplash_pjyjgv.jpg)`}} >
            <div className = 'landing-page-info'  >
                Listen to millions of songs on the go!
                <button className = 'landing-page-button'><Link to = '/signup' >Sign up for free</Link></button>
            </div>
        </div>
        <Pricing/>


    </div>
);


export default LandingPage;