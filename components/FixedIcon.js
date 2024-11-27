import React from 'react'
import msgicon from '../public/images/msgicon.webp';
import whatsappicon from '../public/images/whatsappicon.webp';
import Link from 'next/link';
import Image from 'next/image';

const FixedIcon = () => {
  return (
    <>
  <div className="fixedbtnwhatsapp">
        <ul className="list-unstyled m-0">
          <li>
            <Link href="">
              <Image src={whatsappicon} className="img-fluid" alt="whatsapp" />
            </Link>
          </li>
          <li>
            <Link href="/">
              <Image src={msgicon} className="img-fluid" alt="whatsapp" />
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default FixedIcon
