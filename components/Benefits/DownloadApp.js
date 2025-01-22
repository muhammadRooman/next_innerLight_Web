import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function DownloadApp() {
    const t = useTranslations("Download");
    return (
        <>
            <section className="download_application bg-[#1796D8] md:py-[50px] md:px-[10px] xs:py-[25px] xs:px-[5px] small:py-[20px] rounded-t-10">
                <div className="2xl:container xl:container lg:container mx-auto px-5 flex items-center md:justify-between small:justify-center md:flex-nowrap flex-wrap download_btn_wrap">
                    <div className="heading-box lg:text-left text-center download_app">
                        <h2 className="xl:text-40 rtl:xl:text-[70px] md:text-[30px] xs:text-[20px] small:text-[18px] font-bold text-white max-w-[750px] arabic_heading_two">{t("download")}</h2>
                    </div>
                    <div className='btn-download flex lg:mt-0 mt-4'>
                        <Link href="https://apps.apple.com/au/app/innerlight-academy/id6670317150" target="_blank" className="mr-3 rtl:ml-14"><Image src="/AppStore.png" width={180} height={55} alt="AppStore" className='w-[90px] xl:w-[180px] lg:w-[160px] md:w-[140px] sm:w-[120px] xs:w-[100px]' /></Link>
                        <Link href="https://play.google.com/store/apps/details?id=com.arhamsoft.innerlight.innerlights&hl=en" target="_blank" className=" block"><Image src="/GooglePlay.png" width={180} height={55} alt="AppStore" className='w-[90px] xl:w-[180px] lg:w-[160px] md:w-[140px] sm:w-[120px] xs:w-[100px]' /></Link>
                    </div>
                </div>
            </section>
        </>
    );
}