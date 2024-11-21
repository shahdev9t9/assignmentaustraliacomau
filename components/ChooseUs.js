'use client'
import Link from 'next/link'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaLongArrowAltRight } from "react-icons/fa";
import CountUp from 'react-countup';

const ChooseUs = () => {
  return (
    <>
    <section className='choose-us'>
      <Container>
        <Row>
            <Col lg={8} className='text-white'>
             <span className='f64 fw-bold'>
             1 Million+ Assignment Samples Available For FREE!
             </span>
             <p className='f20'>
             Assignment help has garnered nothing but praise from the clients. Any trustworthy review platform has positive review about our service and gives us motivation to improve this percentage drastically declines to only approx 37% when it comes to higher education. 
             </p>
             <div className='d-flex gap-3 align-items-center'>
             <input type='search' placeholder='Search Your assignment Sample' />
             <Link href="" className='searching' >Search </Link>
             </div>
             <div className='d-flex align-items-center gap-3 mt-4'>

             <p className='f20 m-0'>
             Explore All Samples
             </p>
             <FaLongArrowAltRight />
             </div>

            </Col>
            <Col lg={4}>
             <div className='left-content'>
               <p>Why Choose Us</p>
               <ul>
                <li>
                <CountUp end={100} />
                    <span>Subject Covered</span>
                </li>
                <li>
                <CountUp end={100} />
                    <span>University Covered</span>
                </li>
                <li>
                <CountUp end={100} />
                    <span>Accessible Anytime,
                    Anywhere</span>
                </li>
                <li>
                <CountUp end={100} />
                    <span>Mentor Reviewed 
                    Samples</span>
                </li>
               </ul>
             </div>
            </Col>
        </Row>
      </Container>
    </section>
      
    </>
  )
}

export default ChooseUs
