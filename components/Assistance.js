import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaCheck } from "react-icons/fa6";

const Assistance = ({ Assistancecontent }) => {
  return (
    <section className="assistance">
      <Container>
        <Row className="justify-content-center text-center align-items-center mb-lg-5 mb-4">
          <Col lg={10}>
            <h3 className="f60 fw-bold">{Assistancecontent.heading}</h3>
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <span className="f60 fw-bold lh-sm d-block mb-3">{Assistancecontent.subheading1}</span>
            <p className="f20">{Assistancecontent.paragraph1}</p>
            <ul>
              {Assistancecontent.list1.map((item, index) => (
                <li key={index}>
                  <FaCheck />
                  {item}
                </li>
              ))}
              <li>
                <ul>
                  {Assistancecontent.nestedList.map((nestedItem, index) => (
                    <li key={index}>{nestedItem}</li>
                  ))}
                </ul>
              </li>
            </ul>
          </Col>
          <Col lg={6}>
            <span className="f60 fw-bold lh-sm d-block mb-3">{Assistancecontent.subheading2}</span>
            <p className="f20">{Assistancecontent.paragraph2}</p>
            <div className="list1">
              {Assistancecontent.list2.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center text-center align-items-center my-lg-5 my-4">
          <Col lg={10}>
            <p className="f64 fw-bold mb-lg-4 mb-3 lh-sm">{Assistancecontent.conclusionHeading}</p>
            <p className="f20">{Assistancecontent.conclusionParagraph}</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Assistance;
