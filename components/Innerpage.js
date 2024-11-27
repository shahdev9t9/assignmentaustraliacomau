import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Innerpage = ({ InnerpageContent }) => {
  return (
    <>
      <section className="innerpage">
        <Container>
          <Row className="justify-content-center align-items-center text-center">
            <Col lg={7}>
              <h1 className="f64 fw-bold txt-green">{InnerpageContent.heading}</h1>
              <p className="f20">{InnerpageContent.para}</p>
              <div className="home-button mt-4  d-flex justify-content-center align-items-center gap-5">
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

export default Innerpage;
