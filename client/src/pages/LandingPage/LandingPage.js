import React from 'react';

import './LandingPage.scss';
import image from '../../assets/adidas-yeezy-boost-350-white.png';
 
const LandingPage = () => (
    <section className="content-area home-page">
        <div className="top-section">
            <div className="product">
            <div className="circle">
                <img src={image} />
            </div> 
            </div>
            <div className="titles animated fadeInUp">
            <h3>Yeezy</h3>
            <h1>Boost 350</h1>
            </div>
        </div>
    </section>
);



export default LandingPage;