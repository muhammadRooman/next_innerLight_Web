"use client";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import FullPageLoader from "@/components/fullPageLoader.js/FullPageLoader";
import "react-toastify/dist/ReactToastify.css";

export default function SpiritualCard({ webinarEvenData }) {
  const t = useTranslations("SpiritualCard");
  const currentPath = usePathname();
  const router = useRouter();
  const [language, setLanguage] = useState("");
  const [loading, setLoading] = useState(true);
  const [visibleData, setVisibleData] = useState([]); // State for currently visible data
  const [currentPage, setCurrentPage] = useState(0); // Current page for pagination
  const itemsPerPage = 3; // Number of items per page
  const token = localStorage.getItem("authToken");

  useEffect(() => {
    const lang = currentPath.split("/")[1] || "en";
    setLanguage(lang);
    setLoading(true);
    const loaderTimeout = setTimeout(() => setLoading(false), 500); // Simulate loader delay
    return () => clearTimeout(loaderTimeout);
  }, [currentPath]);

  console.log("webinarEvenData",webinarEvenData);
  
  // useEffect(() => {
  //   // Calculate data to display based on current page
  //   const reversedData = webinarEvenData?.slice()?.reverse();
  //   const activeEvents = reversedData?.filter(event => event.status === true);
  //   const startIndex = currentPage * itemsPerPage;
  //   const endIndex = startIndex + itemsPerPage;
    
  //   // setVisibleData(webinarEvenData.slice(0, endIndex));
  //   setVisibleData(reversedData?.slice(0, endIndex));
  // }, [currentPage, webinarEvenData]);

  useEffect(() => {
    // Calculate data to display based on current page
    const reversedData = webinarEvenData?.slice()?.reverse();

    // Filter the events where status is true and type is "free"
    const filteredEvents = reversedData?.filter(
      (event) => event.status === true // You can modify this condition as needed
    );

    // Log filtered events for debugging
    console.log("Filtered Events:", filteredEvents);

    if (filteredEvents?.length === 0) {
      // Display a message if no events match the criteria
      setVisibleData([]);
    } else {
      const startIndex = currentPage * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;

      // Update visible data based on pagination
      setVisibleData(filteredEvents?.slice(0, endIndex));
    }
  }, [currentPage, webinarEvenData]);

  if (loading) {
    return <FullPageLoader />;
  }

  const truncateText = (text) => {
    if (!text) return "";
    const words = text.split(" ");
    return words.length > 40 ? words.slice(0, 40).join(" ") + "..." : text;
  };

   // Check if there's more data available for pagination
   const hasMoreData = webinarEvenData?.filter(
    (event) => event.status === true
  ).length > visibleData?.length;

  return (
    <>
      <section className="bg-[#EFEFEF] relative flex items-center justify-start lg:pt-4 lg:pb-14 events_blogs">
        <div className="2xl:container xl:container lg:container md:container xs:container mx-auto lg:max-0 px-5 evnets_wrap">
          {visibleData?.map((event, index) => (
            <div
              key={index}
              className="blog-wrap flex-col md:flex-row flex gap-5 pt-10 pb-10 border-b-2 border-[#D0D0D0] last:border-0 first:pt-0"
            >
              {/* {/ Date Card /} */}
              <div className="date-wrap flex-wrap md:flex-nowrap w-[161px] h-[188px] bg-white rounded-10 flex justify-center items-center shadow-shadow-color3 xl:flex hidden">
                <h1 className="xl:text-40 lg:text-[30px] text-[25px] font-bold leading-[46px] text-center text-[#0C0101]">
                  {new Date(event.date).getDate()}
                  <span className="block">
                    {" "}
                    {new Date(event.date)
                      .toLocaleString(language === "en" ? "en-US" : "ar", {
                        month: "short",
                      })
                      .toUpperCase()}
                  </span>
                </h1>
              </div>
              {/* {/ Image Card /} */}
              <div
                className={`bg-center blog-image h-[280px] md:h-auto md:min-h-full md:flex-1 flex justify-center items-end rounded-10 overflow-hidden p-5 ${event.image} bg-cover relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-b before:from-[#FFFFFF00] before:via-[#00000019] before:to-[#000000C6] before:opacity-100 before:content-['']`}
              >
                <Image
                  src={`${process.env.NEXT_PUBLIC_IMAGE_API}/${event?.thumbnailPic}`}
                  alt={language === "en" ? event?.name : event?.name_ar}
                  layout="fill"
                  className="object-cover mx-auto w-full"
                />
                <div className="date-wrap w-[100px] h-[100px] bg-white rounded-10 flex justify-center items-center shadow-shadow-color3 xl:hidden lg:flex absolute top-3 left-3">
                  <h1 className="xl:text-40 lg:text-[20px] text-[18px] font-bold lg:leading-[25px] leading-6  text-center text-[#0C0101]">
                  
                       {new Date(event.date).getDate()}
                    <span className="block"> {new Date(event.date)
                      .toLocaleString(language === "en" ? "en-US" : "ar", {
                        month: "short",
                      })
                      .toUpperCase()}</span>
                  </h1>
                </div>
              </div>
              {/* {/ Content Card /} */}
              <div className="blog-card-content flex-1 xl:max-w-[calc(100%-541px)] lg:max-w-[calc(100%-400px)]  max-w-[100%] shadow-color bg-white rounded-10 py-8 xl:px-12 p-6">
                <h4 className="text-[#343434] md:text-[32px] xs:text-[24px] small:text-[18px] rtl:2xl:text-[40px] font-bold max-w-[727px] rtl:text-right heading_40">
                  {language === "en" ? event?.name : event?.name_ar}
                </h4>
                <div className="shap bg-shap-bg max-w-[262.97px] bg-no-repeat rtl:rotate-[180deg] min-h-[42px] text-center flex items-center justify-center xl:my-7 my-5">
                  <p className="mt-0 text-white rtl:xl:text-[30px] md:text-lg rtl:rotate-[180deg] px-2 font_28">
                  {t(event.type)}
                  </p>
                </div>
                <p className="md:text-lg text-sm md:leading-[28px] rtl:2xl:text-[32px] rtl:max-w-[750px] rtl:md:text-[28px] font-normal font_32">
                  {" "}
                  {language === "en"
                    ? truncateText(event?.shortDescription)
                    : truncateText(event?.shortDescription_ar)}
                </p>
                <div className="btn-wrap md:mt-[60px] xs:mt-[40px] small:mt-[20px]">
                  <button
                    onClick={() =>
                      router.push(`/${language}/event/${event._id}`)
                    }
                    className="py-2 md:px-10 xs:px-6 small:px-5 text-white rounded-3xl font-medium rtl:font-black xl:text-xl rtl:xl:text-[32px] text-[12px] bg-btn-gradient hover:bg-btn-gradient-hover lg:ml-4 rtl:text-[12px]"
                  >
                    {t("detail")}
                  </button>
                </div>
              </div>
            </div>
          ))}
          {/* {/ Show "More" button only if data is more than current visible data /} */}
          {hasMoreData && (
            <div className="flex justify-center md:text-[18px] xs:text-[16px] small:text-[14px] mt-4 hover:text-blue-500">
              <button
                className="bg-primary text-black py-2 px-4 rtl:xl:text-[32px] rtl:md:[26px] rounded text-center hover:text-blue-500"
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                {t("show_more")}
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
