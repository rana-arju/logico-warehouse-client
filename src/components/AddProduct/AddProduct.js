import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import PageTitle from "../PageTitle/PageTitle";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
const AddProduct = () => {
  const [user] = useAuthState(auth);
  const handleContactForm = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = user.email;
    const sellar = event.target.sellar.value;
    const price = event.target.price.value;
    const stock = event.target.stock.value;
    const images = event.target.url.value;
    const description = event.target.description.value;
    const product = { name, email, description, price, stock, images, sellar };
    // send data to the server
    fetch(`https://logico-server.onrender.com/allproducts`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.success) {
          toast.error(data.error);
        }
        toast.success(data.message);
      });
    event.target.reset();
  };
  return (
    <Container className="my-10 border-2 border-red-500 rounded-xl box mx-auto p-4">
      <PageTitle title="Add Product" />
      <h2 className="mt-3 text-center">Add New Product</h2>
      <div className="my-10">
        <Form onSubmit={handleContactForm}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Product Name"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Sellar Name</Form.Label>
            <Form.Control
              type="text"
              name="sellar"
              placeholder="Sellar Name"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Sellar Email</Form.Label>
            <Form.Control type="text" value={""} disabled required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="text"
              name="price"
              placeholder="Product Price"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Product Stock</Form.Label>
            <Form.Control
              type="number"
              name="stock"
              placeholder="Product Stock"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Image URL</Form.Label>
            <Form.Control
              type="url"
              name="url"
              placeholder="Enter Image URL"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              name="description"
              rows={6}
              placeholder="Write Product Description.."
            />
          </Form.Group>

          <div className="d-grid gap-2 mt-3">
            <Button variant="primary" size="lg" type="submit">
              Add New Item
            </Button>
          </div>
        </Form>
      </div>
    </Container>
  );
};

export default AddProduct;
