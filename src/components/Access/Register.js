import React from 'react';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import { Button, Container, Form } from 'react-bootstrap';
import SocialMedia from './SocialMedia/SocialMedia';
import {useCreateUserWithEmailAndPassword, useSendEmailVerification } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import {toast} from 'react-toastify';
const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
  const [sendEmailVerification] = useSendEmailVerification(auth);
  if (error) {
    return toast.error(error.message);
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  if (user) {
   navigate(from, { replace: true }); 
  }
const handleRegister = async(event) =>{
    event.preventDefault();
    // const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    if(password.length < 6){
       return toast.error('Please Enter At least 6 Character password');
    }else{
      await createUserWithEmailAndPassword(email, password);
      await sendEmailVerification();
      toast.success('Verification Email Send!');
      event.target.reset();
     

    }
 

}

return (
<Container className="my-10 border-2 border-red-500 rounded-xl box mx-auto p-4">
<h2 className='mt-3 text-center'>Please Register</h2>
<div className="my-10">
<Form onSubmit={handleRegister}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="text" name='name' placeholder="Enter Your Name" required />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" required />
        <Form.Text className="text-muted">
        We'll never share your email with anyone else.
        </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" required />
    </Form.Group>
    <Form.Text id="passwordHelpBlock">
       <p  className='text-lg'> Already Have An Account?<Link to="/login"> Please Login</Link> </p>
  </Form.Text>
    <div className="d-grid gap-2 mt-3">
        <Button variant="primary" size="lg" type="submit" >Register</Button>
    </div>
</Form>

</div>
<SocialMedia />

</Container>
    );
};

export default Register;