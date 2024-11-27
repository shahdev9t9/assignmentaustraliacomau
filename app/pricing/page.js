import personlized from "../../public/images/personalized.svg";
import guaranteed from "../../public/images/guaranteed.svg";
import subject from "../../public/images/subject.svg";
import teamMember from "../../public/images/teamMember.webp";
import Innerpage from "@/components/Innerpage";
import ServiceAssignment from "@/components/ServiceAssignment";
import PricePlan from "@/components/PricePlan";

export const metadata = {
  title: "pricing",
  description: "",
  openGraph: {
    title: "pricing",
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
  heading: "PRICING",
  para: "We provide professional dissertation help in the UK. We provide our clients with original, high-quality work at an accessible price for dissertation help. Additionally, our service",
};
const ServiceAssignmentContent = {
  heading:
    "Why students order last minute assistance with assignments from usa",
  list1: [
    {
      icon: personlized,
      span: "Personalized Assistanc",
      content:
        "We provide professional dissertation help in the UK. We provide our clients with original, high-quality work at a naccessible price for dissertation help.",
    },
    {
      icon: guaranteed,
      span: "Personalized Assistanc",
      content:
        "We provide professional dissertation help in the UK. We provide our clients with original, high-quality work at a naccessible price for dissertation help.",
    },
    {
      icon: subject,
      span: "Personalized Assistanc",
      content:
        "We provide professional dissertation help in the UK. We provide our clients with original, high-quality work at a naccessible price for dissertation help.",
    },
  ],
  teamimg: teamMember,
  list2: [
    {
      icon: personlized,
      span: "Personalized Assistanc",
      content:
        "We provide professional dissertation help in the UK. We provide our clients with original, high-quality work at a naccessible price for dissertation help.",
    },
    {
      icon: guaranteed,
      span: "Personalized Assistanc",
      content:
        "We provide professional dissertation help in the UK. We provide our clients with original, high-quality work at a naccessible price for dissertation help.",
    },
    {
      icon: subject,
      span: "Personalized Assistanc",
      content:
        "We provide professional dissertation help in the UK. We provide our clients with original, high-quality work at a naccessible price for dissertation help.",
    },
  ],
};

const page = () => {
  return (
    <>
      <Innerpage InnerpageContent={InnerpageContent} />
      <ServiceAssignment ServiceAssignmentContent={ServiceAssignmentContent} />
      <PricePlan/>
    </>
  );
};

export default page;
