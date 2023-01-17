import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import PageTitle from "../PageTitle/PageTitle";
import { loginAction } from "../../redux/actions/authAction";
const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const dispatch = useDispatch();
  const onSubmit = (data) => {
    dispatch(loginAction(data), navigate, from);
    reset()
  };

  return (
    <Container className=" mx-auto p-4 my-10 border-2 border-red-500 rounded-xl box">
      <PageTitle title="Login" />

      <h2 className="mt-3 text-center">Please Login</h2>
      <div className="my-10">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
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
              Are You New In this site?
              <Link to="/register"> Please Register</Link>{" "}
            </p>
          </Form.Text>
          <div className="d-grid gap-2 mt-3">
            <Button variant="primary" size="lg" type="submit">
              Login
            </Button>
          </div>
          <Form.Text id="passwordHelpBlock">
            <p className="text-lg">
              Forgot Password?
              <Button variant="link"> Please Reset</Button>{" "}
            </p>
          </Form.Text>
        </Form>
      </div>
    </Container>
  );
};

export default Login;
