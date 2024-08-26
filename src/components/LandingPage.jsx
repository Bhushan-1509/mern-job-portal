import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Carousel from './Carousel';


const LandingPage = () => {
    return (
        <>
            <Navbar stickiness=""/>
                <Carousel/>
            <Footer />
        </>
        );
}

                export default LandingPage;
