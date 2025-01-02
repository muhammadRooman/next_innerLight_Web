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
                            <div className="heading-box text-left rtl:text-right lg:pb-6 md:pb-0 pb-0 what_we_offer">
                                <h5 className="text-info-color 2xl:text-3xl xl:text-2xl lg:text-xl text-[16px] sm:text-md font-black rtl:2xl:text-[56px] rtl:xl:text-[40px] rtl:text-[30px] sm:text-[20px]">{t("we_offer")}</h5>
                                <h2 className="xl:text-[40px] lg:text-[30px] text-[18px] font-bold rtl:2xl:text-[72px] rtl:xl:text-[50px] rtl:text-[40px] sm:text-[22px]">{t("transformative")}</h2>
                            </div>
                            <p className="lg:text-lg text-sm xl:text-lg rtl:2xl:text-[30px] rtl:md:text-[28px] font-normal xl:mb-7 mb-5 rtl:flex rtl:items-start rtl:justify-start rtl:flex-col md:leading-[32px] small:leading-[20px]">
                                <span className="text-info-color 2xl:text-[22px] xl:text-[20px] lg:text-[18px] sm:text-[16px] text-[14px] 2xl:leading-[30px] font-black rtl:2xl:text-[56px] rtl:xl:text-[40px] rtl:text-[30px]">{t("main_holistic_healing1")} </span>{t("holistic_healing_1")}
                            </p>

                            <p className="lg:text-lg text-sm xl:text-lg rtl:2xl:text-[30px] rtl:md:text-[28px] font-normal xl:mb-7 mb-5 rtl:flex rtl:items-start rtl:justify-start rtl:flex-col md:leading-[32px] small:leading-[20px]">
                                <span className="text-info-color 2xl:text-[22px] xl:text-[20px] lg:text-[18px] sm:text-[16px] text-[14px] 2xl:leading-[30px] font-black rtl:2xl:text-[56px] rtl:xl:text-[40px] rtl:text-[30px]">{t("main_holistic_healing2")} </span>{t("holistic_healing_2")}
                            </p>

                            <p className="lg:text-lg text-sm xl:text-lg rtl:2xl:text-[30px] rtl:md:text-[28px] font-normal xl:mb-7 mb-5 rtl:flex rtl:items-start rtl:justify-start rtl:flex-col md:leading-[32px] small:leading-[20px]">
                                <span className="text-info-color 2xl:text-[22px] xl:text-[20px] lg:text-[18px] sm:text-[16px] text-[14px] 2xl:leading-[30px] font-black rtl:2xl:text-[56px] rtl:xl:text-[40px] rtl:text-[30px]">{t("main_holistic_healing3")} </span>{t("holistic_healing_3")}
                            </p>

                            <p className="lg:text-lg text-sm xl:text-lg rtl:2xl:text-[30px] rtl:md:text-[28px] font-normal md:mb-7 xs:mb-5  small:mb-0 rtl:flex rtl:items-start rtl:justify-start rtl:flex-col md:leading-[32px] small:leading-[20px]">
                                <span className="text-info-color 2xl:text-[22px] xl:text-[20px] lg:text-[18px] sm:text-[16px] text-[14px] 2xl:leading-[30px] font-black rtl:2xl:text-[56px] rtl:xl:text-[40px] rtl:text-[30px]">{t("main_holistic_healing4")} </span>{t("holistic_healing_4")}
                            </p>
                        </div>

                        <div className="ml-auto w-full">
                            {/* <div className="yoga_image_wrap w-[566px] h-[715px]">
                                <img src="/yoga.png" alt="Yoga Image" className="rounded-lg shadow-md w-full" />
                            </div> */}
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