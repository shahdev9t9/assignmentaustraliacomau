'use client'
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Feature = () => {
  return (
    <>
      <section className="feature">
        <Container>
          <Row className="text-center justify-content-center align-items-center mb-4">
            <Col lg={10}>
              <h3 className="f64 fw-bold txt-white">
                Bonus Features We Offer Free with Our Assignment Help Service in
                Australia!
              </h3>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
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
                    <div className="feature-box">
                       <span className="title">Title page</span>
                        <span>for <p>$6.55</p> </span>
                        <p>FREE</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="feature-box">
                       <span className="title">Title page</span>
                        <span>for <p>$6.55</p> </span>
                        <p>FREE</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="feature-box">
                       <span className="title">Title page</span>
                        <span>for <p>$6.55</p> </span>
                        <p>FREE</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="feature-box">
                       <span className="title">Title page</span>
                        <span>for <p>$6.55</p> </span>
                        <p>FREE</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="feature-box">
                       <span className="title">Title page</span>
                        <span>for <p>$6.55</p> </span>
                        <p>FREE</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="feature-box">
                       <span className="title">Title page</span>
                        <span>for <p>$6.55</p> </span>
                        <p>FREE</p>
                    </div>
                </SwiperSlide>
                
                ...
              </Swiper>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Feature;
