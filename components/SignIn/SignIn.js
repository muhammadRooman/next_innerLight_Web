"use client";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import 'react-phone-number-input/style.css';
import { countries, arabicCountries } from "../utils/countriesData";
import FullPageLoader from "../fullPageLoader.js/FullPageLoader";

export default function SignIn() {
  const router = useRouter();
  const t = useTranslations("SignUpNow");
  const token = localStorage.getItem("authToken");
  const [phoneNumber, setPhoneNumber] = useState("");
  const currentPath = usePathname();
  const [language, setLanguage] = useState("");
  const [otpCode, setOtpCode] = useState("");
  const [isOtpVerify, setIsOtpVerify] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [errorVerifyMessage, setErrorVerifyMessage] = useState("");
  const [otpGenerated, setOtpGenerated] = useState(false);
  const [loader, setLoader] = useState(false);
  const [firstLoader, setFirstLoader] = useState(true);
  const [disabledPhoneOTP, setDisabledPhoneOTP] = useState(false);
  const [OtpMessage, setOtpMessage] = useState("");
  const [selectedCountryCode, setSelectedCountryCode] = useState("+968");
  const fullPhoneNumber = `${selectedCountryCode}${phoneNumber.trim()}`;
  
  useEffect(() => {
    // Extract the language from the URL path or default to "en"
    const lang = currentPath.split("/")[1] || "en";
    setLanguage(lang);
  
    if (token) {
      // Redirect to the event page for the detected language
      const redirectTimeout = setTimeout(() => {
       const loginURL =
     process.env.NEXT_PUBLIC_NODE_ENV === "development"
        ? `/${lang}/event`
        : `https://innerlightacademy.co/${lang}/event`;
     router.push(loginURL);
     }, 1000);
  
      // Cleanup timeout to avoid memory leaks
      return () => clearTimeout(redirectTimeout);
    }
     setFirstLoader(false); // Stop the loader irrespective of token presence
  }, [currentPath, router, token]);


  const handleSendOTP = async () => {
    // Validate phone number presence
    if (!phoneNumber) {
      setErrorMessage(t("phone_number_is_required"));
      return;
    }
  
    // Validate phone number length
    if (phoneNumber.length < 8 || phoneNumber.length > 16) {
      setErrorMessage(t("phone_number_must_be_between_8_and_16_digits"));
      return;
    }
  
    // Indicate OTP sending process has started
    setIsOtpSent(true);
  
    try {
      // API call to generate OTP
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_API_FRONT}/auth/generate-otp`,
        {
          phoneNumber: fullPhoneNumber,
          userExist: 1,
        }
      );
  
      // Handle successful OTP generation
      if (response?.data?.status === 1) {
        setOtpGenerated(true); // Show OTP input field
        setOtpMessage(response.data.message || "");
        toast.success(
          language === "en" ? response.data.message : response.data.message_ar
        );
        setErrorMessage("");
      } 
      // Handle specific error message related to WhatsApp
      else if (response?.data?.message.includes("Failed to send WhatsApp message")) {
        toast.error(
          language === "en" ? "Invalid phone number" : "رقم الهاتف غير صالح"
        );
        setIsOtpSent(false);
      } 
      // Handle general errors
      else {
        toast.error(
          language === "en" ? response.data.message : response.data.message_ar
        );
        setIsOtpSent(false);
      }
    } catch (error) {
      setIsOtpSent(false);
    }
  };

  const handleVerifyOTP = async () => {
    if (!otpCode) {
      setErrorVerifyMessage(t("OTP_is_required"));
      return;
  }
  setIsOtpVerify(true)
   try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_API_FRONT}/auth/verify-otp`,
        {
          phoneNumber:fullPhoneNumber,
          otpCode, 
        }
      );
      // OTP Verified successfully
      if (response?.data?.success) {
        toast.success(language === "en" ? response.data.message : response.data.message_ar );
        setErrorVerifyMessage("");
        setDisabledPhoneOTP(true);
        setIsOtpVerify(false)
      } else {
        toast.error(language === "en" ? response.data.message : response.data.message_ar );
        setIsOtpVerify(false)
      }
    } catch (error) {
      toast.error(t("failed_to_Verify_OTP"));
      setIsOtpVerify(false)
    }
  };

  const handleSubmit = async () => {
    setLoader(true)
    if (!otpCode) {
      setErrorVerifyMessage(t("OTP_is_required"));
      return;
  }
   // Validate phone number
    if (!phoneNumber || phoneNumber.trim() === "") {
      setErrorMessage(t("phone_number_is_required"));
      return;
  }
  // Validate the phone number length (between 8 and 16 digits)
  if (phoneNumber.length < 8 || phoneNumber.length > 16) {
    setErrorMessage(t("phone_number_must_be_between_8_and_16_digits"));
    return; // Stop execution if validation fails
  }
   
    try {
      const formData = new FormData();   
      formData.append("phoneNumber", fullPhoneNumber);
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_API_FRONT}/auth/login`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      setLoader(false)
      if (response?.data?.status === 1) {
        localStorage.setItem("authToken", response.data.data.accessToken);
        console.log("here")
        router.push(`/${language}/event`);
        // return
       setLoader(false)
      } else {
        toast.error(
          language === "en" ? response.data.message : response.data.message_ar
        );
       setLoader(false)
      }
    } catch (error) {
      toast.error(error.message || "An error occurred");
      setLoader(false)
    }
  };

  // const handlePhoneNumberChange = (e) => {
  //   const input = e.target.value;
  //     setErrorMessage('');
  //   // Ensure the input always starts with the selected country code
  //   if (!input.startsWith(selectedCountryCode)) {
  //     return; // Prevent any update if the user tries to remove the country code
  //   }
  //   // Extract the phone number (part after the country code)
  //   let numberWithoutCode = input.slice(selectedCountryCode.length);
  //   numberWithoutCode = numberWithoutCode.replace(/\D/g, '')
  //   // Update the phone number state without affecting the country code
  //   setPhoneNumber(numberWithoutCode);
  // };

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;   
    const cleanedValue = value.replace(/[^0-9]/g, ''); 
   
    // Update the phone number state
    setPhoneNumber(cleanedValue);

     // Clear the error message if any
     if (errorMessage) {
      setErrorMessage("");
    }
  };
  

  if (loader || firstLoader){
    return <FullPageLoader/>
  }

  return (
    <div>
      <section className="bg-gray-light relative flex items-center justify-start py-16 sign_in_page">
        <div className="2xl:container xl:container lg:container md:container cust_container px-5 mx-auto lg:max-0 sign_in_page_inner">
          <div className="heading-box text-center xl:mb-11 mb-8">
            <h2 className="xl:text-40 lg:text-[30px] text-[25px] font-bold rtl:2xl:text-[72px] rtl:xl:text-[50px] rtl:text-[40px]">{t("sign_in_now")}</h2>
            {/* <p className="2xl:text-2xl text-xl font-normal">
              {t("fill_the_form_below_our_representatives_respond_you")}
            </p> */}
          </div>
          <div>
            <div className="sm:grid sm:grid-cols-2 gap-7">
            <div className="form-group lg:mb-0 mb-4">
              <div className="btn-icon select_country relative flex align-baseline">
                {
                  language ==="en" ? 
                  <div>
                 <div className="relative">
                        {/* Overlay that covers the dropdown */}

                        <div
                          className="absolute left-0 top-0 z-10 bg-transparent text-[#11171F] flex items-center justify-left p-5 font_32"
                          style={{
                            width: '100%',
                            height: '100%',
                            pointerEvents: 'none', 
                            border: '2px solid #DEDEDE',
                            borderRadius: '4px',
                            backgroundColor: '#ffffff',
                          }}
                        >
                          {selectedCountryCode.split('-')[0]}
                        </div>

                        {/* Actual dropdown */}
                        <select
                          value={selectedCountryCode}
                          disabled={isOtpSent || disabledPhoneOTP || OtpMessage}
                          onChange={(e) => setSelectedCountryCode(e.target.value)}
                          style={{ opacity: 0 }}
                          className="md:max-w-[154px] xs:max-w-[140px] small:max-w-[110px] placeholder:text-[#11171F] w-full items-center rounded-[4px] bg-white border-solid border-2 border-[#DEDEDE] outline-1 -outline-offset-1 outline-[#DEDEDE] focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-[#11171F] sm:min-h-[60px] md:min-h-[70px] small:min-h-[60px] block min-w-0 grow py-1.5 md:pr-5 md:pl-5 xs:pr-4 xs:pl-4 small:pr-[7px] small:pl-[7px] md:text-lg xs:text-[16px] small:text-[14px] text-[#11171F] focus:outline-none rtl:xl:text-[32px] sm:text-sm/6 font_32 opacity:0 bg-transparent country_select_dropdown"
                        >
                          {countries.map((country, index) => (
                            <option key={index} value={`${country.code}-${country.name}`}>
                              {`${country.name} (${country.code})`}
                            </option>
                          ))}
                        </select>
                  </div>
                </div> :
                <div>
                 <div className="relative">
                        {/* Overlay that covers the dropdown */}

                        <div
                          className="absolute left-0 top-0 z-10 bg-transparent text-[#11171F] flex items-center justify-left p-5 font_32"
                          style={{
                            width: '100%',
                            height: '100%',
                            pointerEvents: 'none', 
                            border: '2px solid #DEDEDE',
                            borderRadius: '4px',
                            backgroundColor: '#ffffff',
                          }}
                        >
                           {selectedCountryCode.split('-')[0]}
                        </div>

                        {/* Actual dropdown */}
                        <select
                          value={selectedCountryCode}
                          disabled={isOtpSent || disabledPhoneOTP || OtpMessage}
                          onChange={(e) => setSelectedCountryCode(e.target.value)}
                          style={{ opacity: 0 }}
                          className="md:max-w-[154px] xs:max-w-[140px] small:max-w-[110px] placeholder:text-[#11171F] w-full items-center rounded-[4px] bg-white border-solid border-2 border-[#DEDEDE] outline-1 -outline-offset-1 outline-[#DEDEDE] focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-[#11171F] sm:min-h-[60px] md:min-h-[70px] small:min-h-[60px] block min-w-0 grow py-1.5 md:pr-5 md:pl-5 xs:pr-4 xs:pl-4 small:pr-[7px] small:pl-[7px] md:text-lg xs:text-[16px] small:text-[14px] text-[#11171F] focus:outline-none rtl:xl:text-[32px] sm:text-sm/6 font_32 opacity:0 bg-transparent country_select_dropdown"
                        >
                          {arabicCountries.map((country, index) => (
                            <option key={index} value={`${country.code}-${country.name}`}>
                              {`${country.name} (${country.code})`}
                            </option>
                          ))}
                        </select>
                  </div>
                </div> 
     }
             
            <div className="relative w-[100%]">
            <input
              type="number"
              inputMode="tel"
              name="PhoneNumber"
              id="PhoneNumber"
             value={phoneNumber}
              // value={`${selectedCountryCode}${phoneNumber}`} // Always shows country code + phone number
              onChange={handlePhoneNumberChange} // Handles updates without breaking country code
              className="placeholder:text-[#11171F] w-full items-center rounded-[4px] bg-white border-solid border-2 border-[#DEDEDE] outline-1 -outline-offset-1 outline-[#DEDEDE] focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-[#11171F] sm:min-h-[60px] md:min-h-[70px] small:min-h-[60px] block min-w-0 grow py-1.5 md:pr-5 md:pl-5 xs:pr-4 xs:pl-4 small:pr-[7px] small:pl-[7px] md:text-lg xs:text-[16px] small:text-[14px] text-[#11171F] focus:outline-none rtl:xl:text-[32px] sm:text-sm/6 font_32"
              placeholder={t("phone_number")}
              disabled={isOtpSent || disabledPhoneOTP || OtpMessage} 
            />
             </div>
             <button
              disabled={isOtpSent || disabledPhoneOTP || OtpMessage} // Disable immediately on click
              onClick={handleSendOTP}
              className="px-4 py-2 font-semibold lg:text-lg rounded-[3px] bg-[#1796D8] text-white absolute rtl:xl:text-[30px] lg:w-[149px] w-[100px] md:top-2 md:right-2 top-[2px] right-[2px] xs:right-[4px] rtl:left-[0px] xs:top-[4px] lg:min-h-[calc(100%-35px)] md:min-h-[calc(100%-16px)] small:min-h-[calc(100%-16px)] shadow-shadow-color custom_select_button"
            >
              {t("send_OTP")}
            </button>
              </div>
              {
                  errorMessage && (
                <span className="error_msg">
                  {errorMessage}
                </span>
              )
            }
            </div>
              {otpGenerated && (
                <div className="form-group lg:mb-0 mb-4">
                  <div className="btn-icon relative">
                    <input
                      type="text"
                      name="otp"
                      id="otp"
                      disabled={disabledPhoneOTP}
                      onChange={(e) => setOtpCode(e.target.value.trim())}
                      className="placeholder:text-[#11171F] w-full items-center rounded-[4px] bg-white border-solid border-2 border-[#DEDEDE] outline-1 -outline-offset-1 outline-[#DEDEDE] focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-[#11171F] sm:min-h-[60px] md:min-h-[70px] small:min-h-[60px] block min-w-0 grow py-1.5 md:pr-5 md:pl-5 xs:pr-4 xs:pl-4 small:pr-[7px] small:pl-[7px] md:text-lg xs:text-[16px] small:text-[14px] text-[#11171F] focus:outline-none rtl:xl:text-[32px] sm:text-sm/6"
                      placeholder={t("otp")}
                    />
                    <button
                      disabled={disabledPhoneOTP || isOtpVerify}
                      onClick={handleVerifyOTP}
                      className="px-4 py-2 font-semibold lg:text-lg rounded-[3px] bg-[#1796D8] text-white absolute w-[101px] lg:top-2 top-[2px] lg:right-2 right-[2px] lg:min-h-[calc(100%-16px)] min-h-[calc(100%-4px)] shadow-shadow-color verify_button"
                    >
                      {t("verify")}
                    </button>
                  </div>
                  { !otpCode &&  errorVerifyMessage && (
                    <span className="error_msg">
                      {errorVerifyMessage}
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>
          <div className="book-you-button register_btn flex-wrap flex lg:justify-between items-center mt-10 text-center">
            <p className="text-black text-lg mb-3 lg:mt-0 mt-2 font_32">
              {t("dont_have_account")}
              <Link
                href={`/${language}/signup`}
                className="text-info-color font-bold ml-4"
              >
                {t("register")}
              </Link>

            </p>
            {
              disabledPhoneOTP &&   <button
              onClick={handleSubmit}
              disabled={!disabledPhoneOTP}
              className={
                "py-2.5 px-6 text-white rounded-3xl font-medium xl:text-xl text-sm bg-btn-gradient hover:bg-btn-gradient-hover"}
            >
              {t("sign_in")}
            </button>
            }
          
          </div>
        </div>
      </section>
      <ToastContainer/>
    </div>
  );
}
