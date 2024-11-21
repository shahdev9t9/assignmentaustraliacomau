"use client";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import profile from "../public/images/profile.webp";
import greenstar from "../public/images/greenstar.webp";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import TrustPilot from "../public/images/TrustPilot.webp";
import sitejabber from "../public/images/sitejabber.webp";

import Image from "next/image";

const HomeReview = () => {
  return (
    <>
      <section className="home-review">
        <Container>
          <Row className="text-center justify-content-center align-items-center txt-white mb-4">
            <Col lg={10}>
              <h3 className="f60 fw-bold">Reviews and Trust Go Hand In Hand</h3>
              <p className="f20">
                Allassignmenthelp.com has garnered nothing but praise from the
                clients. Any trustworthy review platform has positive review
                about our service and gives us motivation to improve.
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg={4}>
              <div className="left-content">
                <div>
                  <p>assignmenthelp</p>
                </div>
                <div>
                  <Image src={TrustPilot} alt="TrustPilot" />
                </div>
                <div>
                  <Image src={sitejabber} alt="sitejabber" />
                </div>
              </div>
            </Col>
            <Col lg={8}>
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
                  <div className="home_box">
                    <div className="d-flex align-items-center gap-3">
                      <Image src={profile} alt="profile" />
                      <span className="name">Oliva David</span>
                    </div>
                    <Image src={greenstar} alt="greenstar" />
                    <span>I feel great to find you people!! Thanks!</span>
                    <p className="f20">
                      Assignment help has garnered nothing but praise from the
                      clients. Any trustworthy review platform has positive
                      review about our service and gives us motivation to
                      improve this percentage drastically declines to only
                      approx 37% when it comes to higher education. One of the
                      reasons is overly complicated coursework and a never-
                      ending queue of assignments Assignment help has garnered
                      nothing but praise from the clients. Any trustworthy
                      review platform has positive review about our service and
                      gives us motivation to improve this percentage drastically
                      declines to only approx 37% when it comes to higher
                      education. One of the reasons is overly complicated
                      coursework and a never- ending queue of assignments.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="home_box">
                    <div className="d-flex align-items-center gap-3">
                      <Image src={profile} alt="profile" />
                      <span className="name">Oliva David</span>
                    </div>
                    <Image src={greenstar} alt="greenstar" />
                    <span>I feel great to find you people!! Thanks!</span>
                    <p className="f20">
                      Assignment help has garnered nothing but praise from the
                      clients. Any trustworthy review platform has positive
                      review about our service and gives us motivation to
                      improve this percentage drastically declines to only
                      approx 37% when it comes to higher education. One of the
                      reasons is overly complicated coursework and a never-
                      ending queue of assignments Assignment help has garnered
                      nothing but praise from the clients. Any trustworthy
                      review platform has positive review about our service and
                      gives us motivation to improve this percentage drastically
                      declines to only approx 37% when it comes to higher
                      education. One of the reasons is overly complicated
                      coursework and a never- ending queue of assignments.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="home_box">
                    <div className="d-flex align-items-center gap-3">
                      <Image src={profile} alt="profile" />
                      <span className="name">Oliva David</span>
                    </div>
                    <Image src={greenstar} alt="greenstar" />
                    <span>I feel great to find you people!! Thanks!</span>
                    <p className="f20">
                      Assignment help has garnered nothing but praise from the
                      clients. Any trustworthy review platform has positive
                      review about our service and gives us motivation to
                      improve this percentage drastically declines to only
                      approx 37% when it comes to higher education. One of the
                      reasons is overly complicated coursework and a never-
                      ending queue of assignments Assignment help has garnered
                      nothing but praise from the clients. Any trustworthy
                      review platform has positive review about our service and
                      gives us motivation to improve this percentage drastically
                      declines to only approx 37% when it comes to higher
                      education. One of the reasons is overly complicated
                      coursework and a never- ending queue of assignments.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="home_box">
                    <div className="d-flex align-items-center gap-3">
                      <Image src={profile} alt="profile" />
                      <span className="name">Oliva David</span>
                    </div>
                    <Image src={greenstar} alt="greenstar" />
                    <span>I feel great to find you people!! Thanks!</span>
                    <p className="f20">
                      Assignment help has garnered nothing but praise from the
                      clients. Any trustworthy review platform has positive
                      review about our service and gives us motivation to
                      improve this percentage drastically declines to only
                      approx 37% when it comes to higher education. One of the
                      reasons is overly complicated coursework and a never-
                      ending queue of assignments Assignment help has garnered
                      nothing but praise from the clients. Any trustworthy
                      review platform has positive review about our service and
                      gives us motivation to improve this percentage drastically
                      declines to only approx 37% when it comes to higher
                      education. One of the reasons is overly complicated
                      coursework and a never- ending queue of assignments.
                    </p>
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

export default HomeReview;
