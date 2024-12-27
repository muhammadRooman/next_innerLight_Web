"use client"
import React, { useState, useEffect } from "react";
import DownloadOurApp from "@/components/DownloadOurApp";
import { useTranslations } from "next-intl";
import "react-toastify/dist/ReactToastify.css";
import FullPageLoader from "@/components/fullPageLoader.js/FullPageLoader";

export default function ThankYou() {
  const t = useTranslations("ThankYou");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds ka timer

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);

  return (
    <>
      {isLoading ? (
       <FullPageLoader/>
      ) : (
        <div className="thankYou-wrap bg-gray-light">
          <div className="heading-box text-left lg:pt-20 pt-10">
            <h2 className="xl:text-40 lg:text-[30px] text-[25px] font-bold text-info-color text-center">
              {t("thanks_joining_us")}
            </h2>
          </div>
          <DownloadOurApp />
        </div>
      )}
    </>
  );
}

