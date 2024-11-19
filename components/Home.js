import Image from 'next/image';
import React from 'react'
import homeright from "../public/images/HomeRight.webp"
import batches from "../public/images/batches.webp"

import { Col, Container, Row } from 'react-bootstrap'
import { FaCheck } from "react-icons/fa";
import Link from 'next/link';


const Home = () => {
  return (
    <>
    <section className='home pb-0'>
        <Container>
            <Row className='align-items-end'>
                <Col lg={7}>
                 <h1 className='f64 fw-bold'>
                 Assignment Help Australia Online Professional in the
                 Provide UK
                 </h1>
                 <p className='f22'>
                 We provide professional dissertation help in the UK. We provide our clients with original, high-quality work at an accessible price for dissertation help. Additionally, our service 
                 </p>

                 <ul>
                    <li>
                    <FaCheck />
                        <span>Recognized Globally</span>
                    </li>
                    <li>
                    <FaCheck />
                        <span>Convenient Process</span>
                    </li>
                    <li>
                    <FaCheck />
                        <span>Convenient Process</span>
                    </li>
                    <li>
                    <FaCheck />
                        <span>Occasional Discounts</span>
                    </li>
                    <li>
                    <FaCheck />
                        <span>Partial Payment Plan</span>
                    </li>

                    <li>
                    <FaCheck />
                        <span>Partial Payment Plan</span>
                    </li>
                 </ul>
                 <div className='pt-5 d-flex gap-5'>
                    <Link href="" className='order-now bg-orange txt-white'>Order Now</Link>
                    <Link href="" className='live-chat bg-green txt-white'>Live Chat</Link>

                 </div>
                 <Image src={batches} alt='batches' className='my-5' />
                </Col>
                <Col lg={5}>
                 <Image src={homeright} alt='homeright' className="home-right" />
                </Col>
            </Row>
        </Container>

    </section>
      
    </>
  )
}

export default Home
