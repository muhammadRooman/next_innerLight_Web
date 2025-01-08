import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";


export default function OurMission(){
    const t = useTranslations("AboutBanner");


    return(
        <>
        <section className="xl:pt-[132px] pt-[50px] xl:pb-[94px] pb-[50px] bg-gray-light">
            <div className="2xl:container xl:container lg:container md:container mx-auto lg:max-0 px-5">
                <div className="md:grid md:grid-cols-12 aboutUs gap-6 "> 
                    <div className="col-span-8">
                        <div className="heading-box text-left rtl:text-right mb-5">
                            <h5 className="text-info-color 2xl:text-2xl md:text-[20px] xs:text-[18px] small:text-[16px] 2xl:leading-[30px] font-black rtl:2xl:text-[56px] rtl:xl:text-[40px] rtl:text-[30px] our_mission_heading arabic_heading_one">{t("about_us")}</h5>
                            <h2 className="xl:text-[40px] lg:text-[30px] md:text-[25px] xs:text-[20px] small:text-[18px] 2xl:leading-[50px] text-[25px] font-bold rtl:2xl:text-[72px] rtl:xl:text-[50px] rtl:text-[40px] arabic_heading_two">{t("transforming")}</h2>
                        </div>
                        <div className="WelcomeMessage xl:pl-19 lg:pl-16 pl-5 lg:pr-7 p-5 xl:py-7 border-solid border-2 border-[#B8E7FF] rounded-[20px]">
                          <h5 className="2xl:text-[32px] md:text-[25px] small:text-[18px] rtl:2xl:text-[40px] text-xl font-bold max-w-[727px] rtl:text-right font_40">{t("welcome_ceo")}</h5>
                          <p className='lg:text-lg xl:text-[24px] md:text-[16px] text-[14px] rtl:2xl:text-[30px] rtl:md:text-[28px] font-normal mt-7 custom_font font_32'>{t("experience_personalized")}</p>
                          <p className="text-[#343434] py-5 text-[44px] font-brittany mt-5">Issam Radha</p>
                        </div>
                        <div className="our_mission_content_wrap">
                            <h2 className="xl:text-40 lg:text-[30px] text-[24px] font-bold rtl:2xl:text-[72px] rtl:xl:text-[50px] rtl:text-[40px] arabic_heading_two">{t("our_mission")}</h2>
                            <p className='lg:text-lg xl:text-[24px] md:text-[16px] text-[14px] rtl:2xl:text-[30px] rtl:md:text-[28px] font-normal text-[#343434] our_mission_custom_font font_32'>{t("we_believe_that_true")}</p>
                            <p className='lg:text-lg xl:text-[24px] md:text-[16px] text-[14px] rtl:2xl:text-[30px] rtl:md:text-[28px] font-normal mt-4 text-[#343434] our_mission_custom_font font_32 font_bold'>{t("through_our_teachings")}</p> 
                            <p className='lg:text-lg xl:text-[24px] md:text-[16px] text-[14px] rtl:2xl:text-[30px] rtl:md:text-[28px] font-normal mt-5 text-[#343434] our_mission_custom_font font_32'>{t("we_are_committed")}</p>  
                        </div>           
                    </div>
                    <div  className="col-span-4">
                        <div className='relative xl:max-w-[371px] max-w-full min-h-[469px] shadow-shadow-color bg-white p-2 mx-auto rounded-10 my-7'>
                            <Image src="/assets/images/about/owner.png" alt="logo white" layout="fill"  className="rounded-30 object-cover p-2 custom_client" />
                        </div> 
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}