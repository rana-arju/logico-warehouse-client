import React from 'react';
import {Link} from 'react-router-dom';
import { Button, Container, Form } from 'react-bootstrap';
import SocialMedia from './SocialMedia/SocialMedia';
const Register = () => {
    return (
<Container className="my-10 border-2 border-red-500 rounded-xl w-50 mx-auto p-4">
    <h2 className='mt-3 text-center'>Please Register</h2>
<div className="my-10">
<Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Name" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
        We'll never share your email with anyone else.
        </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    <Form.Text id="passwordHelpBlock">
       <p  className='text-lg'> Already Have An Account?<Link to="/login"> Please Login</Link> </p>
  </Form.Text>
    <div className="d-grid gap-2 mt-3">
        <Button variant="primary" size="lg">Register</Button>
    </div>
</Form>

</div>
<SocialMedia />
</Container>
    );
};

export default Register;