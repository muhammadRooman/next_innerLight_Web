import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";


export default function WhatWeOffer() {
  const t = useTranslations("AboutBanner");

  // Data for the cards
  const offerings = [
    {
      title: t("spiritual_resources"),
      image: "/assets/images/about/SpiritualResources.png",
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.",
    },
    {
      title: t("personalized_guidance"),
      image: "/assets/images/about/PersonalizedGuidance.png",
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.",
    },
    {
      title: t("online_courses_and_workshops"),
      image: "/assets/images/about/OnlineCourses.png",
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.",
    },
  ];

  return (
    <section className="WhatWeOffer xl:pt-[107px] rtl:xl:pt-[60px] pb-12 pt-[50px] bg-SubscriptionPlan-bg bg-cover">
      <div className="2xl:container xl:container lg:container md:container mx-auto lg:max-0 px-5">
        <div className="heading-box text-center lg:mb-20 md:mb-20 mb-10 xl:max-w-[1087px] md:max-w-[800px] max-w-[100%] ms-auto me-auto">
          <h5 className="text-info-color 2xl:text-2xl md:text-[20px] xs:text-[18px] small:text-[16px] 2xl:leading-[30px] font-black rtl:2xl:text-[56px] rtl:xl:text-[40px] rtl:text-[30px] arabic_heading_one">{t("innelight")}</h5>
          <h2 className="xl:text-[40px] lg:text-[30px] md:text-[25px] xs:text-[20px] small:text-[18px] 2xl:leading-[50px] text-[25px] font-bold rtl:2xl:text-[72px] rtl:xl:text-[50px] rtl:text-[40px] arabic_heading_two">{t("what_we_offer")}</h2>
          <p className="text-lg xl:text-2xl md:max-w-[950px] rtl:xl:text-[40px] rtl:max-w-[950px] rtl:mx-auto rtl:xl:leading-10 font-normal mb-4 mt-5 font_40">{t("experience_personalized")}</p>
        </div>
        <div className="grid xl:grid-cols-3 md:grid-cols-3 xs:grid-cols-2 small:grid-cols-1 gap-7 lg:mt-28 min-h-[430px]">
          {offerings.map((offering, index) => (
            <div
              key={index}
              className="WhatWeOffer-card group shadow-shadow-color bg-white rounded-md relative transition-all duration-300 h-[max-content]"
            >
              <div className="WhatWeOffer-img shadow-shadow-color">
                <Image
                  src={offering.image}
                  className="rounded-[10px]"
                  fill
                  alt={offering.title}
                />
              </div>
              <div className="WhatWeOffer-content lg:p-6 p-5">
                <h5 className="text-info-color 2xl:text-2xl md:text-[20px] xs:text-[18px] small:text-[16px] 2xl:leading-[30px] font-black rtl:2xl:text-[56px] rtl:xl:text-[40px] rtl:text-[30px] heading_40">{offering.title}</h5>
                <div className="hide-content max-h-0 overflow-hidden transition-[max-height] duration-300 ease-in-out group-hover:max-h-40">
                  <p className="lg:text-lg text-sm xl:text-lg rtl:2xl:text-[30px] rtl:md:text-[28px] font-normal font_32">{offering.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
