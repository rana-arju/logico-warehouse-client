import React from 'react';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import { Button, Container, Form } from 'react-bootstrap';
import SocialMedia from './SocialMedia/SocialMedia';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import PageTitle from '../PageTitle/PageTitle';
const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
const [
  signInWithEmailAndPassword,
  user,
  loading,
  error,
] = useSignInWithEmailAndPassword(auth);
  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  if (user) {
      navigate(from, { replace: true }); 
  }

  const handleLogin = event => {
      event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signInWithEmailAndPassword(email,password);
      event.target.reset();
  }
return (
<Container className=" mx-auto p-4 my-10 border-2 border-red-500 rounded-xl box">
  <PageTitle title="Login" />
    <h2 className='mt-3 text-center'>Please Login</h2>
    <div className="my-10">
<Form onSubmit={handleLogin}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" />
        <Form.Text className="text-muted">
        We'll never share your email with anyone else.
        </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" />
    </Form.Group>
    <Form.Text id="passwordHelpBlock">
       <p  className='text-lg'> Are You New In this site?<Link to="/register"> Please Register</Link> </p>
  </Form.Text>
    <div className="d-grid gap-2 mt-3">
        <Button variant="primary" size="lg" type="submit">Login</Button>
    </div>
    <Form.Text id="passwordHelpBlock">
       <p className='text-lg'> Forgot Password?<Link to="/register"> Please Reset</Link> </p>
  </Form.Text>
</Form>
</div>
<SocialMedia />
</Container>
    );
};

export default Login;