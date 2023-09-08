import React from "react";
import { Link, useLocation, useNavigate} from "react-router-dom";
import { Button, Container, Form } from "react-bootstrap";
import "./style.css"
import PageTitle from "../PageTitle/PageTitle";

import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { registrationAction } from "../../redux/actions/authAction";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
    navigate(from, { replace: true });

  const {
    register,
    handleSubmit,

    reset,
    formState: { errors },
  } = useForm();


  const onSubmit = (data) => {
    dispatch(registrationAction(data, navigate, from));
    reset();
  };

  return (
    <Container className="my-10 border-2 border-red-500 rounded-xl box mx-auto p-4">
      <PageTitle title="Registation" />
      <h2 className="mt-3 text-center">Please Register</h2>
      <div className="my-10">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="firstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter first name"
              {...register("first_name", { required: true })}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="LastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter last name"
              {...register("last_name", { required: true })}
            />
            {errors.last_name && <span>This field is required</span>}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Please enter a valid email",
                },
              })}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              {...register("password", { required: true })}
            />
          </Form.Group>
          <Form.Text id="passwordHelpBlock">
            <p className="text-lg">
              Already Have An Account?<Link to="/login"> Please Login</Link>{" "}
            </p>
          </Form.Text>
          <div className="d-grid gap-2 mt-3">
            <Button variant="primary" size="lg" type="submit">
              Register
            </Button>
          </div>
        </Form>
      </div>
    </Container>
  );
};

export default Register;
