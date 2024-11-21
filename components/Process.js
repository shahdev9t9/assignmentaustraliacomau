import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import process from "../public/images/Process.webp"
import Image from 'next/image'

const Process = () => {
  return (
    <>
    <section className='process'>
     <Container fluid>
        <Row>
           <Col lg={4}>
            <span className='heading'>OUR PROCESS </span>
            <Image src={process} alt='faq' />
           </Col>
           <Col lg={8}>
            <div className='process-items'>
                <div className='content1'>
                    <div>
                    <span >Paper construction</span>
                    <p>
                    Would I be able to obtain a plagiarism report 
                    to satisfy my own self esteem?
                    </p>

                    </div>
                    <div className='circle'>

</div>
                </div>
                <div className='circles'>

                </div>
            </div>
           </Col>
        </Row>
     </Container>
    </section>
      
    </>
  )
}

export default Process
