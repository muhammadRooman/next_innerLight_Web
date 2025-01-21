"use client";
import { useEffect, useState,useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import FullPageLoader from "../fullPageLoader.js/FullPageLoader";
import { CgProfile } from "react-icons/cg";
import { IoMdLogOut } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { useAuth } from "../../app/context/AuthContext";


const Header = ({ locale }) => {
  const { authState, signIn, signOut ,loading } = useAuth();
  const t = useTranslations("NavbarLinks");
  const pathname = usePathname();
  const currentPath = usePathname();
  const router = useRouter();
  const dropdownRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [language, setLanguage] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [loader, setLoader] = useState(false);
  const activeNavbarName = pathname.split("/").slice(2).join("/") || "";
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check if the authToken exists
  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    setIsAuthenticated(authToken !== null);
  }, []);


  useEffect(() => {
    const lang = currentPath.split("/")[1] || "en";
    setLanguage(lang);
  }, [currentPath]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuItemClick = (action) => {
    if (action === "signin") {
      setLoader(true);
      router.push(`/${language}/signin`);
      setLoader(false);
    } else if (action === "logout") {
      setShowModal(true); 
    }
    setIsOpen(false); 
  };

  const confirmLogout = () => {
    signOut();
    setShowModal(false); 
    router.push(`/${language}/signup`);
  };

  const handleLanguageChange = (e) => {
    const newLocale = e.target.value;
    const path = pathname.split("/").slice(2).join("/") || "";
    router.push(`/${newLocale}/${path}`, { shallow: true });
  };

  const cancelLogout = () => {
    setShowModal(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const language = pathname?.split("/")[1];
    localStorage.setItem("language", JSON.stringify(language));
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

   useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false); 
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (loader) {
    return <FullPageLoader />;
  }

  return (
    <>
      <header
        className={`sticky top-0 z-20 transition-colors duration-300 ${
          isScrolled ? "bg-[#EBEBEB] shadow-shadow-color" : "bg-[#F7F7F7]"
        }`}
      >
        <div className="2xl:container xl:container md:container mx-auto custom_container">
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
              className={`ml-auto fixed top-0 left-0 w-full h-full bg-white z-10 md:relative md:bg-transparent md:w-auto md:h-auto flex flex-col md:flex-row justify-center items-center transition-transform duration-300 ${
                isMenuOpen
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
                <Image
                  src="/close.svg"
                  alt="Close"
                  width={30}
                  height={30}
                  className="sm:w-[18px] sm:h-[15px] w-4 h-3"
                />
              </button>
              {/* Menu Links */}
              {["home", "about", "benefits", "contact", "event"].map(
                (link, index) => (
                  <Link
                    key={index}
                    href={`/${locale}/${link}`}
                    className={`${
                      activeNavbarName === link
                        ? "active text-[#1796D8]"
                        : "md:text-black text-white"
                    } py-1.5 md:py-1 2xl:me-[88px] xl:me-[60px] md:me-[40px] sm:text-[12px] md:text-[15px] xl:text-xl rtl:lg:text-[32px] rtl:md:text-[24px] rtl:xs:text-[18px] rtl:small:text-[16px] hover:text-[#1796D8] font-medium rtl:font-black rtl:2xl:me-28 rtl:xl:me-20 rtl:lg:me-17 rtl:md:me-16 navbar_links`}
                    onClick={() => setIsMenuOpen(false)}
                    prefetch={true}
                  >
                    {t(link)}
                  </Link>
                )
              )}
            </nav>

            <div className="flex items-center">
              {/* Language Selector */}
              <div className="relative inline-block">
                {" "}
                {/* Added a relative wrapper for positioning if needed */}
                <select
                  value={locale}
                  onChange={handleLanguageChange}
                  className="
                rounded-md
                px-4 py-2
                bg-white
                border border-gray-300 dark:border-gray-600 
                text-black
                focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400
                shadow-sm 
                cursor-pointer
                text-sm md:text-base lg:text-lg
                w-auto 
                appearance-none 
                pr-10
                rtl:ml-5 rtl:pr-4 rtl:pl-10 custom_select
              "
                >
                  <option value="en">English</option>
                  <option value="ar">{t("ar")}</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-black">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>

              {/* Join Now */}
              <div className="download_app_btn">
                <Link
                  href="https://play.google.com/store/apps/details?id=com.arhamsoft.innerlight.innerlights&hl=en"
                  target="_blank"
                  className="py-2 md:px-6 px-3 text-white rounded-3xl font-medium rtl:font-black xl:text-xl md:text-[15px] sm:text-[10px] rtl:xl:text-[32px] text-[9px] bg-btn-gradient hover:bg-btn-gradient-hover ml-4 rtl:text-[12px]"
                >
                  {t("download_app")}
                </Link>
              </div>

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
              {/* Profile */}
              {
                loading ?  <div className="profile_active_unActive">
                <div ref={dropdownRef}>
                  <div
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    {/* Skeleton Loader */}
                    <div className="flex items-center justify-center">
                      <div className="bg-gray-300 rounded-full animate-pulse w-32 h-10"></div>
                    </div>
                  </div>
                </div>
              </div>:  <div className="relative inline-block text-left">
                <div className="profile_active_unActive">
              <div ref={dropdownRef} >
                    <div
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                    >
                      {/* Conditional rendering for Signin or Logout */}
                      
                      {authState.isAuthenticated ? (
                        <button 
                          style={{ display: "flex", alignItems: "center"}}
                          className="flex items-center justify-center bg-gray-200 rounded-full p-2 hover:bg-gray-300"
                          role="menuitem"
                          onClick={() => handleMenuItemClick("logout")}
                        >
                           
                           <IoMdLogOut style={{ color: "red" }} className="h-6 w-6 text-gray-700" />{" "}
                          <div  className="signin_text pl-3">
                          {t("logout")}
                          </div>                 
                         </button>
                      ) : (
                        <button
                        style={{ display: "flex", alignItems: "center"}} 
                        className="flex items-center justify-center bg-gray-200 rounded-full p-2 hover:bg-gray-300"
                          role="menuitem"
                          onClick={() => handleMenuItemClick("signin")}
                        >                      
                        <CgProfile style={{ color: "green" }} className="h-6 w-6 text-gray-700" />
                        <div className="signin_text pl-3">
                          {t("signin")}
                        </div>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              }
            
              {showModal && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                  <div className="bg-white rounded-lg shadow-lg p-6 w-80">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {t("are_you_sure_you_want_to_logout")}
                    </h3>
                    <div className="mt-4 flex justify-end gap-2">
                      <button
                        className="px-4 py-2 bg-gray-200 rounded text-gray-700 hover:bg-gray-300"
                        onClick={cancelLogout}
                      >
                        {t("cancel")}
                      </button>
                      <button
                        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                        onClick={confirmLogout}
                      >
                        {t("logout")}
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
