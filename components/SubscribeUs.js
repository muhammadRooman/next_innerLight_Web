"use client";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import axios from "axios";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FullPageLoader from "./fullPageLoader.js/FullPageLoader";

export default function SubscribeUs(props) {
  const t = useTranslations("SubscribeUs");
  const currentPath = usePathname();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [language, setLanguage] = useState("");
  const [loading, setLoading] = useState(false); 

  useEffect(() => {
      const lang = currentPath.split("/")[1] || "en";
      setLanguage(lang);
    }, [currentPath]);

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true); // Set loading state

    // Validate email
    if (!email.trim()) {
      setError(t("email_is_required"));
      setLoading(false); // Reset loading on error
      return;
    }
    if (!validateEmail(email.trim())) {
      setError(t("invalid_email"));
      setLoading(false); // Reset loading on error
      return;
    }


  
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_API_FRONT}/newsletter`,
        { email: email.toLowerCase() }
      );
      setLoading(false);
      if (response.data.success) {
        toast.success(language === "en" ? response.data.message : response.data.message_ar);
        setEmail(""); // Reset email on success
      } else {
        toast.error(language === "en" ? response.data.message : response.data.message_ar);
        setEmail(""); // Reset email on error
      }
    } catch (err) {
      console.error(err);
      toast.error(t("something_went_wrong"));
    } finally {
      setLoading(false); // Reset loading state after the API call
    }
  };


  return (
    <>
      <section className='SubscribeUs-wrap'>
        <div className="SubscribeUs-card shadow-shadow-color rounded-10 lg:py-4 lg:px-8 p-5">
          <h1 className='2xl:text-2xl rtl:2xl:text-[40px] text-[16px] font-bold text-center md:mb-6 small:mb-4 font_40'>{t("subscribeUs")}</h1>
          <form className='form-group mb-7' onSubmit={onSubmit}>
            <div className='icon-wrap relative'>
              <input id="email" name="email" type="email" value={email} onChange={(e) => {setEmail(e.target.value); setError("")}} placeholder={t("enter_email_address")} className="pl-3 pr-9 border-[#CBCBCB] outline-0 lg:text-xl rtl:lg:text-[28px] text-sm bg-transparent block w-full border-0 text-gray-900 border-b-2 py-3 placeholder:text-[#0F0202] focus:none rtl:pr-0 font_28" />
            {error && <p className="error_msg">{error}</p>}                  
             
            <button
              type="submit"
              disabled={loading}
              className="absolute left-0 right-0 top-6 ml-auto rtl:mr-auto rtl:ml-0 flex lg:w-[20px] w-[15px] rtl:rotate-[180deg]"
            >
              {!loading ? (
                <Image src="/arrow.png" alt="logo white" width={20} height={20} />
              ) : (
                <div className="flex justify-center items-center">
                  <svg
                    className="animate-spin h-5 w-5 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    ></path>
                  </svg>
                </div>
              )}
            </button>
            </div>
          </form>
          {(props.cmsWeb.facebook || props.cmsWeb.linkedin || props.cmsWeb.twitter || props.cmsWeb.pinterest || props.cmsWeb.youtube) && (
            <div className="follow-us flex items-center justify-between">
              <h5 className="2xl:text-2xl rtl:2xl:text-[40px] text-[16px] mb-0 font-bold rtl:ml-4 font_40">
                {t("follow_us")}
              </h5>
              <nav className="flex items-center justify-center ml-auto rtl:ml-0">
                {props.cmsWeb.facebook && (
                  <Link
                    href={`${props.cmsWeb.facebook}`}
                    target="_blank"
                    className="lg:min-w-9 lg:min-h-9 min-w-7 min-h-7 rounded-full flex items-center justify-center shadow-shadow-color8 ease-in-out me-2"
                  >
                    <Image
                      src="/assets/images/social-icon/facebook.png"
                      width={17}
                      height={17}
                      alt="facebook"
                      className="lg:w-[17px] w-4"
                    />
                  </Link>
                )}

                {props.cmsWeb.linkedin && (
                  <Link
                    href={`${props.cmsWeb.linkedin}`}
                    target="_blank"
                    className="lg:min-w-9 lg:min-h-9 min-w-7 min-h-7 rounded-full flex items-center justify-center shadow-shadow-color8 ease-in-out me-2"
                  >
                    <Image
                      src="/assets/images/social-icon/linkedin.png"
                      width={17}
                      height={17}
                      alt="linkedin"
                      className="lg:w-[17px] w-4"
                    />
                  </Link>
                )}

                {props.cmsWeb.twitter && (
                  <Link
                    href={`${props.cmsWeb.twitter}`}
                    target="_blank"
                    className="lg:min-w-9 lg:min-h-9 min-w-7 min-h-7 rounded-full flex items-center justify-center shadow-shadow-color8 ease-in-out me-2"
                  >
                    <Image
                      src="/assets/images/social-icon/twitter.png"
                      width={17}
                      height={17}
                      alt="twitter"
                      className="lg:w-[17px] w-4"
                    />
                  </Link>
                )}

                {props.cmsWeb.pinterest && (
                  <Link
                    href={`${props.cmsWeb.pinterest}`}
                    target="_blank"
                    className="lg:min-w-9 lg:min-h-9 min-w-7 min-h-7 rounded-full flex items-center justify-center shadow-shadow-color8 ease-in-out me-2"
                  >
                    <Image
                      src="/assets/images/social-icon/pinterest.png"
                      width={17}
                      height={17}
                      alt="pinterest"
                      className="lg:w-[17px] w-4"
                    />
                  </Link>
                )}

                {props.cmsWeb.youtube && (
                  <Link
                    href={`${props.cmsWeb.youtube}`}
                    target="_blank"
                    className="lg:min-w-9 lg:min-h-9 min-w-7 min-h-7 rounded-full flex items-center justify-center shadow-shadow-color8 ease-in-out"
                  >
                    <Image
                      src="/assets/images/social-icon/youtube.png"
                      width={17}
                      height={20}
                      alt="youtube"
                      className="lg:w-[17px] w-4"
                    />
                  </Link>
                )}
              </nav>
            </div>
          )}
        </div>
      </section>
      <ToastContainer />
    </>
  )
}
