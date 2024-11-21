import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaCheck } from "react-icons/fa6";
import keyPoint from "../public/images/keyPoint.webp"
import Image from 'next/image';

const KeyTopic = () => {
  return (
    <>
      <section className='key-point'>
         <Container>
            <Row className='align-items-center'>
                <Col lg={8}>
                  <p>Assignment Key Topic</p>
                  <ul className='list1'>
                    <li>
                    <FaCheck />

                        <span>Come to us and use My Assignment Help Service for Top Australian Universities in Sydney and Melbourne</span>
                    </li>
                    <li>
                    <FaCheck />

                        <span>My Assignment Help is not just About Assignments, it is more than that</span>
                    </li>
                    <li>
                    <FaCheck />

                        <span>Why AssignmentHelp is Best Academic Service Available in Australia</span>
                    </li>
                    <li>
                    <FaCheck />

                        <span>How can I Contact or Login for My Assignment Help Australia from AssignmentHelp?</span>
                    </li>
                    <li>
                    <FaCheck />

                        <span>My Assignment Help - Frequently Asked Questions </span>
                    </li>
                  </ul>
                  <ul className='ps-5 list2'>
                    <li>
                        <span>Come to us and use My Assignment Help Service for Top Australian Universities in Sydney and Melbourne</span>
                    </li>
                    <li>
                        <span>My Assignment Help is not just About Assignments, it is more than that</span>
                    </li>
                    <li>
                        <span>Why AssignmentHelp is Best Academic Service Available in Australia</span>
                    </li>
                    <li>
                        <span>How can I Contact or Login for My Assignment Help Australia from AssignmentHelp?</span>
                    </li>
                    <li>
                        <span>My Assignment Help - Frequently Asked Questions </span>
                    </li>
                  </ul>
                </Col>
                <Col lg={4}>
                <Image src={keyPoint} alt='keyPoint' />
                </Col>
            </Row>
         </Container>
      </section>
    </>
  )
}

export default KeyTopic
