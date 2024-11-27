"use client";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import aboutIcon from "../public/images/about.svg";
import blogIcon from "../public/images/blog.svg";
import homeIcon from "../public/images/home.svg";
import pricingIcon from "../public/images/pricing.svg";
import reviewsIcon from "../public/images/reviews.svg";
import serviceIcon from "../public/images/service.svg";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react"; // Added the missing imports


const Navigation = () => {
  const [scroll, setScroll] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup listener on unmount
    };
  }, []);

  return (
    <header className={`NavSec ${scroll ? "active" : ""}`}>
      <Navbar expand="lg" className="">
        <Container>
          <Navbar.Brand href="#home" className="f64 fw-bold">
            LOGO{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <Link href="/" className="nav-link">
                <div>
                  <Image src={homeIcon} alt="homeIcon" />
                </div>
                <span>Home</span>
              </Link>
              <Link href="about-us" className="nav-link">
                <div>
                  <Image src={aboutIcon} alt="aboutIcon" />
                </div>
                <span>About Us</span>
              </Link>
              <NavDropdown
                title={
                  <div className="d-flex align-items-center">
                    <Image src={serviceIcon} alt="serviceIcon" />
                    <span className="ms-2">Services</span>
                  </div>
                }
                id="basic-nav-dropdown"
              >
                <Link href="" className="dropdown-item">
                  Action
                </Link>
                <Link href="" className="dropdown-item">
                  Another action
                </Link>
              </NavDropdown>
              <Link href="pricing" className="nav-link">
                <div>
                  <Image src={pricingIcon} alt="pricingIcon" />
                </div>
                <span>Pricing</span>
              </Link>
              <Link href="reviews" className="nav-link">
                <div>
                  <Image src={reviewsIcon} alt="reviewsIcon" />
                </div>
                <span>Reviews</span>
              </Link>
              <Link href="blog" className="nav-link">
                <div>
                  <Image src={blogIcon} alt="blogIcon" />
                </div>
                <span>Blog</span>
              </Link>
            </Nav>
            <Link href="order-now" className="order-now bg-green txt-white">
              Order Now
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Navigation;
