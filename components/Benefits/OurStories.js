import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function OurStories() {
    const t = useTranslations("OurStories");
    return (
        <>
            <section className="our-stories bg-SubscriptionPlan-bg bg-cover md:pb-20 xs:pb-14 small:pb-10">
                <div className="2xl:container xl:container lg:container mx-auto px-5">
                    <div className='book-you-button flex justify-between mb-5 items-center mt-8 text-center md:pt-16 xs:pt-10 small:pt-5'>
                        <div className="heading-box text-left rtl:text-right lg:pb-6 md:pb-0 pb-0 what_we_offer">
                            <h5 className="text-info-color 2xl:text-3xl xl:text-2xl lg:text-xl text-[16px] sm:text-md font-black rtl:2xl:text-[56px] rtl:xl:text-[40px] rtl:text-[30px] sm:text-[20px] arabic_heading_one">{t("our_stories")}</h5>
                            <h2 className="xl:text-[40px] lg:text-[30px] text-[18px] font-bold rtl:2xl:text-[72px] rtl:xl:text-[50px] rtl:text-[40px] sm:text-[22px] arabic_heading_two">{t("real_stories")}</h2>
                        </div>
                        {/* <Link href="#" className="px-4 py-1.5 sm:px-6 sm:py-2 md:px-8 md:py-3 text-white rounded-3xl font-medium rtl:xl:text-[24px] xl:text-lg lg:text-base sm:text-sm text-xs bg-btn-gradient hover:bg-btn-gradient-hover lg:mr-20 md:mr-10 sm:mr-6 mr-4 block">{t("see_all")}</Link> */}
                    </div>

                    <div className="w-full lg:w-full lg:pt-[60px] lg:pb-[60px] lg:pl-[60px] lg:pr-[60px] 2xl:pl-[112px] 2xl:pr-[112px] 2xl:pt-[84px] 2xl:pb-[84px] bg-white rounded-lg space-y-8 pt-10 sm:pt-[50px] small:pt-[20px] md:pt-[60px] pb-10 sm:pb-[50px] small:pb-[20px] md:pb-[60px] px-5 sm:px-[40px] md:px-[60px] play_content_wrap">
                        <div className="flex md:flex-row items-start md:items-start xl:justify-between justify-end border-solid border-b-2 border-[#B8E7FF] pb-6 flex-wrap signature_play_wrap">
                            <div className="md:flex">
                                <h3 className="text-info-color 2xl:text-3xl xl:text-2xl lg:text-xl text-[16px] sm:text-md font-black rtl:2xl:text-[56px] rtl:xl:text-[40px] rtl:text-[30px] sm:text-[20px] heading_40">{t("journey")}</h3>
                                <div className="singnature-text md:pl-6 rtl:md:pr-[56px]">
                                    <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] rtl:2xl:text-[30px] rtl:md:text-[28px] font-normal text-[#343434] leading-6 sm:leading-7 md:leading-8 lg:leading-9 max-w-full md:max-w-[900px] custom_font font_32">
                                        {t("journey_details")}
                                    </p>
                                    <p className="text-[#1796D8] text-[24px] font-handwriting mt-4 font-brittany">{t("sophia")}</p>
                                </div>

                            </div>
                            <div className="xl:mt-0 md:mt-0 md:pr-8 small:pr-0">
                                <button className="bg-bgBlue rounded-full cursor-default md:p-3 small:p-2 md:h-16 md:w-16 xs:h-10 xs:w-10 small:h-8 small:w-8 flex items-center justify-center">
                                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M6 4l15 8-15 8V4z" /></svg>
                                </button>
                            </div>
                        </div>


                        <div className="flex md:flex-row items-start md:items-start xl:justify-between justify-end border-solid border-b-2 border-[#B8E7FF] pb-6 flex-wrap signature_play_wrap">
                            <div className="md:flex">
                                <h3 className="text-info-color 2xl:text-3xl xl:text-2xl lg:text-xl text-[16px] sm:text-md font-black rtl:2xl:text-[56px] rtl:xl:text-[40px] rtl:text-[30px] sm:text-[20px] heading_40">{t("reconnecting")}</h3>
                                <div className="singnature-text md:pl-6 rtl:md:pr-[56px]">
                                    <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] rtl:2xl:text-[30px] rtl:md:text-[28px] font-normal text-[#343434] leading-6 sm:leading-7 md:leading-8 lg:leading-9 max-w-full md:max-w-[900px] custom_font font_32">
                                        {t("reconnecting_details")}
                                    </p>
                                    <p className="text-[#1796D8] text-[24px] font-handwriting mt-4 font-brittany">{t("micheal")}</p>
                                </div>

                            </div>
                            <div className="xl:mt-0 md:mt-0 md:pr-8 small:pr-0">
                                <button className="bg-bgBlue cursor-default rounded-full md:p-3 small:p-2 md:h-16 md:w-16 xs:h-10 xs:w-10 small:h-8 small:w-8 flex items-center justify-center">
                                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M6 4l15 8-15 8V4z" /></svg>
                                </button>
                            </div>
                        </div>

                        <div className="flex md:flex-row items-start md:items-start xl:justify-between justify-end flex-wrap signature_play_wrap">
                            <div className="md:flex">
                                <h3 className="text-info-color 2xl:text-3xl xl:text-2xl lg:text-xl text-[16px] sm:text-md font-black rtl:2xl:text-[56px] rtl:xl:text-[40px] rtl:text-[30px] sm:text-[20px] heading_40">{t("healing")}</h3>
                                <div className="singnature-text md:pl-6 rtl:md:pr-[56px]">
                                    <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] rtl:2xl:text-[30px] rtl:md:text-[28px] font-normal text-[#343434] leading-6 sm:leading-7 md:leading-8 lg:leading-9 max-w-full md:max-w-[900px] custom_font font_32">
                                        {t("healing_details")}
                                    </p>
                                    <p className="text-[#1796D8] text-[24px] font-handwriting mt-4 font-brittany">{t("sophia")}</p>
                                </div>

                            </div>
                            <div className="xl:mt-0 md:mt-0 md:pr-8 small:pr-0">
                                <button className="bg-bgBlue cursor-default rounded-full md:p-3 small:p-2 md:h-16 md:w-16 xs:h-10 xs:w-10 small:h-8 small:w-8 flex items-center justify-center">
                                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M6 4l15 8-15 8V4z" /></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}