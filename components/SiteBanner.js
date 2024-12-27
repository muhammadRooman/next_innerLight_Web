"use client";
import Image from "next/image";
import { usePathname } from 'next/navigation';
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

export default function SiteBanner({SiteBannerHeader}) {
  const t = useTranslations("SiteBanner");
  const currentPath = usePathname();
  const [language, setLanguage] = useState('');

  useEffect(() => {
    const lang = currentPath.split('/')[1] || 'en'; 
   setLanguage(lang);
 }, [currentPath]);

  return (
    <section className="site-banner bg-site-banner bg-cover 2xl:min-h-[calc(997px-100px)] min-h-[697px] relative flex items-end justify-center pb-10 lg:bg-center bg-center">
      <div className="2xl:container xl:container lg:container mx-auto px-5">
        <div className="inner-container relative sm:pt-4 md:pt0">
          <div className="site-banner-content max-w-[929px] mx-auto">
            <h5 className="xl:text-40 lg:text-[30px] text-[22px] text-white font-bold text-center">{language === "en" ? SiteBannerHeader.heading_en: SiteBannerHeader.heading_ar }</h5>
            <div className="relative banner-img 2xl:min-h-[148px] sm:min-h-[120px] min-h-[60px] max-w-full">
              <Image src="/wellness.png"  alt={t("wellnessAlt")} layout="fill" className="max-w-full"  />
            </div>
            <p className="text-center text-white 2xl:text-2xl lg:text-xl">{language === "en" ? SiteBannerHeader?.description_en: SiteBannerHeader?.description_ar}</p>
          </div>
          <div className="social-icon">
            <nav className="flex items-center justify-center mt-6">
              <Link href={SiteBannerHeader?.facebook} className="min-w-14 min-h-14 rounded-full border-solid border-2 flex items-center justify-center border-info-color ease-in-out me-2 hover:bg-info-color">
                <Image src="/facebook.png" width={25} height={25} alt={t("facebookAlt")} className=""  />
              </Link>
              <Link href={SiteBannerHeader?.twitter} className="min-w-14 min-h-14 rounded-full border-solid border-2 flex items-center justify-center border-info-color ease-in-out me-2 hover:bg-info-color">
                <Image src="/twitter.png"  width={25} height={25} alt={t("twitterAlt")} className=""  />
              </Link>
              <Link href={SiteBannerHeader?.linkedin} className="min-w-14 min-h-14 rounded-full border-solid border-2 flex items-center justify-center border-info-color ease-in-out me-2 hover:bg-info-color">
                <Image src="/linkedin.png"  width={25} height={25} alt={t("linkedinAlt")} className="" />
              </Link>
              <Link href={SiteBannerHeader?.youtube} className="min-w-14 min-h-14 rounded-full border-solid border-2 flex items-center justify-center border-info-color ease-in-out me-2 hover:bg-info-color"  >
                <Image src="/playSolid.png" width={25} height={25} alt={t("playSolidAlt")} className="" />
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}
