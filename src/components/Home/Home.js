import React from 'react';
import Slider from './Slider/Slider';
import Banner from './Banner/Banner';
import AboutUsMini from './AboutUsMini/AboutUsMini';
import Services from './Services/Services';
import OnlineService from './OnlineService/OnlineService';
import Spesialists from './Spesialists/Spesialists';

const Home = () => {
    return (
        <>
            <Slider></Slider>
            <Banner></Banner>
            <Services></Services>
            <AboutUsMini></AboutUsMini>
            <OnlineService></OnlineService>
            <Spesialists></Spesialists>
        </>
    );
};

export default Home;