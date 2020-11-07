import React from 'react';
import './Home.css';
import bannerImage from './images/bannerImg.jpg';
import Product from './Product'
import shoe1 from './images/0001.jpg';
import shoe2 from './images/0002.jpg';
import shoe3 from './images/0003.jpg';
import shoe4 from './images/0004.jpg';
import shoe5 from './images/0005.jpg';
import shoe6 from './images/0006.jpg';
import shoe7 from './images/0007.jpg';
import shoe8 from './images/0008.jpg';
import shoe9 from './images/0009.jpg';


function Home() {
    return (
        <div className="home">
            <img src={bannerImage} alt="BannerImage"  className="home__image"/>
            <div className="home__productGrid">
            <Product  id="0001" title="Black and White Nike SportsX"  price={11.96} rating={5} image={shoe1} />
            <Product  id="0002" title="Canva"  price={4.44} rating={4} image={shoe2} />
            <Product  id="0003" title="Red Nike StyleZ"  price={12.36} rating={5} image={shoe3} />
            <Product  id="0004" title="Crimso BatterN"  price={21.45} rating={3} image={shoe4} />
            <Product  id="0005" title="Paradigm SkyBlue D234"  price={101.36} rating={5} image={shoe5} />
            <Product  id="0006" title="Black and White Nike SportsX"  price={11.12} rating={4} image={shoe6} />
            <Product  id="0007" title="Black and White Nike SportsX"  price={43.23} rating={5} image={shoe7} />
            <Product  id="0008" title="Black and White Nike SportsX"  price={3.99} rating={5} image={shoe8} />
            <Product  id="0009" title="Black and White Nike SportsX"  price={6.99} rating={5} image={shoe9} />
            </div>
        </div>
    )
}

export default Home
