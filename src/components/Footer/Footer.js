import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  BsGithub,
  BsFacebook,
  BsLinkedin,
  BsInstagram,
  BsTwitter,
  BsFillTelephoneFill,
} from "react-icons/bs";
import { AiTwotoneHome, AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <div className=" border-t-2">
      <Container>
        <footer className="text-center text-lg-start  text-muted">
          {/* Section: Social media  */}
          <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            <div className="me-5 d-none d-lg-block">
              <span>Get connected with us on social networks:</span>
            </div>
            <div className="d-flex">
              <a
                href="https://www.facebook.com/ranaarju1"
                className="me-4 text-reset"
              >
                <BsFacebook />
              </a>
              <a href=".." className="me-4 text-reset">
                <BsTwitter />
              </a>
              <a href=".." className="me-4 text-reset">
                <BsInstagram />
              </a>
              <a href=".." className="me-4 text-reset">
                <BsLinkedin />
              </a>
              <a
                href="https://github.com/rana-arju"
                className="me-4 text-reset"
              >
                <BsGithub />
              </a>
            </div>
          </section>

          {/*  Section: Links  */}
          <section className="">
            <div className="text-center text-md-start mt-5">
              <div className="row mt-3">
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  <h4 className="text-uppercase fw-bold mb-4">Logiaca</h4>
                  <p>
                    we provide fast service and new smartphone from our
                    warehouse. genuine products. EMI facility.nationwide
                    delivery.
                  </p>
                </div>

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                  <p>
                    <a href="/" className="text-reset">
                      Realme
                    </a>
                  </p>
                  <p>
                    <a href="/" className="text-reset">
                      Radme
                    </a>
                  </p>
                  <p>
                    <a href="/" className="text-reset">
                      iphone
                    </a>
                  </p>
                  <p>
                    <a href="/" className="text-reset">
                      Samsung
                    </a>
                  </p>
                </div>

                {/* Grid column */}
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  {/* Links */}
                  <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                  <p>
                    <Link to="/myproduct" className="text-reset">
                      My Product
                    </Link>
                  </p>
                  <p>
                    <Link to="/manageInventory" className="text-reset">
                      Management
                    </Link>
                  </p>
                  <p>
                    <Link to="/addProduct" className="text-reset">
                      Add Product
                    </Link>
                  </p>
                  <p>
                    <Link to="/login" className="text-reset">
                      Login/Reg
                    </Link>
                  </p>
                </div>

                {/* Grid column */}
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  {/* Links */}
                  <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                  <p className="d-flex">
                    <AiTwotoneHome /> <span className="ms-2">Cox's Bazar</span>
                  </p>
                  <p className="d-flex">
                    <AiOutlineMail />{" "}
                    <span className="ms-2">Computer19-20@gmail.com</span>{" "}
                  </p>
                  <p className="d-flex">
                    <BsFillTelephoneFill />{" "}
                    <span className="ms-2">08801881220413</span>{" "}
                  </p>
                </div>
                {/* Grid column */}
              </div>
            </div>
          </section>
          {/* Section: Links  */}
        </footer>
      </Container>
      {/* Copyright */}
      <div
        className="text-center p-4 font-sans font-bold text-[20px] text-[#000000ee]"
        style={{ backgroundColor: "#BFC9CA", width: "100%" }}
      >
        &copy; 2022 Copyright: ComputerDeferment-Batch^19-20
      </div>
    </div>
  );
};

export default Footer;
