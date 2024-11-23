import Image from 'next/image';
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaCheck } from "react-icons/fa";
import Certified from "../public/images/Certified.webp"
import studentRight from "../public/images/studentRight.webp"
import Link from 'next/link';



const StudentAssignment = () => {
  return (
    <>
    <section className='student-assignment'>
      <Container fluid className='me-0 pe-0'>
        <Row>
          <Col xl={7} >
          <div className='left-content'>

           <h2 className='f64 fw-bold'>
           Why students order last minute assistance with assignments from usa
           </h2>
           <p className='f20'>
           In the Austarila, around 90% of the population completes high school. Unfortunately, this percentage drastically declines to only approx 37% when it comes to higher education. One of the reasons is overly complicated coursework and a never- ending queue of assignments.In the Austarila, around 90% of the population completes high school. Unfortunately, this percentage drastically declines to only approx 37% when it comes to higher education. One of the reasons is overly complicated coursework and a never- ending queue of assignments.
           </p>
           <p className='f20'>
           In the Austarila, around 90% of the population completes high school. Unfortunately, this percentage drastically declines to only approx 37% when it comes to higher education. One of the reasons is overly complicated coursework and a never- ending queue of assignments.In the Austarila, around 90% of the population completes high school. Unfortunately, this percentage drastically declines to only approx 37% when it comes to higher education. One of the reasons is overly complicated coursework and a never- ending queue of assignments.
           </p>
           <ul>
            <li>
            <FaCheck />

                <span>Select the most suitable writer.</span>
            </li>
            <li>
            <FaCheck />

                <span>Direct communication with a writer via online chat;</span>
            </li>
            <li>
            <FaCheck />

                <span>Find and fill out the application form.</span>
            </li>
            <li>
            <FaCheck />

                <span>Get the project, check its quality, and download it.</span>
            </li>
            <li>
            <FaCheck />

                <span>Find and fill out the application form.</span>
            </li>
            <li>
            <FaCheck />

                <span>Get the project, check its quality, and download it.</span>
            </li>
           </ul>
           <div className='mt-xxl-5 mt-3 d-flex align-items-center gap-xxl-5 gap-2'>
                    <Link href="" className='order-now bg-orange txt-white'>Order Now</Link>
                    <Link href="" className='live-chat bg-green txt-white'>Live Chat</Link>
                     <Image src={Certified} alt='certified' />
                 </div>
          </div>
          </Col>
          <Col xl={5} className='pe-0 d-xl-block d-none'>
          <div className='right-content'>

           <Image src={studentRight} alt='studentRight'/>
          </div>
          </Col>

        </Row>
      </Container>
    </section>
      
    </>
  )
}

export default StudentAssignment
