"use client";
import Image from "next/image";
import { usePathname } from 'next/navigation';
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslations } from "next-intl";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import useSWR from 'swr';

import "swiper/css/navigation";

// Import required Swiper modules
import { Pagination, Navigation } from "swiper/modules";
// Define fetcher function
const fetcher = (url) => fetch(url).then((r) => r.json());
export default function OurClients() {
  const t = useTranslations("OurClient");
  const currentPath = usePathname();
  const [language, setLanguage] = useState('');
  const [testimonialData, settTestimonialData] = useState([]);


  // Fetch cmsWeb data using SWR
  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_BASE_API}/testimonial`,
    fetcher
  );

  useEffect(() => {
    if (data) {
      settTestimonialData(data?.testimonials)
    }
    const lang = currentPath.split('/')[1] || 'en';
    setLanguage(lang);
  }, [currentPath, data]);

  return (
    <>
      {
        testimonialData.length > 0 &&
        <section className="bg-SubscriptionPlan-bg md:pt-10 md:pb-17 py-5 bg-cover bg-center">
          <div className="2xl:container xl:container lg:container mx-auto px-4">
            {/* Section Heading */}
            <div className="heading-box text-center md:mb-12 xs:mb-6 small:mb-3">
              <h5 className="text-info-color 2xl:text-3xl xl:text-2xl lg:text-xl text-[16px] sm:text-md font-black rtl:2xl:text-[56px] rtl:xl:text-[40px] rtl:text-[30px] sm:text-[20px] arabic_heading_one">{t("reviews")}</h5>
              <h2 className="xl:text-[40px] lg:text-[30px] text-[18px] font-bold rtl:2xl:text-[72px] rtl:xl:text-[50px] rtl:text-[40px] sm:text-[22px] arabic_heading_two">{t("what_our_clients_say_about_us")}</h2>
            </div>

            {/* Swiper Slider */}
            <Swiper
              pagination={{
                el: ".custom-pagination",
                type: "custom",
                renderCustom: (swiper, current, total) => {
                  return `<span className="text-lg text-[#343434] font_18">0${current}</span> / <span className="text-lg text-[#343434] font_18">0${total}</span>`;
                },
              }}
              navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }}
              modules={[Pagination, Navigation]}
              loop={true}
              className="SwiperSlder relative"
            >
              {testimonialData?.map((client, index) => (
                <SwiperSlide key={client._id}>
                  <div className="md:grid md:grid-cols-12 gap-6 items-center">
                    <div className="col-span-5">
                      <div className="relative xl:min-h-[350px] min-h-[250px] xl:mb-0 mb-9">
                        <Image
                          src={`${process.env.NEXT_PUBLIC_IMAGE_API}/${client?.image}`}
                          alt={language === "en" ? client?.name_en : client?.name_ar}
                          layout="fill"
                          className="object-cover mx-auto xl:max-w-[390px] max-w-[280px]"
                        />
                      </div>
                    </div>
                    <div className="col-span-7">
                      <div className="slider-content xl:max-w-[640px] md:max-w-[520px] max-w-full md:text-left text-center">
                        <div className="md:mb-5 mb-3 rtl:text-right">
                          <h4 className="xl:text-lg rtl:2xl:text-[32px] rtl:md:text-[28px] font-normal font_34">{language === "en" ? client?.name_en : client?.name_ar}</h4>
                          <small className="text-info-color xl:text-lg rtl:2xl:text-[25px] md:text-[20px] text-[14px] rtl:md:text-[22px] font-normal font_25">
                            {language === "en" ? client?.country_en : client?.country_ar} , {language === "en" ? client?.age_en : client?.age_ar} {t("years_old")}
                          </small>
                        </div>
                        <p className="text-lg rtl:text-right xl:text-lg md:text-[16px] small:text-[14px] rtl:2xl:text-[32px] rtl:md:text-[28px] font-normal font_32">{language === "en" ? client?.review_en : client?.review_ar}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              {/* Custom Pagination and Navigation */}
              <div className="flex justify-center items-center xl:mt-0 mt-6">
                <div className="swiper_slider_btn">
                  <button
                    className="custom-prev custom-prev-btn absolute xs:top-[44%] top-[46%] xs:translate-y-[-44%] translate-y-[-40%] left-0 z-20"
                    aria-label="Previous"
                  >
                    <Image src="/left.svg" alt="left" width={40} height={39} />
                  </button>
                  <button
                    className="custom-next custom-next-btn absolute right-0 z-20 xs:top-[44%] top-[46%] xs:translate-y-[-44%] translate-y-[-40%]"
                    aria-label="Next"
                  >
                    <Image src="/right.svg" alt="right" width={40} height={39} />
                  </button>
                </div>
                <div className="center-nav flex">
                  <button className="custom-prev" aria-label="Previous">
                    <Image src="/left.png" alt="left" width={16} height={8} />
                  </button>
                  <div className="custom-pagination text-center"></div>
                  <button className="custom-next custom-next-btn" aria-label="Next">
                    <Image src="/right.png" alt="right" width={16} height={8} />
                  </button>
                </div>
              </div>
            </Swiper>
          </div>
        </section>
      }
    </>

  );
}
