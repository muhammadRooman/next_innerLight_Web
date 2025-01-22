import BenefitsBanner from "@/components/Benefits/BenefitsBanner"; 
import BenefitsOfHolistic from "@/components/BenefitsOfHolistic"; 
import OurStories from "@/components/Benefits/OurStories";
import WeOffer from "@/components/Benefits/WeOffer";
import DownloadApp from "@/components/Benefits/DownloadApp";
import OurClients from "@/components/OurClients"; 
import Head from "@/app/[locale]/benefits/head"; 

export default function Benefits() {
    return (
        <>
        <Head/>
            <BenefitsBanner />
            <div className='bg-grey-light'>
              <BenefitsOfHolistic  />
            </div>
            <OurStories />
            <WeOffer /> 
            <DownloadApp />
            <OurClients /> 
        </>
    );
}
