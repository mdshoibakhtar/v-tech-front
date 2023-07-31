import { Link } from "react-router-dom";
import { HiOutlineBars3 } from "react-icons/hi2";

import { BsSearch } from "react-icons/bs";
import { Offcanvas } from "react-bootstrap";
import { useState } from "react";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import TopHeader from "./topHeader/TopHeader";
import logo from "../../../assets/img/main-logo/newlogo4.png";
import "./Header.css";
function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [modal, setModal] = useState(false);

  const modalClose = () => setModal(false);
  const modalShow = () => setModal(true);
  return (
    <>
      <header className="navbar-header">
        <div className="header__area" id="header-sticky">
          <div className="container">
            <div className="row navbar-row">
              <div className=" col-lg-3 col-md-3 col-9">
                <div className="logo" style={{ textAlign: "initial" }}>
                  <Link to="home">
                    <img src={logo} alt="logo" className="newLogo" />
                  </Link>
                </div>
              </div>
              <div className=" col-lg-9 col-md-  navbar-item-list">
                <div className="main-menu main-menu-second">
                  <nav id="mobile-menu" style={{ display: "block" }}>
                    <ul className="header-item">
                      <li>
                        <Link to="home" className="nav-item">
                          Home
                        </Link>
                      </li>

                      <li>
                        <Link to="about-us" className="nav-item">
                          About Us
                        </Link>
                      </li>

                      <li className="rental-dropdown-item">
                        <Link to="#" className="nav-item">
                          Rental
                        </Link>

                        <div className="rental-dropdown">
                          <ul className="rental-dropdown-list">
                            <li>
                              <Link
                                to="rental-services"
                                className="list-rental"
                              >
                                Why Rental
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="rental-products"
                                className="list-rental"
                              >
                                Rental Product
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="https://customer.vtechsolutions.co.in/loginPage"
                                target="_blank" className="list-rental"
                              // onClick={modalShow}
                              >
                                Customer Login
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </li>

                      <li>
                        <Link to="our-product" className="nav-item">
                          Our Products
                        </Link>
                      </li>

                      <li>
                        <Link to="contact-us" className="nav-item">
                          Contact{" "}
                        </Link>
                      </li>

                      <li>
                        <a href="#">
                          <BsSearch style={{ fontSize: "20px" }} />{" "}
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>

              <div className="col-md-9  col-3 fabar">
                <div className="fabar-container">
                  <HiOutlineBars3 className="fabar-icon" onClick={handleShow} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <Offcanvas
        show={show}
        onHide={handleClose}
        className="offcanvas-main-container"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
          <ul className="aside-nav-list">
            <li>
              <Link to="home" className="nav-aside-list">
                Home
              </Link>
            </li>
            <li>
              <Link to="About Us" className="nav-aside-list">
                About Us
              </Link>
            </li>
            <li>
              <Link to="rental-services" className="nav-aside-list">
                Why Rental
              </Link>
            </li>
            <li>
              <Link to="our-product" className="nav-aside-list">
                Our Products
              </Link>
            </li>
            <li>
              <Link to="contact-us" className="nav-aside-list">
                Contact
              </Link>
            </li>

            <li>
              <Link to="#" className="list-rental" onClick={modalShow}>
                Customer Login
              </Link>
            </li>
          </ul>
        </Offcanvas.Body>

        <div className="footer-top-header">
          <TopHeader />
        </div>
      </Offcanvas>

      <Modal show={modal} onHide={modalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <InputGroup className="mb-3">
            <label htmlFor="">Email Address</label>
            <Form.Control placeholder="daua@gmail.com" aria-label="Username" />
          </InputGroup> */}

          <div className="form-group mb-3">
            <label htmlFor="lang" className="mb-1">
              <strong>Email Address</strong>
            </label>
            <input
              className="form-control"
              placeholder="daud@gmail.com"
              type="text"
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="lang" className="mb-1">
              <strong>Password</strong>
            </label>
            <input
              className="form-control"
              placeholder="Password"
              type="password"
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={modalClose}>
            Close
          </Button>
          <Button variant="primary" onClick={modalClose}>
            login
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default Header;
