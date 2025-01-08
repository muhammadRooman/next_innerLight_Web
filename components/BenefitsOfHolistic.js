"use client";
import Image from 'next/image';
import { useTranslations } from "next-intl";
export default function BenefitsOfHolistic() {
    const t = useTranslations("SiteBanner");
    const benefits = [
        {
            id: 1,
            image: "/benefitsImg1.png",
            title: t("personalization"),
            description:t("para_1")
        },
        {
            id: 2,
            image: "/benefitsImg2.png",
            title: t("community"),
            description: t("para_2")
        },
        {
            id: 3,
            image: "/benefitsImg3.png",
            title: t("accessibility"),
            description:t("para_3")
        },
        {
            id: 4,
            image: "/benefitsImg4.png",
            title: t("flexibility"),
            description: t("para_4")
        }
    ];

    return (
      <section className="commitment-wrap benefits-holistic bg-gray-light lg:pt-0 xs:pt-8 small:pt-0 pb-[40px] small:pb-0 sm:pb-[10px]">
          <div className="2xl:container xl:container lg:container mx-auto px-5">
            <div className="heading-box text-center lg:pb-6 md:pb-0 pb-5">
              <h5 className="text-info-color 2xl:text-3xl xl:text-2xl lg:text-xl text-[16px] sm:text-md font-black rtl:2xl:text-[56px] rtl:xl:text-[40px] rtl:text-[30px] sm:text-[20px]">
                {t("discoverThe")}
              </h5>
              <h2 className="xl:text-[40px] lg:text-[30px] text-[18px] font-bold rtl:2xl:text-[72px] rtl:xl:text-[50px] rtl:text-[40px] sm:text-[22px]">
                {t("benefits_of_holistic")}
              </h2>
            </div>
            <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 small:grid-cols-1 md:gap-7 small:gap-3">
              {benefits.map(benefit => (
                <div key={benefit.id} className="benefits-card-wrap xl:mb-3 mb-6">
                  <div className="benefits-card text-center">
                    <div className="relative lg:min-h-[280px] md:min-h-[200px] sm:min-h-[280px] small:min-h-[280px]">
                      <Image
                        src={benefit.image}
                        alt={benefit.title}
                        layout="fill"
                        className="object-cover rounded-10"
                      />
                    </div>
                    <div className="benefits-content xl:max-w-[307px] mx-auto">
                      <h5 className="text-info-color 2xl:text-3xl xl:text-2xl lg:text-xl text-[16px] sm:text-md font-black rtl:2xl:text-[56px] rtl:xl:text-[40px] rtl:text-[30px] sm:text-[20px]">
                        {benefit.title}
                      </h5>
                      <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] rtl:2xl:text-[30px] rtl:md:text-[28px] font-normal text-[#343434] leading-6 sm:leading-7 md:leading-8 lg:leading-9 max-w-full md:max-w-[900px]">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
    );
}
