import React from 'react';
import Banner from '../Banner/Banner';
import PageTitle from '../PageTitle/PageTitle';
import Subscribe from '../Subscribe/Subscribe';
import Testimonial from '../Testimonial/Testimonial';
const Home = () => {
    return (
        <div>
            <PageTitle title ="Logico" />
            <Banner />
            <Testimonial />
            <Subscribe />
        </div>
    );
};

export default Home;