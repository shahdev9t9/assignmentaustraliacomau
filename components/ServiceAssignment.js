import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import personlized from "../public/images/personalized.svg";
import guaranteed from "../public/images/guaranteed.svg";
import subject from "../public/images/subject.svg";
import teamMember from "../public/images/teamMember.webp";

import Image from "next/image";

const ServiceAssignment = () => {
  return (
    <>
      <section className="service-assignment">
        <Container>
          <Row className="justify-content-center align-items-center text-center mb-5">
            <Col lg={9}>
              <h2 className="f64 fw-bold ">
                Why students order last minute assistance with assignments from
                usa
              </h2>
            </Col>
          </Row>
          <Row>
            <Col lg={4}>
              <ul>
                <li>
                  <Image src={personlized} alt="personlized" />
                  <div>
                    <p>Personalized Assistance</p>
                    <span>
                      We provide professional dissertation help in the UK. We
                      provide our clients with original, high-quality work at an
                      accessible price for dissertation help.{" "}
                    </span>
                  </div>
                </li>
                <li>
                  <Image src={guaranteed} alt="guaranteed" />
                  <div>
                    <p>Personalized Assistance</p>
                    <span>
                      We provide professional dissertation help in the UK. We
                      provide our clients with original, high-quality work at an
                      accessible price for dissertation help.{" "}
                    </span>
                  </div>
                </li>
                <li>
                  <Image src={subject} alt="subject" />
                  <div>
                    <p>Personalized Assistance</p>
                    <span>
                      We provide professional dissertation help in the UK. We
                      provide our clients with original, high-quality work at an
                      accessible price for dissertation help.{" "}
                    </span>
                  </div>
                </li>
              </ul>
            </Col>
            <Col lg={4}>
              <Image src={teamMember} alt="teamMember" />
            </Col>
            <Col lg={4}>
              <ul>
                <li>
                  <Image src={personlized} alt="personlized" />
                  <div>
                    <p>Personalized Assistance</p>
                    <span>
                      We provide professional dissertation help in the UK. We
                      provide our clients with original, high-quality work at an
                      accessible price for dissertation help.{" "}
                    </span>
                  </div>
                </li>
                <li>
                  <Image src={guaranteed} alt="guaranteed" />
                  <div>
                    <p>Personalized Assistance</p>
                    <span>
                      We provide professional dissertation help in the UK. We
                      provide our clients with original, high-quality work at an
                      accessible price for dissertation help.{" "}
                    </span>
                  </div>
                </li>
                <li>
                  <Image src={subject} alt="subject" />
                  <div>
                    <p>Personalized Assistance</p>
                    <span>
                      We provide professional dissertation help in the UK. We
                      provide our clients with original, high-quality work at an
                      accessible price for dissertation help.{" "}
                    </span>
                  </div>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ServiceAssignment;
