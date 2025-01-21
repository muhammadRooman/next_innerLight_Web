import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Commitment() {
    const t = useTranslations("AboutBanner");

    return (
        <>
            <section className="about-us our-value xl:pt:[132px] rtl:pt:[60px] pt-[70px] xl:pb-[94px] pb-[70px] bg-gray-light">
                <div className="2xl:container xl:container lg:container md:container mx-auto lg:max-0 px-5">
                    <div className="grid md:grid-cols-12 gap-5">
                        <div className="col-span-7 our-value-inner">
                            <div className="our-value-content-box">
                                <div className="heading-box text-left xl:mb-11 mb-8 rtl:text-right">
                                    <h5 className="text-info-color 2xl:text-2xl md:text-[20px] xs:text-[18px] small:text-[16px] small:mt-5 2xl:leading-[30px] font-black rtl:2xl:text-[56px] rtl:xl:text-[40px] rtl:text-[30px] arabic_heading_one">{t("our_values")}</h5>
                                    <h2 className="xl:text-[40px] lg:text-[30px] md:text-[25px] xs:text-[20px] small:text-[18px] 2xl:leading-[50px] text-[25px] font-bold rtl:2xl:text-[72px] rtl:xl:text-[50px] rtl:text-[40px] arabic_heading_two">{t("commitment_to_your_spiritual_growth")}</h2>
                                </div>
                                <p className="lg:text-lg text-sm xl:text-lg rtl:2xl:text-[30px] rtl:md:text-[28px] font-normal rtl:max-w-[680px] rtl:leading-8 mb-4 custom_font font_32"><span className="text-info-color 2xl:text-2xl md:text-[20px] xs:text-[18px] small:text-[16px] 2xl:leading-[30px] font-black rtl:2xl:text-[56px] rtl:xl:text-[40px] rtl:text-[30px] heading_40">{t("holistic_healing")}</span> {t("we_honor_the_interconnectedness")}</p>
                                <p className="lg:text-lg text-sm xl:text-lg rtl:2xl:text-[30px] rtl:md:text-[28px] font-normal rtl:max-w-[680px] rtl:leading-8 mb-4 custom_font font_32"><span className="text-info-color 2xl:text-2xl md:text-[20px] xs:text-[18px] small:text-[16px] 2xl:leading-[30px] font-black rtl:2xl:text-[56px] rtl:xl:text-[40px] rtl:text-[30px] heading_40">{t("empathy_&_compassion")}</span>  {t("spi_we_listen_with_open")}</p>
                                <p className="lg:text-lg text-sm xl:text-lg rtl:2xl:text-[30px] rtl:md:text-[28px] font-normal rtl:max-w-[680px] rtl:leading-8 mb-4 custom_font font_32"><span className="text-info-color 2xl:text-2xl md:text-[20px] xs:text-[18px] small:text-[16px] 2xl:leading-[30px] font-black rtl:2xl:text-[56px] rtl:xl:text-[40px] rtl:text-[30px] heading_40"> {t("growth_impowerment")}</span> {t("faith_we_listen_with_open")}</p>
                                <p className="lg:text-lg text-sm xl:text-lg rtl:2xl:text-[30px] rtl:md:text-[28px] font-normal rtl:max-w-[680px] rtl:leading-8 mb-4 custom_font font_32"><span className="text-info-color 2xl:text-2xl md:text-[20px] xs:text-[18px] small:text-[16px] 2xl:leading-[30px] font-black rtl:2xl:text-[56px] rtl:xl:text-[40px] rtl:text-[30px] heading_40"> {t("mindfulness_&_presence")}</span> {t("connection_we_listen_with_open")}</p>
                                <p className="lg:text-lg text-sm xl:text-lg rtl:2xl:text-[30px] rtl:md:text-[28px] font-normal rtl:max-w-[680px] rtl:leading-8 mb-4 custom_font font_32"><span className="text-info-color 2xl:text-2xl md:text-[20px] xs:text-[18px] small:text-[16px] 2xl:leading-[30px] font-black rtl:2xl:text-[56px] rtl:xl:text-[40px] rtl:text-[30px] heading_40"> {t("divine_mercy")}</span> {t("divine_mercy_description")}</p>
                                <p className="lg:text-lg text-sm xl:text-lg rtl:2xl:text-[30px] rtl:md:text-[28px] font-normal rtl:max-w-[680px] rtl:leading-8 mb-4 custom_font font_32"><span className="text-info-color 2xl:text-2xl md:text-[20px] xs:text-[18px] small:text-[16px] 2xl:leading-[30px] font-black rtl:2xl:text-[56px] rtl:xl:text-[40px] rtl:text-[30px] heading_40"> {t("remembrance_and_ronnection")}</span> {t("remembrance_and_ronnection_description")}</p>
                                <p className="lg:text-lg text-sm xl:text-lg rtl:2xl:text-[30px] rtl:md:text-[28px] font-normal rtl:max-w-[680px] rtl:leading-8 mb-4 custom_font font_32"><span className="text-info-color 2xl:text-2xl md:text-[20px] xs:text-[18px] small:text-[16px] 2xl:leading-[30px] font-black rtl:2xl:text-[56px] rtl:xl:text-[40px] rtl:text-[30px] heading_40"> {t("self_development")}</span> {t("self_development_description")}</p>
                            </div>
                        </div>
                        <div className="col-span-5 nurturing_wrap">
                            <div className="nurturing-img relative lg:min-h-[722px] min-h-[500px] max-w-[634px] z-10">
                            </div>
                            <p className="2xl:text-2xl rtl:2xl:text-[40px] max-w-[600px] rtl:leading-[36px] font-semibold md:text-[18px] text-[16px] text-[#753892] my-5 appstore_heading">{t("connect_with_compassionate")}</p>
                            <div className='btn-download flex'>
                                <Link href="https://apps.apple.com/au/app/innerlight-academy/id6670317150 " target="_blank" className="mr-3"><Image src="/AppStore.png" width={180} height={55} alt="AppStore" className='' /></Link>
                                <Link href="https://play.google.com/store/apps/details?id=com.arhamsoft.innerlight.innerlights&hl=en" target="_blank" className="rtl:mr-5 block"><Image src="/GooglePlay.png" width={180} height={55} alt="AppStore" className='' /></Link>
                            </div>
                        </div>
                    </div>
                    <div className="comitment-img relative xl:min-h-[484px] md:min-h-[350px] xs:min-h-[280px] min-h-[180px]">
                        <Image src="/assets/images/about/Commitment.png" alt="Commitment" layout="fill" className="object-contain" />
                    </div>
                </div>
            </section>
        </>
    )
}