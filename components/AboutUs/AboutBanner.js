import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";


export default function AboutBanner(){
    const t = useTranslations("AboutBanner");

    return(
        <>
        <section className="site-banner about-banner bg-cover bg-center xl:min-h-[800px] min-h-[350px] relative flex items-center justify-start pb-10 ">
            <div className="2xl:container xl:container lg:container md:container xs:container mx-auto lg:max-0  px-5">
                <div className="inner-container relative sm:pt-4 md:pt0">
                    <div className="site-banner-content max-w-[582px] ml-0 rtl:text-right"> 
                        <h5 className="xl:text-40 lg:text-[30px] md:text-[25px] text-[18px] lg:leading-[50px] md:leading-[40px] xs:leading-[30px] leading-5 text-info-color font-bold text-left rtl:xl:text-[70px] rtl:leading-[86px] rtl:text-right">{t("who_we_are")}</h5>  
                        <h5 className="xl:text-50 lg:text-[40px] md:text-[30px] text-[20px] xl:max-w-[560px] md:max-w-[350px] max-w-[250px] text-white font-bold text-left rtl:text-[80px] rtl:leading-[99px] rtl:text-right xl:leading-[63px] lg:leading-[46px] mb-4">{t("nurturing")}</h5>  
                        <p className="text-left text-white 2xl:text-2xl xl:max-w-[580px] md:max-w-[350px] max-w-[350px] rtl:text-[40px] rtl:leading-[40px] rtl:text-right lg:text-xl mt-5">{t("through_holistic")}</p>
                        <div className="btn-wrap mt-12">
                        <Link href="https://play.google.com/store/apps/details?id=com.arhamsoft.innerlight.innerlights&hl=en" target="_blank" className="py-[7px] px-[20px] xs:py-[12px] xs:px-[30px] md:py-[14px] md:px-[45px] lg:py-[17px] lg:px-[55px] text-white rounded-3xl font-medium bg-btn-gradient hover:bg-btn-gradient-hover">{t("download_app")}</Link>
                        </div>
                    </div>   
                </div>
            </div>
        </section>
        </>
    )
}

 