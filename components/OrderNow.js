import Link from 'next/link'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const OrderNow = () => {
  return (
    <>
    <section className='order_now'>
        <Container>
            <Row className='text-center justify-content-center align-items-center mb-4'>
                <Col lg={10}>
                <h3>Our Reviews Assignment Help In Austrila</h3>
                </Col>
            </Row>
            <Row>
                <Col lg={8}>
                <form>
                    <div>
                        <label>Paper Type</label>
                        <select>
                            <option>Select Paper Type</option>
                        </select>
                    </div>
                    <div>
                        <label>Select Document</label>
                        <select>
                            <option>Select Academic paper</option>
                        </select>
                    </div>
                    <div>
                        <label>Subject</label>
                        <select>
                            <option>Please Select</option>
                        </select>
                    </div>
                    <div>
                        <label>Academic Level</label>
                        <select>
                            <option>Select Level</option>
                        </select>
                    </div>
                    <div>
                        <label>Referencing Style</label>
                        <select>
                            <option>Referencing Style</option>
                        </select>
                    </div>
                    <div>
                        <label>No of Pages</label>
                        <select>
                            <option>No of Pages</option>
                        </select>
                    </div>
                    <div>
                        <label>Deadline</label>
                        <select>
                            <option>Deadline</option>
                        </select>
                    </div>
                    <div>
                        <label>Details</label>
                        <textarea>Type Message</textarea>
                    </div>
                </form>
                </Col>
                <Col lg={4}>
                 <form className="form2">
                    <div className="files">
                        <label>Upload File</label>
                        <input type='file' />
                        <label>Upload File</label>
                        <input type='file' />
                        <label>Upload File</label>
                        <input type='file' />
                    </div>
                    <div className='d-block'>
                      <label>Your Full Name</label>
                      <input type="text" placeholder='Your Name' />
                    </div>
                    <div className='d-block'>
                      <label>Countries</label>
                      <select>
                        <option>Australia</option>
                      </select>
                    </div>
                    <div className='d-block'>
                      <label>Your Email</label>
                      <input type="email" placeholder='test@example.com' />
                    </div>
                    <div className='d-block'>
                      <label>Your Phone No.</label>
                      <input type="number" placeholder='Your Phone No.' />
                    </div>
                   <div>
                    <input type='checkbox'  />
                    <span className='txt-white'>I have accepted your Terms & Conditions</span>
                   </div>
                 <Link href="" className='submit-btn'>Submit Now</Link>
                 </form>

                </Col>
            </Row>
        </Container>
    </section>
      
    </>
  )
}

export default OrderNow
