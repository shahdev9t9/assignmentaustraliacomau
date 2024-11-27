import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import personlized from "../public/images/personalized.svg";
import guaranteed from "../public/images/guaranteed.svg";
import subject from "../public/images/subject.svg";
import teamMember from "../public/images/teamMember.webp";

import Image from "next/image";

const ServiceAssignment = ({ServiceAssignmentContent}) => {
  return (
    <>
      <section className="service-assignment">
        <Container>
          <Row className="justify-content-center align-items-center text-center mb-lg-5 mb-2">
            <Col lg={9}>
              <h2 className="f64 fw-bold ">
                {ServiceAssignmentContent.heading}
          
              </h2>
            </Col>
          </Row>
          <Row>
            <Col xl={4}>
              <ul>
              {ServiceAssignmentContent.list1.map((item, index) => (
                <li>
                  <Image src={item.icon } alt="personlized" />
                  <div>
                    <p> {item.title} </p>
                    <span>
                    {item.content}
                 
                    </span>
                  </div>
                </li>
                   ))}
               
              </ul>
            </Col>
            <Col xl={4}>
              <Image src={ServiceAssignmentContent.teamimg  } alt="teamMember" className="teamMember" />
            </Col>
            <Col xl={4}>
              <ul>
              {ServiceAssignmentContent.list1.map((item, index) => (
                <li>
                  <Image src={item.icon} alt="personlized" />
                  <div>
                    <p> {item.title} </p>
                    <span>
                    {item.content}
       
                    </span>
                  </div>
                </li>
                          ))}
              
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ServiceAssignment;
