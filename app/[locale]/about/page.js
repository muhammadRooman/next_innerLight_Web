import Banner from "@/components/AboutUs/AboutBanner";  
import OurMission from "@/components/AboutUs/OurMission";  
import WhatWeOffer from "@/components/AboutUs/WhatWeOffer";  
import Commitment from "@/components/AboutUs/Commitment";  
import OurClients from "@/components/OurClients";
import Head from "@/app/[locale]/about/head"; 

export default function AboutBanner() {
    return (
      <>
       <Head/>
        <Banner />
        <OurMission />
        <WhatWeOffer />
        <Commitment />
        <OurClients /> 
      </>
    );
  }
  