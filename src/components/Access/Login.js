import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button, Container, Form } from "react-bootstrap";
import SocialMedia from "./SocialMedia/SocialMedia";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import PageTitle from "../PageTitle/PageTitle";
import { toast } from "react-toastify";
import Loading from "../loading/Loading";
import axios from "axios";
const Login = () => {
  const [email, setEmail] = useState();
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [sendPasswordResetEmail, sending, reError] =
    useSendPasswordResetEmail(auth);
  const handleEmail = (event) => {
    const email = event.target.value;
    setEmail(email);
  };
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  let errorReport;
  if (error || reError) {
    errorReport = <p className="text-danger font-bold">{error.message}</p>;
  }
  if (loading || sending) {
    return <Loading />;
  }
  if (user) {
    navigate(from, { replace: true });
    toast.success(`Thank You For joining us!`);
  }

  const handleLogin = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    await signInWithEmailAndPassword(email, password);
    const { data } = await axios.post(
      "https://logico-server.onrender.com/login",
      { email }
    );
    localStorage.setItem("accessToken", data.accessToken);
    event.target.reset();
  };
  const resetPassword = async () => {
    if (email) {
      await sendPasswordResetEmail(email);
      toast.success("Check Your Email");
    } else {
      toast.error("Please, Enter Email");
    }
  };
  return (
    <Container className=" mx-auto p-4 my-10 border-2 border-red-500 rounded-xl box">
      <PageTitle title="Login" />
      {errorReport}
      <h2 className="mt-3 text-center">Please Login</h2>
      <div className="my-10">
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              onBlur={handleEmail}
              placeholder="Enter email"
              required
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          <Form.Text id="passwordHelpBlock">
            <p className="text-lg">
              {" "}
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
              {" "}
              Forgot Password?
              <Button variant="link" onClick={resetPassword}>
                {" "}
                Please Reset
              </Button>{" "}
            </p>
          </Form.Text>
        </Form>
      </div>
      <SocialMedia />
    </Container>
  );
};

export default Login;
