"use client";
import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import reviewProfile from "../public/images/reviewProfile.webp";
import reviewStar from "../public/images/reviewStar.webp";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Reviews = () => {
  return (
    <>
      <section className="pricing">
        <Container>
          <Row className="text-center justify-content-center align-items-center mb-xl-5 mb-3">
            <Col lg={10}>
              <h2 className="f60 fw-bold">
                Why students order last minute assistance with assignments from
                AU
              </h2>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={20}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
                breakpoints={{
                  240: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  992: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                }}
              >
                <SwiperSlide>
                  <div className="review_box">
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <Image src={reviewProfile} alt="reviewProfile" />
                      <span>Oliva David</span>
                    </div>
                    <Image src={reviewStar} alt="reviewStar" />
                    <span className="title">
                      I feel great to find you people!! Thanks!
                    </span>
                    <p>
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
                  <div className="review_box">
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <Image src={reviewProfile} alt="reviewProfile" />
                      <span>Oliva David</span>
                    </div>
                    <Image src={reviewStar} alt="reviewStar" />
                    <span className="title">
                      I feel great to find you people!! Thanks!
                    </span>
                    <p>
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
                  <div className="review_box">
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <Image src={reviewProfile} alt="reviewProfile" />
                      <span>Oliva David</span>
                    </div>
                    <Image src={reviewStar} alt="reviewStar" />
                    <span className="title">
                      I feel great to find you people!! Thanks!
                    </span>
                    <p>
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
                  <div className="review_box">
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <Image src={reviewProfile} alt="reviewProfile" />
                      <span>Oliva David</span>
                    </div>
                    <Image src={reviewStar} alt="reviewStar" />
                    <span className="title">
                      I feel great to find you people!! Thanks!
                    </span>
                    <p>
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
                  <div className="review_box">
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <Image src={reviewProfile} alt="reviewProfile" />
                      <span>Oliva David</span>
                    </div>
                    <Image src={reviewStar} alt="reviewStar" />
                    <span className="title">
                      I feel great to find you people!! Thanks!
                    </span>
                    <p>
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
                  <div className="review_box">
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <Image src={reviewProfile} alt="reviewProfile" />
                      <span>Oliva David</span>
                    </div>
                    <Image src={reviewStar} alt="reviewStar" />
                    <span className="title">
                      I feel great to find you people!! Thanks!
                    </span>
                    <p>
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
                  <div className="review_box">
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <Image src={reviewProfile} alt="reviewProfile" />
                      <span>Oliva David</span>
                    </div>
                    <Image src={reviewStar} alt="reviewStar" />
                    <span className="title">
                      I feel great to find you people!! Thanks!
                    </span>
                    <p>
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
                  <div className="review_box">
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <Image src={reviewProfile} alt="reviewProfile" />
                      <span>Oliva David</span>
                    </div>
                    <Image src={reviewStar} alt="reviewStar" />
                    <span className="title">
                      I feel great to find you people!! Thanks!
                    </span>
                    <p>
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
                  <div className="review_box">
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <Image src={reviewProfile} alt="reviewProfile" />
                      <span>Oliva David</span>
                    </div>
                    <Image src={reviewStar} alt="reviewStar" />
                    <span className="title">
                      I feel great to find you people!! Thanks!
                    </span>
                    <p>
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
                  <div className="review_box">
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <Image src={reviewProfile} alt="reviewProfile" />
                      <span>Oliva David</span>
                    </div>
                    <Image src={reviewStar} alt="reviewStar" />
                    <span className="title">
                      I feel great to find you people!! Thanks!
                    </span>
                    <p>
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
                  <div className="review_box">
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <Image src={reviewProfile} alt="reviewProfile" />
                      <span>Oliva David</span>
                    </div>
                    <Image src={reviewStar} alt="reviewStar" />
                    <span className="title">
                      I feel great to find you people!! Thanks!
                    </span>
                    <p>
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
                  <div className="review_box">
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <Image src={reviewProfile} alt="reviewProfile" />
                      <span>Oliva David</span>
                    </div>
                    <Image src={reviewStar} alt="reviewStar" />
                    <span className="title">
                      I feel great to find you people!! Thanks!
                    </span>
                    <p>
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
                  <div className="review_box">
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <Image src={reviewProfile} alt="reviewProfile" />
                      <span>Oliva David</span>
                    </div>
                    <Image src={reviewStar} alt="reviewStar" />
                    <span className="title">
                      I feel great to find you people!! Thanks!
                    </span>
                    <p>
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
                  <div className="review_box">
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <Image src={reviewProfile} alt="reviewProfile" />
                      <span>Oliva David</span>
                    </div>
                    <Image src={reviewStar} alt="reviewStar" />
                    <span className="title">
                      I feel great to find you people!! Thanks!
                    </span>
                    <p>
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
                  <div className="review_box">
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <Image src={reviewProfile} alt="reviewProfile" />
                      <span>Oliva David</span>
                    </div>
                    <Image src={reviewStar} alt="reviewStar" />
                    <span className="title">
                      I feel great to find you people!! Thanks!
                    </span>
                    <p>
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
                  <div className="review_box">
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <Image src={reviewProfile} alt="reviewProfile" />
                      <span>Oliva David</span>
                    </div>
                    <Image src={reviewStar} alt="reviewStar" />
                    <span className="title">
                      I feel great to find you people!! Thanks!
                    </span>
                    <p>
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
                  <div className="review_box">
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <Image src={reviewProfile} alt="reviewProfile" />
                      <span>Oliva David</span>
                    </div>
                    <Image src={reviewStar} alt="reviewStar" />
                    <span className="title">
                      I feel great to find you people!! Thanks!
                    </span>
                    <p>
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
                  <div className="review_box">
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <Image src={reviewProfile} alt="reviewProfile" />
                      <span>Oliva David</span>
                    </div>
                    <Image src={reviewStar} alt="reviewStar" />
                    <span className="title">
                      I feel great to find you people!! Thanks!
                    </span>
                    <p>
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
                  <div className="review_box">
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <Image src={reviewProfile} alt="reviewProfile" />
                      <span>Oliva David</span>
                    </div>
                    <Image src={reviewStar} alt="reviewStar" />
                    <span className="title">
                      I feel great to find you people!! Thanks!
                    </span>
                    <p>
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
                  <div className="review_box">
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <Image src={reviewProfile} alt="reviewProfile" />
                      <span>Oliva David</span>
                    </div>
                    <Image src={reviewStar} alt="reviewStar" />
                    <span className="title">
                      I feel great to find you people!! Thanks!
                    </span>
                    <p>
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
                  <div className="review_box">
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <Image src={reviewProfile} alt="reviewProfile" />
                      <span>Oliva David</span>
                    </div>
                    <Image src={reviewStar} alt="reviewStar" />
                    <span className="title">
                      I feel great to find you people!! Thanks!
                    </span>
                    <p>
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
                  <div className="review_box">
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <Image src={reviewProfile} alt="reviewProfile" />
                      <span>Oliva David</span>
                    </div>
                    <Image src={reviewStar} alt="reviewStar" />
                    <span className="title">
                      I feel great to find you people!! Thanks!
                    </span>
                    <p>
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
                  <div className="review_box">
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <Image src={reviewProfile} alt="reviewProfile" />
                      <span>Oliva David</span>
                    </div>
                    <Image src={reviewStar} alt="reviewStar" />
                    <span className="title">
                      I feel great to find you people!! Thanks!
                    </span>
                    <p>
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
                  <div className="review_box">
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <Image src={reviewProfile} alt="reviewProfile" />
                      <span>Oliva David</span>
                    </div>
                    <Image src={reviewStar} alt="reviewStar" />
                    <span className="title">
                      I feel great to find you people!! Thanks!
                    </span>
                    <p>
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

export default Reviews;
