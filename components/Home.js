import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaCheck } from "react-icons/fa";


const Home = () => {
  return (
    <>
    <section className='home'>
        <Container>
            <Row>
                <Col lg={7}>
                 <h1>
                 Assignment Help Australia Online Professional in the
                 Provide UK
                 </h1>
                 <p>
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
                </Col>
            </Row>
        </Container>

    </section>
      
    </>
  )
}

export default Home
