"use client";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import faq from "../public/images/Faq.webp";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";

const Faq = () => {
  return (
    <>
      <section className="faq py-1">
        <Container>
          <Row className="mb-4">
            <Col>
              <div className="d-flex align-items-center justify-content-center gap-4">
                <h3>FAQ</h3>
                <p>
                  When you can’t find anyone to help you with your papers and
                  other academic assignments, do you feel the need to pay
                  someone in the AU to do your essays? That is not necessary. In
                  addition to offering services in the AU, we also assist
                  students from different countries of the word. The essay
                  writers we hire are among the best in the industry. Many of
                  our writers are graduate of prestigious universities around
                  the world. If you have question and need the best help in
                  academic writing, there is only one place you can turn to When
                  you can’t find anyone to help you with your papers and other
                  academic assignments, do you feel the need to pay someone in
                  the AU to do your essays? That is not necessary. In addition
                  to offering services in the AU,
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Row>
              <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={6}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
              >
                <SwiperSlide>
                  <div className="faq_box">
                    <span>How Much Does a Security Guard Cost?</span>
                    <p>
                      When you can’t find anyone to help you with your papers
                      and other academic assignments, do you feel the need to
                      pay someone in the AU to do your essays? That is not
                      necessary. In addition to offering services in the AU, we
                      also assist students from different countries of the word.
                      The essay writers we hire are among the best in the
                      industry. Many of our writers are graduate of prestigious
                    </p>
                    <span className="no">01</span>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="faq_box">
                    <span>How Much Does a Security Guard Cost?</span>
                    <p>
                      When you can’t find anyone to help you with your papers
                      and other academic assignments, do you feel the need to
                      pay someone in the AU to do your essays? That is not
                      necessary. In addition to offering services in the AU, we
                      also assist students from different countries of the word.
                      The essay writers we hire are among the best in the
                      industry. Many of our writers are graduate of prestigious
                    </p>
                    <span className="no">01</span>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="faq_box">
                    <span>How Much Does a Security Guard Cost?</span>
                    <p>
                      When you can’t find anyone to help you with your papers
                      and other academic assignments, do you feel the need to
                      pay someone in the AU to do your essays? That is not
                      necessary. In addition to offering services in the AU, we
                      also assist students from different countries of the word.
                      The essay writers we hire are among the best in the
                      industry. Many of our writers are graduate of prestigious
                    </p>
                    <span className="no">01</span>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <Image src={faq} alt="faq" />
                </SwiperSlide>
                <SwiperSlide>
                  <div className="faq_box">
                    <span>How Much Does a Security Guard Cost?</span>
                    <p>
                      When you can’t find anyone to help you with your papers
                      and other academic assignments, do you feel the need to
                      pay someone in the AU to do your essays? That is not
                      necessary. In addition to offering services in the AU, we
                      also assist students from different countries of the word.
                      The essay writers we hire are among the best in the
                      industry. Many of our writers are graduate of prestigious
                    </p>
                    <span className="no">01</span>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="faq_box">
                    <span>How Much Does a Security Guard Cost?</span>
                    <p>
                      When you can’t find anyone to help you with your papers
                      and other academic assignments, do you feel the need to
                      pay someone in the AU to do your essays? That is not
                      necessary. In addition to offering services in the AU, we
                      also assist students from different countries of the word.
                      The essay writers we hire are among the best in the
                      industry. Many of our writers are graduate of prestigious
                    </p>
                    <span className="no">01</span>
                  </div>
                </SwiperSlide>
              </Swiper>
            </Row>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Faq;
