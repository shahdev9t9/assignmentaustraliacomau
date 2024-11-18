import Image from 'next/image'
import React from 'react'
import email from "../public/images/Email.svg"
import Facebook from "../public/images/Facebook.svg"
import Instagram from "../public/images/Instagram.svg"
import LinkedIn from "../public/images/LinkedIn.svg"
import Twitter from "../public/images/Twitter.svg"

import { Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const Topbar = () => {
  return (
    <>
      <div className='bg-green py-2'>
        <Container>
            <Row>
                <Col>
                <div className='d-flex align-items-center justify-content-between'>
            
                    <Link href=""  className='d-flex align-items-center gap-2 text-white'>
                    <Image src={email} alt='email' />
                    <span className='f25 '>assignmentshelpaustralia.com.au</span>
                    
                    </Link>
              <p className='f25 text-white  m-0'>
              Welcome to assignmentshelpaustralia.com.au
              </p>
             <div className='d-flex gap-2'>
                <Image  src={Facebook} alt='Facebook' />
                <Image  src={Instagram} alt='Instagram' />
                <Image  src={LinkedIn} alt='LinkedIn' />
                <Image  src={Twitter} alt='Twitter' />

             </div>
                </div>
                
                </Col>
            </Row>
        </Container>
      </div>
    </>
  )
}

export default Topbar
