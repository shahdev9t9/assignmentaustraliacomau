
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import frame from "../public/images/ExpertFrame.webp";
import Image from "next/image";
import Link from "next/link";

const ExpertFrame = () => {
  return (
    <>
      <section className="expert py-3 ">
        <Container fluid className="me-0 pe-0">
          <Row>
            <Col xl={6} className="d-xl-block d-none">
              <Image src={frame} alt="frame" />
            </Col>
            <Col xl={6}>
              <div className="content">
                <span>
                  It's Time To Find The Right Expert to Prepare Your Assignment!
                </span>
                <p className=" mb-4">
                  Our online assignment help has helped over 100,000 satisfied
                  students. Entrust your assignment to our skilled writers
                  waiting to take your paper to a whole new level help in
                  academic writing, there is only one place you can turn to When
                  you can’t find anyone to help you with your papers and other
                  academic assignments, do you feel the need to pay someone in
                  the AU to do your essays? That is not necessary. In addition
                  to offering services in the AU,
                </p>
                <Link href="" className="order-now bg-orange txt-white">
                  Order Now
                </Link>
              </div>
            </Col>
          </Row>
       
        </Container>
      </section>
    </>
  );
};

export default ExpertFrame;
