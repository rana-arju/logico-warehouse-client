import React from 'react';
import { Button } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { FcGoogle } from 'react-icons/fc';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../loading/Loading';
import './SocialMedia.css';
const SocialMedia = () => {
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  if (error) {
      toast.error(error.message)

  }
  if (loading) {
    return <Loading />;
  }
  if (user) {
    navigate(from, { replace: true }); 
    console.log(user);   toast.success(`Thank You For joining us!`)
  }
    return (
        <div>
        <div  className='social-login mx-auto'>
            <div></div>
            <p>OR</p>
            <div></div>
        </div>
        
        <div className="d-grid gap-2 mt-3">
            <Button variant="primary" className="d-flex justify-center items-center gap-2 g-btn" onClick={() => signInWithGoogle()}><FcGoogle />Google</Button>
        </div>
        </div>
    );
};
export default SocialMedia;