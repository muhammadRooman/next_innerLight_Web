import EventBanner from "@/components/Event/EventBanner";  
import SpiritualEvents from "@/components/Event/SpiritualEvents";  
import SignUpNow from "@/components/Event/SignUpNow";   
import OurClients from "@/components/OurClients";  
import { WebinarApi } from "../../../components/api/WebinarApi";
import Head from "@/app/[locale]/event/head"; 

const fetchWebinarData = async () => {
  try {
    const response = await WebinarApi();
    return response;
  } catch (error) {
    return { error: "An error occurred while fetching the webinar data." };
  }
};

export default async function Event() {
  const webinarData = await fetchWebinarData();
  const webinarEvenData = webinarData.events
    return (
      <>
      <Head/>
        <EventBanner /> 
        <SpiritualEvents webinarEvenData={webinarEvenData} />
        <SignUpNow />
        <OurClients />
      </>
    );
  }
  