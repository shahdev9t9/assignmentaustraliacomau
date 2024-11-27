import Image from "next/image";
import React from "react";
import homeright from "../public/images/HomeRight.webp";
import batches from "../public/images/batches.webp";

import { Col, Container, Row } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";
import Link from "next/link";

const Home = ({ HomeContent }) => {
  return (
    <>
      <section className="home py-0">
        <Container>
          <Row className="align-items-end">
            <Col lg={7}>
              <h1 className="f64 fw-bold">
                {HomeContent.heading}
         
              </h1>
              <p className="f22">
                {HomeContent.para}
            
              </p>

              <ul>
              {HomeContent.list.map((item, index) => (
                  <li key={index}>
                    <FaCheck />
                    <span>{item.feature}</span>
                  </li>
                ))}
              </ul>
              <div className="home-button  d-flex gap-5">
                <Link href="" className="order-now bg-orange txt-white">
                  Order Now
                </Link>
                <Link href="" className="live-chat bg-green txt-white">
                  Live Chat
                </Link>
              </div>
              <Image
                src={batches}
                alt="batches"
                className="uni-batches my-xxl-5 my-4"
              />
            </Col>
            <Col lg={5}>
              <Image
                src={HomeContent.homeright}
                alt="homeright"
                className="home-right"
                style={{
                  width: HomeContent.homeright.width, // Dynamic width
                  height: HomeContent.homeright.height || "auto", // Optional height
                  right: HomeContent.homeright.right, // Dynamic right
                  position: "relative", // Static position
                }}
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
