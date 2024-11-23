import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import fb from "../public/images/FbICon.svg"
import InstagramICon from "../public/images/InstagramICon.svg"
import LinkedinICon from "../public/images/LinkedinICon.svg"
import phoneICon from "../public/images/phoneICon.svg"
import GmailICon from "../public/images/GmailICon.svg"
import PaymentMethod from "../public/images/PaymentMethod.webp"

import XICon from "../public/images/XICon.svg"
import Image from 'next/image'
import Link from 'next/link'
import CopyRights from './CopyRights'


const Footer = () => {
  return (
    <>
    <footer>
      <Container>
         <Row>
          <Col lg={4}>
            <p className='f20'>
            Assignment Help Malaysia is a reputable writing company offering customised academic solutions, globally. With a talented team of writers, it caters to different genres, types, and levels (college, bachelor, master, PhD, and more) of educational.
            </p>
            <p className='f14 mb-1'>
            Social channels:
            </p>
            <div className='social-icon d-flex align-items-center gap-4'>
         <Image src={fb} alt='fb' />
         <Image src={InstagramICon} alt='fb' />
         <Image src={LinkedinICon} alt='fb' />
         <Image src={XICon} alt='fb' />
            </div>
          </Col>
          <Col lg={5}>
           <div >
            <span>
            Quick Links
            </span>
            <ul>
              <li>
                <Link href="">Home</Link>
                <Link href="">About Us</Link>
                <Link href="">Reviews</Link>
                <Link href="">Pricing</Link>
                <Link href="">Blog</Link>
                <Link href="">Order Now</Link>
              </li>
            </ul>
           </div>
           <div >
            <span>
            Services
            </span>
            <ul>
              <li>
                <Link href="">Essay Writing</Link>
                <Link href="">MBA Assignment Help</Link>
                <Link href="">IT Assignment Help</Link>
       
              </li>
              <li>
                <Link href="">Law Assignment Help</Link>
                <Link href="">CIPD Assignment Help</Link>
                <Link href="">Dissertation Writing</Link>
       
              </li>
              <li>
                <Link href="">Thesis Writing</Link>
                <Link href="">Resume Writing</Link>
                <Link href="">Online Exam Helper</Link>
              </li>
            </ul>
           </div>
          </Col>
          <Col lg={3}>
           <span>Get in touch</span>
           <ul>
            <li>
              <Link href="">
              <Image src={phoneICon} alt="phoneICon" />
               <div>
                <span>PHONE
                </span>
                <p>
                +60392125887
                </p>
               </div>
              </Link>
            </li>
            <li>
              <Link href="">
              <Image src={GmailICon} alt="GmailICon" />

               <div>
                <span>PHONE
                </span>
                <p>
                +60392125887
                </p>
               </div>
              </Link>
            </li>
           </ul>
           <Image src={PaymentMethod} alt='PaymentMethod' className='payment-method' />
          </Col>
         </Row>

      </Container>
    </footer>
      <CopyRights/>
    </>
  )
}

export default Footer
