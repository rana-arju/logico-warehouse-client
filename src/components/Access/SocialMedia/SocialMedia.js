import React from 'react';
import { Button } from 'react-bootstrap';
import { FcGoogle } from 'react-icons/fc';
import './SocialMedia.css';
const SocialMedia = () => {
    return (
        <div>
        <div  className='social-login mx-auto'>
            <div></div>
            <p>OR</p>
            <div></div>
        </div>
        
        <div className="d-grid gap-2 mt-3">
            <Button variant="primary" className="d-flex justify-center items-center gap-2 g-btn"><FcGoogle />Google</Button>
        </div>
        </div>
    );
};

export default SocialMedia;