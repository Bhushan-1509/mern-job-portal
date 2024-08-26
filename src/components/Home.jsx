import React from 'react';
import Navbar from './Navbar';
import Content from './Content';
import Footer from './Footer';

const Home = () => {
    return (
        <>
            <Navbar stickiness="sticky"/>
                <Content/>
            <Footer/>
        </>
    );
}

export default Home;
