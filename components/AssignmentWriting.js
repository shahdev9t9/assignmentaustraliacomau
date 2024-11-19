"use client";
import React from "react";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import { Col, Container, Row } from "react-bootstrap";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import tabImage from "../public/images/tabImage.webp";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";
import Link from "next/link";

const AssignmentWriting = () => {
  return (
    <>
      <section className="assignment-writing">
        <Container>
          <Row className="align-items-center text-center justify-content-center mb-5">
            <Col lg={10}>
              <h3 className="f64 fw-bold">
                Most Comprehensive Assignment Writing Services in Australia!
              </h3>
            </Col>
          </Row>
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
              <Col sm={6}>
                <Swiper
                  // install Swiper modules
                  modules={[Navigation, Pagination, Scrollbar, A11y]}
                  spaceBetween={50}
                  slidesPerView={1}
                  navigation
                  pagination={{ clickable: true }}
                  scrollbar={{ draggable: true }}
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log("slide change")}
                >
                  <SwiperSlide>
                    <Nav variant="pills" className="flex-column">
                      <Nav.Item>
                        <Nav.Link eventKey="first">
                          Assignment Writing Services
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">
                          Essay Writing Service
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">
                          Homework Help Service
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="four">
                          University Assignment Help
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="five">
                          Resume Writing Service
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </SwiperSlide>
                </Swiper>
              </Col>
              <Col sm={6}>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <div className="tab_box">
                      <div className="">
                        <div>
                          <p>
                            Looking for assignments help in Australia service?
                            You've come to the right place! At Assignment Help,
                            we offer professional assignment writing services to
                            students of all levels. Whether you're struggling
                            with a complex assignment or just need a little
                            extra help, our expert writers are here to assist
                            you.
                          </p>
                          <p>
                            We understand the challenges that students face, and
                            we're committed to providing the best possible
                            service. With ourassignment writing, you can be
                            confident that your assignment will be well-written
                            and free of errors. So what are you waiting for?
                            Contact us today and let us help you get the grade
                            you deserve!In the Austarila, around 90% of the
                            population completes high school. Unfortunately,
                            this percentage drastically declines to only approx
                            37% when it comes to higher education. One of the
                            reasons is overly complicated coursework and a
                            never- ending queue of assignments.In the Austarila,
                            around 90% of the population completes high school.
                            Unfortunately, this percentage drastically declines
                            to only approx easons is overly complicated
                            coursework and a never- ending queue of
                            assignments.In the Austarila, around 90% of the
                            population completes high school. Unfortunately,
                            this percentage drastically declines to only approx
                            .
                          </p>
                        </div>
                        <div className="pt-3 d-flex justify-content-end gap-5">
                          <Link
                            href=""
                            className="order-now bg-orange txt-white"
                          >
                            Order Now
                          </Link>
                          <Link
                            href=""
                            className="live-chat bg-green txt-white"
                          >
                            Live Chat
                          </Link>
                        </div>
                      </div>
                      <Image src={tabImage} alt="tabImage" />
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <div className="tab_box">
                      <div className="">
                        <div>
                          <p>
                            Looking for assignments help in Australia service?
                            You've come to the right place! At Assignment Help,
                            we offer professional assignment writing services to
                            students of all levels. Whether you're struggling
                            with a complex assignment or just need a little
                            extra help, our expert writers are here to assist
                            you.
                          </p>
                          <p>
                            We understand the challenges that students face, and
                            we're committed to providing the best possible
                            service. With ourassignment writing, you can be
                            confident that your assignment will be well-written
                            and free of errors. So what are you waiting for?
                            Contact us today and let us help you get the grade
                            you deserve!In the Austarila, around 90% of the
                            population completes high school. Unfortunately,
                            this percentage drastically declines to only approx
                            37% when it comes to higher education. One of the
                            reasons is overly complicated coursework and a
                            never- ending queue of assignments.In the Austarila,
                            around 90% of the population completes high school.
                            Unfortunately, this percentage drastically declines
                            to only approx easons is overly complicated
                            coursework and a never- ending queue of
                            assignments.In the Austarila, around 90% of the
                            population completes high school. Unfortunately,
                            this percentage drastically declines to only approx
                            .
                          </p>
                        </div>
                        <div className="pt-3 d-flex justify-content-end gap-5">
                          <Link
                            href=""
                            className="order-now bg-orange txt-white"
                          >
                            Order Now
                          </Link>
                          <Link
                            href=""
                            className="live-chat bg-green txt-white"
                          >
                            Live Chat
                          </Link>
                        </div>
                      </div>
                      <Image src={tabImage} alt="tabImage" />
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <div className="tab_box">
                      <div className="">
                        <div>
                          <p>
                            Looking for assignments help in Australia service?
                            You've come to the right place! At Assignment Help,
                            we offer professional assignment writing services to
                            students of all levels. Whether you're struggling
                            with a complex assignment or just need a little
                            extra help, our expert writers are here to assist
                            you.
                          </p>
                          <p>
                            We understand the challenges that students face, and
                            we're committed to providing the best possible
                            service. With ourassignment writing, you can be
                            confident that your assignment will be well-written
                            and free of errors. So what are you waiting for?
                            Contact us today and let us help you get the grade
                            you deserve!In the Austarila, around 90% of the
                            population completes high school. Unfortunately,
                            this percentage drastically declines to only approx
                            37% when it comes to higher education. One of the
                            reasons is overly complicated coursework and a
                            never- ending queue of assignments.In the Austarila,
                            around 90% of the population completes high school.
                            Unfortunately, this percentage drastically declines
                            to only approx easons is overly complicated
                            coursework and a never- ending queue of
                            assignments.In the Austarila, around 90% of the
                            population completes high school. Unfortunately,
                            this percentage drastically declines to only approx
                            .
                          </p>
                        </div>
                        <div className="pt-3 d-flex justify-content-end gap-5">
                          <Link
                            href=""
                            className="order-now bg-orange txt-white"
                          >
                            Order Now
                          </Link>
                          <Link
                            href=""
                            className="live-chat bg-green txt-white"
                          >
                            Live Chat
                          </Link>
                        </div>
                      </div>
                      <Image src={tabImage} alt="tabImage" />
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="four">
                    <div className="tab_box">
                      <div className="">
                        <div>
                          <p>
                            Looking for assignments help in Australia service?
                            You've come to the right place! At Assignment Help,
                            we offer professional assignment writing services to
                            students of all levels. Whether you're struggling
                            with a complex assignment or just need a little
                            extra help, our expert writers are here to assist
                            you.
                          </p>
                          <p>
                            We understand the challenges that students face, and
                            we're committed to providing the best possible
                            service. With ourassignment writing, you can be
                            confident that your assignment will be well-written
                            and free of errors. So what are you waiting for?
                            Contact us today and let us help you get the grade
                            you deserve!In the Austarila, around 90% of the
                            population completes high school. Unfortunately,
                            this percentage drastically declines to only approx
                            37% when it comes to higher education. One of the
                            reasons is overly complicated coursework and a
                            never- ending queue of assignments.In the Austarila,
                            around 90% of the population completes high school.
                            Unfortunately, this percentage drastically declines
                            to only approx easons is overly complicated
                            coursework and a never- ending queue of
                            assignments.In the Austarila, around 90% of the
                            population completes high school. Unfortunately,
                            this percentage drastically declines to only approx
                            .
                          </p>
                        </div>
                        <div className="pt-3 d-flex justify-content-end gap-5">
                          <Link
                            href=""
                            className="order-now bg-orange txt-white"
                          >
                            Order Now
                          </Link>
                          <Link
                            href=""
                            className="live-chat bg-green txt-white"
                          >
                            Live Chat
                          </Link>
                        </div>
                      </div>
                      <Image src={tabImage} alt="tabImage" />
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="five">
                    <div className="tab_box">
                      <div className="">
                        <div>
                          <p>
                            Looking for assignments help in Australia service?
                            You've come to the right place! At Assignment Help,
                            we offer professional assignment writing services to
                            students of all levels. Whether you're struggling
                            with a complex assignment or just need a little
                            extra help, our expert writers are here to assist
                            you.
                          </p>
                          <p>
                            We understand the challenges that students face, and
                            we're committed to providing the best possible
                            service. With ourassignment writing, you can be
                            confident that your assignment will be well-written
                            and free of errors. So what are you waiting for?
                            Contact us today and let us help you get the grade
                            you deserve!In the Austarila, around 90% of the
                            population completes high school. Unfortunately,
                            this percentage drastically declines to only approx
                            37% when it comes to higher education. One of the
                            reasons is overly complicated coursework and a
                            never- ending queue of assignments.In the Austarila,
                            around 90% of the population completes high school.
                            Unfortunately, this percentage drastically declines
                            to only approx easons is overly complicated
                            coursework and a never- ending queue of
                            assignments.In the Austarila, around 90% of the
                            population completes high school. Unfortunately,
                            this percentage drastically declines to only approx
                            .
                          </p>
                        </div>
                        <div className="pt-3 d-flex justify-content-end gap-5">
                          <Link
                            href=""
                            className="order-now bg-orange txt-white"
                          >
                            Order Now
                          </Link>
                          <Link
                            href=""
                            className="live-chat bg-green txt-white"
                          >
                            Live Chat
                          </Link>
                        </div>
                      </div>
                      <Image src={tabImage} alt="tabImage" />
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      </section>
    </>
  );
};

export default AssignmentWriting;
