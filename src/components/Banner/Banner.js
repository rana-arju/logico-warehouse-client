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
                        <h1 className="mt-3 text-uppercase">we carry the <span className="color-title">latest equipment</span></h1>
                        <p className="lead text-secondary my-5 text-capitalize">we provide fast service and new smartphone from our warehouse. genuine products. EMI facility.nationwide delivery.</p>
                        <Link to="/contact" className="btn btn-outline-secondary btn-lg border">Contact Us</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;