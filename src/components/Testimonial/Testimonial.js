import React from 'react';
import "./Testimonial.css";
const Testimonial = () => {
    return (
<div className=' testimonial-section py-5'>
    <h2 className='text-center mb-5 text-primary uppercase' >Our Client Review</h2>
<div className="container">
    <div className="row g-2">
        <div className="col-md-4">
            <div className="card p-3 text-center px-4">
        <div className="user-image">
            <img src="https://i.imgur.com/PKHvlRS.jpg" className="rounded-circle" width="80" alt='..' />
        </div>
        <div className="user-content">
            <h5 className="mb-0">Md. Shariot</h5>
            <p>Received in due time and in good condition. hope service will be good. it is an official phone.</p>       
        </div>
    </div>
    </div>
    <div className="col-md-4">
            <div className="card p-3 text-center px-4">
                
                <div className="user-image">
                    
                <img src="https://i.imgur.com/w2CKRB9.jpg" className="rounded-circle" width="80" alt='..' />
                </div>
                <div className="user-content">
                    
                    <h5 className="mb-0">Md. Rana Arju</h5>
                    <p >Fast Delivary and Genuine Products. Thanks For Your Service. </p>
                    
                </div>
                
            </div>
            
        </div>
        
        <div className="col-md-4">
            
            <div className="card p-3 text-center px-4">
                
                <div className="user-image">
                    
            <img src="https://i.imgur.com/ACeArwY.jpg" className="rounded-circle" width="80" alt='..' />
                </div>
                <div className="user-content">
                    <h5 className="mb-0">Rajaul Karim</h5>
                    <p>Giving review after using it 7 days. and it's awesome. proper authentic phone ❤ Loving it. Highly recommended ❤</p>
                </div>
            </div> 
        </div>
    </div>
</div>
</div>
    );
};

export default Testimonial;