import Image from 'next/image';
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaCheck } from "react-icons/fa";
import Certified from "../public/images/Certified.webp"
import Link from 'next/link';



const StudentAssignment = ({StudentAssignmentContent}) => {
  return (
    <>
    <section className='student-assignment'>
      <Container fluid className='me-0 pe-0'>
        <Row className='align-items-end'>
          <Col xl={7} >
          <div className='left-content'>

           <h2 className='f64 fw-bold'>
            {StudentAssignmentContent.heading}
       
           </h2>
           <p className='f20'>
           {StudentAssignmentContent.para1}

      
           </p>
           <p className='f20'>
           {StudentAssignmentContent.para2}


           </p>
           <ul>
           {StudentAssignmentContent.list.map((item, index) => (
            <li>
            <FaCheck />

                <span> {item.span} </span>
            </li>
                     ))}   
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

           <Image src={StudentAssignmentContent.imgRight} alt='studentRight'/>
          </div>
          </Col>

        </Row>
      </Container>
    </section>
      
    </>
  )
}

export default StudentAssignment
