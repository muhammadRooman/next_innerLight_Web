import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function BenefitsBanner() {
    const t = useTranslations("BenifitsBanner");
    return (
        <>
            <section className="site-banner benefits-banner about-banner relative bg-cover xl:min-h-[800px] md:min-h-[500px] xs:min-h-[400px] small:min-h-[300px] flex items-center small:pb-0 xs:pb-10 lg:bg-center bg-center">
                <div className="2xl:container xl:container lg:container md:container xs:container md:mx-auto lg:max-0 px-5">
                    <div className="inner-container relative sm:pt-4 md:pt0">
                        <div className="site-banner-content benefits_banner max-w-[582px] rtl:max-w-[725px] ml-0 rtl:text-right bnenfits_banner"> 
                            <h1 className="xl:text-40 lg:text-[30px] md:text-[25px] text-[18px] lg:leading-[50px] md:leading-[40px] xs:leading-[30px] leading-5 text-info-color font-bold text-left rtl:md:text-[70px] rtl:xs:text-[40px] rtl:small:text-[30px] rtl:md:leading-[86px] rtl:xs:leading-[40px] rtl:small:leading-[25px] rtl:text-right">{t("benefits")}</h1>
                            <h5 className="xl:text-50 lg:text-[40px] md:text-[30px] text-[20px] md:max-w-[599px] xs:max-w-[400px] small:max-w-[300px] rtl:lg:max-w-[725px] rtl:md:max-w-[525px] rtl:xs:max-w-[340px] rtl:small:max-w-[190px] text-white font-bold text-left rtl:lg:text-[80px] rtl:md:text-[60px] rtl:xs:text-[40px] rtl:small:text-[24px] xl:leading-[63px] lg:leading-[46px] rtl:text-right rtl:md:leading-[70px] rtl:xs:leading-[45px] rtl:small:leading-[30px] mb-4">{t("unlock")}</h5>
                            <p className="text-left text-white 2xl:text-2xl md:text-[20px] xs:text-[16px] small:text-[14px] xl:max-w-[580px] md:max-w-[490px] max-w-[350px] rtl:2xl:text-[40px] rtl:md:text-[30px] rtl:xs:text-[20px] rtl:small:text-[18px] rtl:leading-[40px] rtl:text-right mt-5">{t("through_holistic")}</p>
                            <div className="btn-wrap md:mt-[60px] xs:mt-[40px] small:mt-[20px]">
                            <Link href="https://play.google.com/store/apps/details?id=com.arhamsoft.innerlight.innerlights&hl=en" target="_blank" className="py-[7px] px-[20px] xs:py-[12px] xs:px-[30px] md:py-[14px] md:px-[45px] lg:py-[17px] lg:px-[55px] text-white rounded-3xl font-medium bg-btn-gradient hover:bg-btn-gradient-hover">{t("download_app")}</Link>
                            </div>
                        </div>  
                    </div>
                </div>  
            </section>
        </>
    );
}