import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Blog from '../Blog/Blog';
import Expertise from '../Expertise/Expertise';
import FeetnessCenter from '../FeetnessCenter/FeetnessCenter';
import Gallery from '../Gallery/Gallery';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeetnessCenter></FeetnessCenter>
            <About></About>
            <Gallery></Gallery>
            <Services></Services>
            <Expertise></Expertise>
            <Blog></Blog>
        </div>
    );
};

export default Home;