import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import LeftImg from "../public/images/CtaLeft.webp";
import CtaRIght from "../public/images/CtaRIght.webp";
import whatsappIcon from "../public/images/whatsappIcon.svg";
import Email from "../public/images/Email.svg";
import gmail from "../public/images/gmail.svg";
import chatIcon from "../public/images/chatIcon.svg";


import Link from "next/link";

const Cta = () => {
  return (
    <>
      <section className="cta pt-4 pb-0 ps-lg-4">
        <Container fluid>
          <Row>
            <Col lg={3} className="d-xl-block d-none">
              <Image src={LeftImg} alt="LeftImg" className="left-img" />
            </Col>
            <Col xl={5}>
              <div className="content">
                <span>25% OFF & 100% Cashback</span>
                <p>
                  We provide professional dissertation help in the UK. We
                  provide our clients with original, high-quality work at an
                  accessible price for dissertation help.
                </p>
                <Link href="" className="email">
                <Image src={gmail} alt="gmail" className="mb-3" />
                  info@assignmentshelpaustralia.com.au
                </Link>
                <div className="pt-xl-5 pb-xl-0 pb-3 d-lg-flex gap-5">
          
                  <Link href="" className="live-chat bg-green txt-white">
                  <Image src={chatIcon} alt="chatIcon" />
                    Live Chat
                  </Link>
                  <Link href="" className="whatsapp bg-orange txt-white mt-lg-0 mt-3">
                  <Image src={whatsappIcon} alt="whatsapp" />
                  Whatsapp
                  </Link>
                </div>
              </div>
            </Col>
            <Col lg={4} className="d-xl-block d-none" >
             <Image src={CtaRIght} alt="CtaRIght" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Cta;
