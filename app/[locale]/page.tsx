import { useTranslations } from "next-intl";
import { getMessages } from "next-intl/server";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import LandingPage from "@/app/[locale]/home/page"; 
export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const messages: any = await getMessages({ locale });
  const title = messages.NavbarLinks.homeTitle;
  const home = messages.NavbarLinks.HomePage;
  
  
  return {
    title,
    home,
  };
}

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <>
      <LandingPage/>
      <ToastContainer />
    </>
  );
}
