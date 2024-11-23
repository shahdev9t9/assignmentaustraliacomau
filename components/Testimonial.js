"use client";
import React from "react";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import { Col, Container, Row } from "react-bootstrap";
import testiProfile from "../public/images/testiProfile.webp";
import emily from "../public/images/emily.webp";

import Image from "next/image";

const Testimonial = () => {
  return (
    <>
      <section className="testimonial">
        <Container>
          <Row className="align-items-center justify-content-center text-center mb-5">
            <Col lg={11}>
              <h3 className="f64 fw-bold">
                Make The Most From Our Writer Of Assignment Writing Services
              </h3>
            </Col>
          </Row>
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
              <Col lg={12}>
                <Nav variant="pills" className="gap-4">
                  <Nav.Item>
                    <Nav.Link eventKey="first">
                      <Image src={testiProfile} alt="testiProfile" />
                      <div>
                        <span>Emily Thomas</span>
                        <p>Essay Writer</p>
                      </div>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">
                      <Image src={testiProfile} alt="testiProfile" />
                      <div>
                        <span>Emily Thomas</span>
                        <p>Essay Writer</p>
                      </div>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">
                      <Image src={testiProfile} alt="testiProfile" />
                      <div>
                        <span>Emily Thomas</span>
                        <p>Essay Writer</p>
                      </div>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="four">
                      <Image src={testiProfile} alt="testiProfile" />
                      <div>
                        <span>Emily Thomas</span>
                        <p>Essay Writer</p>
                      </div>
                    </Nav.Link>
                  </Nav.Item>
                  
                </Nav>
              </Col>
              <Col xl={10} lg={12}>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <div>

                    <Image src={emily} alt="emily" />
                    <div>
                        <p>
                        When you can’t find anyone to help you with your papers and other academic assignments, do you feel the need to pay someone in the AU to do your essays? That is not necessary. In addition to offering services in the AU, we also assist students from different countries of the word. The essay writers we hire are among the best in the industry. Many of our writers are graduate of prestigious universities around the world. If you have question and need the best help in academic writing, there is only one place you can turn to When you can’t find anyone to help you with your papers and other academic assignments, do you feel the need to pay someone in the AU to do your essays? That is not necessary. In addition to offering services in the AU, 
                        </p>
                        <p className="guaranted">
                        100% Turnitin Pass Guaranted!
                        </p>
                        <ul className="d-flex justify-content-between align-items-center">
                            <li>
                                <span>Average Experience</span>
                                <p>
                                7+Years
                                </p>
                            </li>
                            <li>
                                <span>Level Writer</span>
                                <p>
                                Graduate
                                </p>
                            </li>
                            <li>
                                <span>Project Delivered</span>
                                <p>
                                8000+
                                </p>
                            </li>
                        </ul>
                    </div>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">Second tab content</Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      </section>
    </>
  );
};

export default Testimonial;
