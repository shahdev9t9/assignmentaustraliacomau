import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NoAi from "../public/images/NoAi.webp"
import bestQuality from "../public/images/bestQuality.webp"
import chatgpt from "../public/images/chatgpt.webp"
import Image from 'next/image'



const OrderSummary = () => {
  return (
    <>
    <section className='order-summary'>
        <Container>
            <Row>
               <Col lg={6}>
                 <span className='title f64 fw-bold d-block mb-3'>Your Order Summary</span>
               <div className='summary'>

               <div>
                <span>Academic paper writing</span>
                <p>Type of Paper:</p>
                <p>Subject:</p>
               </div>
               <div>
                <span>Basic Price</span>
                <p>Academic Level:</p>
                <p>Deadline Days: 10 Sep, 2024</p>
                <p>Page:</p>
               </div>
               </div>
              <p className='Total'>Total: A$</p>
               </Col>
               <Col lg={6}>
               <div className='d-flex gap-3'>
               <Image src={chatgpt} alt='chatgpt' />
               <Image src={bestQuality} alt='bestQuality' />
               </div>
                <Image src={NoAi} alt='NoAi' className="mt-3" />
               </Col>
            </Row>
        </Container>
    </section>
      
    </>
  )
}

export default OrderSummary
