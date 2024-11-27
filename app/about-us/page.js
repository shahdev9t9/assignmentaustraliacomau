import AssignmentWriting from '@/components/AssignmentWriting';
import Assistance from '@/components/Assistance';
import ChooseUs from '@/components/ChooseUs';
import Cta from '@/components/Cta';
import ExpertFrame from '@/components/ExpertFrame';
import Faq from '@/components/Faq';
import Feature from '@/components/Feature';
import Form from '@/components/Form';
import Home from '@/components/Home';
import HomeReview from '@/components/HomeReview';
import KeyTopic from '@/components/KeyTopic';
import Process from '@/components/Process';
import ServiceAssignment from '@/components/ServiceAssignment';
import StudentAssignment from '@/components/StudentAssignment';
import Testimonial from '@/components/Testimonial';
import React from 'react'
import { InnerpageContent,FormContent, StudentAssignmentContent , ServiceAssignmentContent, CtaContent , Assistancecontent  } from './AboutContent';
import Innerpage from '@/components/Innerpage';


export const metadata = {
  title: "Assignment Australia  (About Page)",
  description: "",
  openGraph: {
    title: "Assignment Australia  (About Page)",
    description: "UK Dissertation Help (About Page)",
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

const page = () => {
  return (
    <>

      <Innerpage InnerpageContent={InnerpageContent} />
      <Form FormContent={FormContent} />
      <StudentAssignment StudentAssignmentContent={StudentAssignmentContent} />
      <ServiceAssignment ServiceAssignmentContent={ServiceAssignmentContent} />
      <Assistance Assistancecontent={Assistancecontent} />

      <Cta CtaContent={CtaContent} />
      <Process/>
      <HomeReview/>

     

      <ExpertFrame/>

    </>
  )
}

export default page
