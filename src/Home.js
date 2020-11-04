import React from 'react';
import './Home.css';
import bannerImage from './images/bannerImg.jpg';

function Home() {
    return (
        <div className="home">
            <img src={bannerImage} alt="BannerImage"  className="home__image"/>
            <h1>This is home page</h1>
        </div>
    )
}

export default Home
