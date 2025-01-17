import Image from 'next/image';
import Link from "next/link"; 
import { useTranslations } from "next-intl";  

export default function FooterBase({locale}) {
  const t = useTranslations("NavbarLinks");  
 
  return (
    <>
      <footer className="bg-[#F3F3F3] lg:pt-[84px] lg:pb-[23px] pt-[44px] pb-[15px] custom_footer">
        <div className="container mx-auto">
          <div className="header-inner mx-auto">
            <div className="footer-logo text-center">
              <Link href={`/${locale}/home`} className="inline-block">
                <Image src="/logo.png" width={220} height={174} alt="logo white" className="mx-auto md:mb-9 mb-5 lg:w-[220px] w-[140px]" />
              </Link>
            </div>
            <div className="nav-menu flex lg:mb-14 mb-8 justify-center">
              <nav className="nav_wrapper">
                <Link href={`/${locale}/home`} className="tlg:text-black text-white'} py-1.5 lg:py-1 2xl:me-[88px] xl:me-[60px] lg:me-[40px] text-base lg:text-[15px] xl:text-xl rtl:xl:text-[32px] hover:text-[#1796D8] font-medium rtl:font-black navbar_links">{t("home")}</Link>
                <Link href={`/${locale}/about`} className="tlg:text-black text-white'} py-1.5 lg:py-1 2xl:me-[88px] xl:me-[60px] lg:me-[40px] text-base lg:text-[15px] xl:text-xl rtl:xl:text-[32px] hover:text-[#1796D8] font-medium rtl:font-black navbar_links">{t("about")}</Link>
                <Link href={`/${locale}/benefits`} className="tlg:text-black text-white'} py-1.5 lg:py-1 2xl:me-[88px] xl:me-[60px] lg:me-[40px] text-base lg:text-[15px] xl:text-xl rtl:xl:text-[32px] hover:text-[#1796D8] font-medium rtl:font-black navbar_links">{t("benefits")}</Link>  
                <Link href={`/${locale}/contact`} className="tlg:text-black text-white'} py-1.5 lg:py-1 2xl:me-[88px] xl:me-[60px] lg:me-[40px] text-base lg:text-[15px] xl:text-xl rtl:xl:text-[32px] hover:text-[#1796D8] font-medium rtl:font-black navbar_links">{t("contact")}</Link>
                <Link href={`/${locale}/event`} className="tlg:text-black text-white'} py-1.5 lg:py-1 2xl:me-[88px] xl:me-[60px] lg:me-[40px] text-base lg:text-[15px] xl:text-xl rtl:xl:text-[32px] hover:text-[#1796D8] font-medium rtl:font-black navbar_links">{t("events")}</Link>
              </nav>
            </div>
            <p className="text-lg flex items-center justify-center rtl:flex-row-reverse font_32">
              <Image src="/copyright.svg" width={20} height={20} alt="logo white" className="mr-2" />
            {t("copyright_reserved_Innerlight")}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}