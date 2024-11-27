"use client";
import { Pagination, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import process from "../public/images/Process.webp";
import Image from "next/image";

const Process = () => {
  return (
    <>
      <section className="process">
        <Container fluid>
          <Row>
            <Col xl={4}>
              <span className="heading">OUR PROCESS </span>
              <Image src={process} alt="faq" className="d-xl-block d-none" />
            </Col>
            <Col xl={8}>
              <Swiper
                // install Swiper modules
                modules={[Pagination, A11y]}
                spaceBetween={10}
                slidesPerView={4}
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
              >
                <SwiperSlide>
                  <div className="process-items">
                    <div className="content1">
                      <div>
                        <span>Paper construction</span>
                        <p>
                          Would I be able to obtain a plagiarism report to
                          satisfy my own self esteem?
                        </p>
                      </div>
                      <div className="circle"></div>
                    </div>
                    <div className="borders">
                      <div className="circles">
                        <svg
                          width="350"
                          height="120"
                          viewBox="0 0 220 120"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <defs>
                            <linearGradient
                              id="g1"
                              gradientTransform="rotate(58)"
                            >
                              <stop offset="0%" stop-color="#00cad4" />
                              <stop offset="95%" stop-color="#0c7eb0" />
                            </linearGradient>
                            <linearGradient
                              id="g2"
                              gradientTransform="rotate(58)"
                            >
                              <stop offset="54%" stop-color="#bfbfbf" />
                              <stop offset="100%" stop-color="#E5DFDF" />
                            </linearGradient>
                          </defs>
                          <polygon
                            points="10,10 150,10 170,50 150,90 10,90"
                            fill="url(#g1)"
                            stroke="url(#g2)"
                            stroke-width="12"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="process-items2">
                    <div className="borders">
                      <div className="circles">
                        <svg
                          width="350"
                          height="120"
                          viewBox="0 0 220 120"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <defs>
                            <linearGradient
                              id="g1"
                              gradientTransform="rotate(58)"
                            >
                              <stop offset="0%" stop-color="#00cad4" />
                              <stop offset="95%" stop-color="#0c7eb0" />
                            </linearGradient>
                            <linearGradient
                              id="g2"
                              gradientTransform="rotate(58)"
                            >
                              <stop offset="54%" stop-color="#bfbfbf" />
                              <stop offset="100%" stop-color="#E5DFDF" />
                            </linearGradient>
                          </defs>
                          <polygon
                            points="170,10 30,10 10,50 30,90 170,90"
                            fill="url(#g1)"
                            stroke="url(#g2)"
                            stroke-width="12"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="content1">
                      <div className="circle"></div>
                      <div>
                        <span>Paper construction</span>
                        <p>
                          Would I be able to obtain a plagiarism report to
                          satisfy my own self esteem?
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="process-items">
                    <div className="content1">
                      <div>
                        <span>Paper construction</span>
                        <p>
                          Would I be able to obtain a plagiarism report to
                          satisfy my own self esteem?
                        </p>
                      </div>
                      <div className="circle"></div>
                    </div>
                    <div className="borders">
                      <div className="circles">
                        <svg
                          width="350"
                          height="120"
                          viewBox="0 0 220 120"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <defs>
                            <linearGradient
                              id="g1"
                              gradientTransform="rotate(58)"
                            >
                              <stop offset="0%" stop-color="#00cad4" />
                              <stop offset="95%" stop-color="#0c7eb0" />
                            </linearGradient>
                            <linearGradient
                              id="g2"
                              gradientTransform="rotate(58)"
                            >
                              <stop offset="54%" stop-color="#bfbfbf" />
                              <stop offset="100%" stop-color="#E5DFDF" />
                            </linearGradient>
                          </defs>
                          <polygon
                            points="10,10 150,10 170,50 150,90 10,90"
                            fill="url(#g1)"
                            stroke="url(#g2)"
                            stroke-width="12"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="process-items2">
                    <div className="borders">
                      <div className="circles">
                        <svg
                          width="350"
                          height="120"
                          viewBox="0 0 220 120"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <defs>
                            <linearGradient
                              id="g1"
                              gradientTransform="rotate(58)"
                            >
                              <stop offset="0%" stop-color="#00cad4" />
                              <stop offset="95%" stop-color="#0c7eb0" />
                            </linearGradient>
                            <linearGradient
                              id="g2"
                              gradientTransform="rotate(58)"
                            >
                              <stop offset="54%" stop-color="#bfbfbf" />
                              <stop offset="100%" stop-color="#E5DFDF" />
                            </linearGradient>
                          </defs>
                          <polygon
                            points="170,10 30,10 10,50 30,90 170,90"
                            fill="url(#g1)"
                            stroke="url(#g2)"
                            stroke-width="12"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="content1">
                      <div className="circle"></div>
                      <div>
                        <span>Paper construction</span>
                        <p>
                          Would I be able to obtain a plagiarism report to
                          satisfy my own self esteem?
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Process;
