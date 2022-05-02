import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import PageTitle from '../PageTitle/PageTitle';

const ContactUs = () => {
    const handleContactForm = event => {
        event.preventDefault();
    }
    return (

<Container className="my-10 border-2 border-red-500 rounded-xl box mx-auto p-4">
  <PageTitle title="Contact Us" />
<h2 className='mt-3 text-center'>Contact With Us</h2>
<div className="my-10">
<Form onSubmit={handleContactForm}>
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
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="text" name='address' placeholder="Phone Number" required />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Your Address</Form.Label>
        <Form.Control type="text" name='address' placeholder="Address" required />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Your Message</Form.Label>
         <Form.Control as="textarea" rows={6} placeholder="Message...."/>
        </Form.Group>

    <div className="d-grid gap-2 mt-3">
        <Button variant="primary" size="lg" type="submit" >Send Message</Button>
    </div>
</Form>
</div>

</Container>

    );
};

export default ContactUs;