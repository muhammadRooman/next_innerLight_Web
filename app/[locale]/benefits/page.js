import BenefitsBanner from "@/components/Benefits/BenefitsBanner"; 
import BenefitsOfHolistic from "@/components/BenefitsOfHolistic"; 
import OurStories from "@/components/Benefits/OurStories";
import WeOffer from "@/components/Benefits/WeOffer";
import DownloadApp from "@/components/Benefits/DownloadApp";
import OurClients from "@/components/OurClients"; 
import Head from "@/app/[locale]/benefits/head"; // Import DefaultTags component

// app/aboutus/page.js
export default function Benefits() {
    return (
        <>
        <Head/>
            <BenefitsBanner />
            <div className='lg:pt-20 pt-4 pb-0 bg-grey-light'>
              <BenefitsOfHolistic  />
            </div>
            <OurStories />
            <WeOffer /> 
            <DownloadApp />
            <OurClients /> 
        </>
    );
}
