import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function WeOffer() {
    const t = useTranslations("WeOffer");
    return (
        <>
            <section className="what_we_offer">
                <div className="bg-white xl:pt-[130px] xl:pb-[126px] lg:pt-[90px] lg:pb-[90px] py-10">
                    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-5">
                        <div>
                            <div className="heading-box text-left rtl:text-right lg:pb-6 md:pb-5 xs:pb-3 pb-0 what_we_offer">
                                <h5 className="text-info-color 2xl:text-3xl xl:text-2xl lg:text-xl text-[16px] sm:text-md font-black rtl:2xl:text-[56px] rtl:xl:text-[40px] rtl:text-[30px] sm:text-[20px] arabic_heading_one">{t("we_offer")}</h5>
                                <h2 className="xl:text-[40px] lg:text-[30px] text-[18px] font-bold rtl:2xl:text-[72px] rtl:xl:text-[50px] rtl:text-[40px] sm:text-[22px] arabic_heading_two">{t("transformative")}</h2>
                            </div>
                            <p className="lg:text-lg text-sm xl:text-lg rtl:2xl:text-[30px] rtl:md:text-[28px] font-normal rtl:max-w-[680px] rtl:leading-8 mb-4 custom_font font_32 sportive_content">
                                <span className="text-info-color 2xl:text-2xl md:text-[20px] xs:text-[18px] small:text-[16px] 2xl:leading-[30px] font-black rtl:2xl:text-[56px] rtl:xl:text-[40px] rtl:text-[30px] heading_40">{t("main_holistic_healing1")} </span>{t("holistic_healing_1")}
                            </p>

                            <p className="lg:text-lg text-sm xl:text-lg rtl:2xl:text-[30px] rtl:md:text-[28px] font-normal rtl:max-w-[680px] rtl:leading-8 mb-4 custom_font font_32 sportive_content">
                                <span className="text-info-color 2xl:text-2xl md:text-[20px] xs:text-[18px] small:text-[16px] 2xl:leading-[30px] font-black rtl:2xl:text-[56px] rtl:xl:text-[40px] rtl:text-[30px] heading_40">{t("main_holistic_healing2")} </span>{t("holistic_healing_2")}
                            </p>

                            <p className="lg:text-lg text-sm xl:text-lg rtl:2xl:text-[30px] rtl:md:text-[28px] font-normal rtl:max-w-[680px] rtl:leading-8 mb-4 custom_font font_32 sportive_content">
                                <span className="text-info-color 2xl:text-2xl md:text-[20px] xs:text-[18px] small:text-[16px] 2xl:leading-[30px] font-black rtl:2xl:text-[56px] rtl:xl:text-[40px] rtl:text-[30px] heading_40">{t("main_holistic_healing3")} </span>{t("holistic_healing_3")}
                            </p>

                            <p className="lg:text-lg text-sm xl:text-lg rtl:2xl:text-[30px] rtl:md:text-[28px] font-normal rtl:max-w-[680px] rtl:leading-8 mb-4 custom_font font_32 sportive_content">
                                <span className="text-info-color 2xl:text-2xl md:text-[20px] xs:text-[18px] small:text-[16px] 2xl:leading-[30px] font-black rtl:2xl:text-[56px] rtl:xl:text-[40px] rtl:text-[30px] heading_40">{t("main_holistic_healing4")} </span>{t("holistic_healing_4")}
                            </p>
                        </div>

                        <div className="ml-auto w-full">
                            <div className='relative lg:w-full lg:min-h-[715px] min-h-[450px] w-full shadow-shadow-color bg-white p-2.5 ml-auto rounded-10 my-7 yoga_img_wrapper'>
                                <Image src="/yoga.png" alt="logo white" layout="fill" className="rounded-30 object-cover p-2.5" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}