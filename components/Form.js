import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaLongArrowAltRight } from "react-icons/fa";


const Form = () => {
  return (
    <>
      <section className="form">
        <Container>
          <Row className="align-items-center mb-3">
            <Col lg={6}>
              <h2>Place your order</h2>
              <p className="f20 txt-white">
                Austrila Essay Service , where quality meets expectations! Get
                ready to achieve your desired grades with the best assignment
                help service provider
              </p>
            </Col>
            <Col lg={6}>
            <div className="d-flex gap-4 justify-content-between align-items-center">

              <div className="form_box">
                <label>Name</label>
                <input type="text" placeholder="Enter Your Name" />
              </div>
              <div className="form_box">
                <label>Email</label>
                <input type="email" placeholder="Enter Your Name" />
              </div>
            </div>
            </Col>
          </Row>
          <Row>
            <Col>
            <div className="d-flex gap-5 justify-content-between align-items-center">

              <div className="form_box">
                <label>Type of paper</label>
                 <select>
                    <option>Plaece selet Level</option>
                 </select>
              </div>
              <div className="form_box">
              <label>Deadline</label>
                 <select>
                    <option>Select Deadline</option>
                 </select>
              </div>
              <div className="form_box">
              <label>Pages / Words</label>
                 <select>
                    <option>Select Page No</option>
                 </select>
              </div>
              <div className="bg-transparent form_box">
                <div className="d-flex justify-content-between">
                    <p>
                    Total Price
                    </p>
                    <span>
                    AUD 20
                    </span>
                </div>
                <Link href="" className="submit">Submit  <FaLongArrowAltRight /> </Link>
              </div>
            </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Form;
