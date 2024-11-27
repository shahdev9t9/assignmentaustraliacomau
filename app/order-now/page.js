import Innerpage from '@/components/Innerpage'
import OrderNow from '@/components/OrderNow';
import OrderSummary from '@/components/OrderSummary';
import React from 'react'
export const metadata = {
    title: "order now",
    description: "",
    openGraph: {
      title: "order now",
      description: "",
    },
    metadataBase: new URL("http://assignmentaustraliacomau/"),
    alternates: {
      canonical: "/about",
    },
    robots: {
      index: false,
      follow: false,
      nocache: true,
    },
    verification: {
      google: "",
    },
  };
  const InnerpageContent = {
    heading: "ORDER NOW",
    para: "We provide professional dissertation help in the UK. We provide our clients with original, high-quality work at an accessible price for dissertation help. Additionally, our service",
  };
const page = () => {
  return (
    <>
  <Innerpage InnerpageContent={InnerpageContent}/>
  <OrderNow/>
  <OrderSummary/>
    </>
  )
}

export default page
