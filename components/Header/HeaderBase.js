"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

const Header = ({ locale }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home"); // Default active link

  useEffect(() => {
    const language = pathname?.split('/')[1];
    localStorage.setItem('language', JSON.stringify(language));
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const t = useTranslations("NavbarLinks");
  const pathname = usePathname();
  const router = useRouter();
  const activeNavbarName = pathname.split("/").slice(2).join("/") || "";

  const handleLanguageChange = (e) => {
    const newLocale = e.target.value;
    const path = pathname.split("/").slice(2).join("/") || "";
    router.push(`/${newLocale}/${path}`, { shallow: true });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link); // Set clicked link as active
    setIsMenuOpen(false); // Close menu for mobile
  };

  return (
    <>
      <header
        className={`sticky top-0 z-20 transition-colors duration-300 ${isScrolled ? "bg-[#EBEBEB] shadow-shadow-color" : "bg-[#F7F7F7]"
          }`}
      >
        <div className="2xl:container xl:container md:container mx-auto">
          <div className="header-inner flex justify-between items-center xl:px-5 px-3 xl:py-2 md:py-2 py-2">
            {/* Logo */}
            <div className="logo">
              <Link href={`/${locale}/home`}>
                <Image
                  src="/logo.png"
                  width={108}
                  height={86}
                  alt="logo white"
                  className="brand-logo sm:w-[60px] md:w-[90px] xl:w-[106px] w-[50px] rtl:2xl:ml-28 rtl:xl:ml-24 rtl:md:ml-17"
                />
              </Link>
            </div>

            {/* Navigation */}
            <nav
              className={`ml-auto fixed top-0 left-0 w-full h-full bg-white z-10 md:relative md:bg-transparent md:w-auto md:h-auto flex flex-col md:flex-row justify-center items-center transition-transform duration-300 ${isMenuOpen
                ? "translate-x-0 bg-btn-gradient"
                : "-translate-x-full md:translate-x-0"
                }`}
            >
              {/* Close Button for Mobile */}
              <button
                className="absolute top-10 right-10 md:hidden text-black focus:outline-none"
                aria-label="Close Menu"
                onClick={toggleMenu}
              >
                <Image src="/close.svg" 
                alt="Close" 
                width={30} 
                height={30}
                className="sm:w-[18px] sm:h-[15px] w-4 h-3"
                 />
              </button>
              {/* Menu Links */}
              {["home", "about", "benefits", "contact", "event"].map((link, index) => (
               <Link
               key={index}
               href={`/${locale}/${link}`}
               className={`${activeNavbarName === link ? 'active text-[#1796D8]' : 'md:text-black text-white'} py-1.5 md:py-1 2xl:me-[88px] xl:me-[60px] md:me-[40px] sm:text-[12px] md:text-[14px] xl:text-xl rtl:lg:text-[32px] rtl:md:text-[24px] rtl:xs:text-[18px] rtl:small:text-[16px] hover:text-[#1796D8] font-medium rtl:font-black rtl:2xl:me-28 rtl:xl:me-20 rtl:lg:me-17 rtl:md:me-16`}
               onClick={() => setIsMenuOpen(false)}
               prefetch={true}
             >
                  {t(link)}
                </Link>
              ))}


            </nav>

            <div className="flex items-center">
              {/* Language Selector */}
              <div className="relative inline-block"> {/* Added a relative wrapper for positioning if needed */}
      <select
        value={locale}
        onChange={handleLanguageChange}
        className="
          rounded-md
          px-4 py-2
          bg-white dark:bg-gray-800
          border border-gray-300 dark:border-gray-600 
          text-gray-700 dark:text-gray-300 
          focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400
          shadow-sm 
          cursor-pointer
          text-sm md:text-base lg:text-lg
          w-auto 
          appearance-none 
          pr-10
          rtl:ml-5 rtl:pr-4 rtl:pl-10 
        "
      >
        <option value="en">English</option>
        <option value="ar">{t("ar")}</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-300">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
    </div>

              {/* Join Now */}
              <Link
                href="https://play.google.com/store/apps/details?id=com.arhamsoft.innerlight.innerlights&hl=en"
                target="_blank"
                className="py-2 md:px-6 px-3 text-white rounded-3xl font-medium rtl:font-black xl:text-xl md:text-[15px] sm:text-[10px] rtl:xl:text-[32px] text-[9px] bg-btn-gradient hover:bg-btn-gradient-hover ml-4 rtl:text-[12px]"
              >
                {t("download_app")}
              </Link>

              {/* Hamburger Menu for Mobile */}
              <button
                className="ml-4 md:hidden text-black focus:outline-none xl:mr-0 mr-3"
                aria-label="Toggle Menu"
                onClick={toggleMenu}
              >
                <Image
                  src={isMenuOpen ? "/close.svg" : "/menu.svg"}
                  alt="Menu"
                  width={30}
                  height={30}
                  className="sm:w-[18px] sm:h-[15px] w-4 h-3"
                />
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
