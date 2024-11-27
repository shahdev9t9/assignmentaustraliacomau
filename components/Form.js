import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaLongArrowAltRight } from "react-icons/fa";


const Form = ({FormContent}) => {
  return (
    <>
      <section className="form">
        <Container>
          <Row className="align-items-center mb-lg-3">
            <Col lg={6}>
              <h2>
                {FormContent.heading}
              </h2>
              <p className="f20 txt-white">
              {FormContent.para}

        
              </p>
            </Col>
            <Col lg={6}>
            <div className="d-lg-flex gap-4 justify-content-between align-items-center">

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
            <div className="d-lg-flex gap-xl-5 gap-3 justify-content-between align-items-center">

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
                <div className="d-flex align-items-center justify-content-between">
                    <p className="m-0">
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
