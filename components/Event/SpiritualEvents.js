import SpiritualCard from '@/components/Event/SpiritualCard'
import { useTranslations } from "next-intl";

export default function SpiritualEvents({webinarEvenData}){
    const t = useTranslations("EventBanner");

    return(
        <>
        <section className=" bg-[#EFEFEF] relative md:flex items-center justify-start lg:pt-10 md:pt-8 xs:py-7 small:pt-6 event_banner_content">
            <div className="2xl:container xl:container lg:container md:container xs:container mx-auto lg:max-0 px-5">
                <div className="heading-box text-center">
                    <h5 className="text-info-color 2xl:text-3xl xl:text-2xl lg:text-xl text-[16px] sm:text-md font-black rtl:2xl:text-[56px] rtl:xl:text-[40px] rtl:text-[30px] sm:text-[20px] arabic_heading_one">{t("connect_and_grow")}</h5>
                    <h2 className="xl:text-[40px] lg:text-[30px] text-[18px] font-bold rtl:2xl:text-[72px] rtl:xl:text-[50px] rtl:text-[40px] sm:text-[22px] arabic_heading_two">{t("spiritual_events")}</h2>
                </div>
            </div>
        </section>
                <SpiritualCard webinarEvenData = {webinarEvenData}/>
        </>
    )
}