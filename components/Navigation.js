"use client";
import React from "react";
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

const Navigation = () => {
  return (
    <>
      <header>
        <Navbar expand="lg" className="bg-body-tertiary">
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
                    <Image src={aboutIcon} alt="homeIcon" />
                  </div>
                  <span>About Us</span>
                </Link>
                <NavDropdown
                  title={
                    <p>
                    <div>

                        <Image
                          src={serviceIcon}
                          alt="serviceIcon"
                   
                
                        />
                    </div>
                      Services
                    </p>
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
                <Link href="about-us" className="nav-link">
                  <div>
                    <Image src={pricingIcon} alt="homeIcon" />
                  </div>
                  <span>Pricing</span>
                </Link>
                <Link href="about-us" className="nav-link">
                  <div>
                    <Image src={reviewsIcon} alt="homeIcon" />
                  </div>
                  <span>Reviewa</span>
                </Link>
                <Link href="about-us" className="nav-link">
                  <div>
                    <Image src={blogIcon} alt="homeIcon" />
                  </div>
                  <span>Blog</span>
                </Link>
              </Nav>
              <Link href="order-now " className="order-now bg-green txt-white">Order Now</Link>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default Navigation;
