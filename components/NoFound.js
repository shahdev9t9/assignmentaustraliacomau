import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const NoFound = () => {
  return (
    <>
      <section className="no-found py-3">
        <Container>
        <Row className="justify-content-center align-items-center text-center">
          <Col lg={7}>
            <h1 className="f64 fw-bold txt-green">
            404
            </h1>
            <p className="f20 mb-0">Page Not Found</p>
            <div className="home-button   d-flex justify-content-center align-items-center gap-5">
              <Link href="" className="order-now bg-orange txt-white">
                Order Now
              </Link>
              <Link href="" className="live-chat bg-green txt-white">
                Live Chat
              </Link>
            </div>
          </Col>
        </Row>
        </Container>
      </section>
    </>
  );
};

export default NoFound;
