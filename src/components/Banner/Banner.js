import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';
const Banner = () => {
    return (
        <section className="hero-banner bg-light py-5">
            <div className="container">
                <div className="row row align-items-center">
                    <div className="col-lg-5 offset-lg-1 order-lg-1">
                        <img src="https://i.ibb.co/XbfqGDc/banner1.png" className="img-fluid" alt="logica banner" />
                    </div>
                    <div className="col-lg-6">
                        <h1 className="mt-3">Web Designing & Development</h1>
                        <p className="lead text-secondary my-5">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
                        <Link to="/contact" className="btn btn-outline-secondary btn-lg border">Contact Us</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;