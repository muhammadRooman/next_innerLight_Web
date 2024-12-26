"use client";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-toastify";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

export default function SignUpNow() {
  const router = useRouter();
  const t = useTranslations("SignUpNow");
  const [phoneNumber, setPhoneNumber] = useState("");
  const currentPath = usePathname();
  const [language, setLanguage] = useState("");
  const [signUpData, setSignUpData] = useState({
    fullName: "",
    lastName: "",
    email: "",
  });
  const [otpCode, setOtpCode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [errorVerifyMessage, setErrorVerifyMessage] = useState("");
  const [otpGenerated, setOtpGenerated] = useState(false);
  const [disabledPhoneOTP, setDisabledPhoneOTP] = useState(false);
  const [profileImage, setProfileImage] = useState(null); // For image upload
  const [profileImagePreview, setProfileImagePreview] = useState(null); // For preview
  const [imageName, setImageName] = useState("");
  const [imageError, setImageError] = useState("");
  const [OtpMessage, setOtpMessage] = useState("");
  const [validationErrors, setValidationErrors] = useState({
    fullName: "",
    lastName: "",
    email: "",
  });

  // fetched cmsWeb
  useEffect(() => {
    const lang = currentPath.split("/")[1] || "en";
    setLanguage(lang);
  }, [currentPath]);

  const handleSendOTP = async () => {
    if (!phoneNumber) {
      setErrorMessage(t("phone_number_is_required"));
      return;
    }
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_API_FRONT}/auth/generate-otp`,
        {
          phoneNumber,
          userExist: 0, // Add userExist here as part of the request body
        }
      );

      // OTP generated successfully
      if (response?.data.success) {
        setOtpGenerated(true); // Show OTP input field
        setOtpMessage(response.data.message || "");
        toast.success(response.data.message);
        setErrorMessage("");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("Error generating OTP:", error);
    }
  };

  const handleVerifyOTP = async () => {
    if (!otpCode) {
      setErrorVerifyMessage(t("OTP_is_required"));
      return;
    }
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_API_FRONT}/auth/verify-otp`,
        {
          phoneNumber,
          otpCode, // Add userExist here as part of the request body
        }
      );
      // OTP Verified successfully
      if (response?.data?.success) {
        toast.success(response.data.message);
        setErrorVerifyMessage("");
        setDisabledPhoneOTP(true);
      } else {
        toast.error(response?.data?.message);
      }
    } catch (error) {
      toast.error(t("failed_to_Verify_OTP"));
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    // Check if a file was selected
    if (file) {
      const fileSizeInMB = file.size / (1024 * 1024); // Convert size to MB
      const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];

      // Validate the file type
      if (!allowedTypes.includes(file.type)) {
        toast.error(t("please_upload_a_valid_image_file"));
        return;
      }
      // Validate the file size (e.g., max size 5MB)
      if (fileSizeInMB > 5) {
        toast.error(t("file_size_exceeds_5MB"));
        return;
      }
      setProfileImage(file); // Preview the image
      setProfileImagePreview(URL.createObjectURL(file));
      setImageName(file.name);
    }
  };

  const handleSubmit = async () => {
    let errors = {};

    if (!signUpData?.fullName) {
      errors.fullName = t("full_name_is_required");
    }
    if (!signUpData?.lastName) {
      errors.lastName = t("last_name_is_required");
    }
    if (!signUpData?.email) {
      errors.email = t("email_is_required");
    }
    if (!profileImage) {
      errors.profileImage = t("profile_image_is_required");
      setImageError(t("please_upload_your_profile_picture"));
    }
    if (!phoneNumber) {
      setErrorMessage(t("phone_number_is_required"));
      return;
    }
    if (!otpCode) {
      setErrorVerifyMessage(t("OTP_is_required"));
      return;
    }
    // If there are validation errors, show them and stop the form submission
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }
    try {
      const formData = new FormData();
      formData.append("fullName", signUpData?.fullName);
      formData.append("lastName", signUpData?.lastName);
      formData.append("phoneNumber", phoneNumber);
      formData.append("email", signUpData?.email);
      formData.append("profileImage", profileImage || "");
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_API_FRONT}/auth/signup`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      if (response?.data?.status === 1) {
        router.push(`/${language}/thank-you`);
        localStorage.setItem("authToken", response.data.token);
      } else {
        toast.error(
          language === "en" ? response.data.message : response.data.message_ar
        );
      }
    } catch (error) {
      toast.error(error.message || "An error occurred");
    }
  };
  const signin = ()=>{
   router.push(`/${language}/signin`);
  }

  return (
    <>
      <section className=" bg-gray-light relative flex items-center justify-start py-16 ">
        <div className="2xl:container xl:container lg:container md:container xs:container mx-auto lg:max-0 px-5">
          <div className="heading-box text-center xl:mb-11 mb-8">
            <h5 className="text-info-color 2xl:text-2xl rtl:2xl:text-[40px] text-xl font-bold">
              {t("moments_of_serenity")}
            </h5>
            <h2 className="xl:text-40 lg:text-[30px] text-[25px] font-bold rtl:2xl:text-[72px] rtl:xl:text-[28px] rtl:text-[24px]">{t("sign_up_now")}</h2>
            <p className="md:text-[18px] xs:text-[16px] md:max-w-[510px] max-w-[100%] m-auto small:text-[14px] rtl:2xl:text-[30px] rtl:md:text-[28px] font-normal">
              {t("fill_the_form_below_our_representatives_respond_you")}
            </p>
          </div>
          <div>
            <div className="md:grid md:grid-cols-2 gap-6">
              <div class="form-group md:mb-0 mb-0">
                <input
                  type="text"
                  name="FullName"
                  id="FullName"
                  value={signUpData?.fullName}
                  onChange={(e) =>
                    setSignUpData({ ...signUpData, fullName: e.target.value })
                  }
                  className="placeholder:text-[#11171F] w-full items-center rounded-[4px] bg-white border-solid border-2 border-[#DEDEDE] outline-1 -outline-offset-1 outline-[#DEDEDE] focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-[#11171F] md:min-h-[70px] min-h-[45px] block min-w-0 grow py-1.5 pr-5 pl-5 md:text-lg xs:text-[16px] small:text-[14px] text-[#11171F] focus:outline-none rtl:xl:text-[32px] sm:text-sm/6 md:mb-0 lg:mb-5 mb-3"
                  placeholder={t("full_name")}
                />
                {validationErrors?.fullName && (
                  <p style={{ color: "red" }}>{validationErrors?.fullName}</p>
                )}
              </div>
              <div class="form-group md:mb-0 mb-0">
                <input
                  type="text"
                  name="LastName"
                  id="LastName"
                  value={signUpData?.lastName}
                  onChange={(e) =>
                    setSignUpData({ ...signUpData, lastName: e.target.value })
                  }
                  className="placeholder:text-[#11171F] w-full items-center rounded-[4px] bg-white border-solid border-2 border-[#DEDEDE] outline-1 -outline-offset-1 outline-[#DEDEDE] focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-[#11171F] md:min-h-[70px] min-h-[45px] block min-w-0 grow py-1.5 pr-5 pl-5 md:text-lg xs:text-[16px] small:text-[14px] text-[#11171F] focus:outline-none rtl:xl:text-[32px] sm:text-sm/6 md:mb-0 lg:mb-5 mb-3"
                  placeholder={t("last_name")}
                />
                {validationErrors?.lastName && (
                  <p style={{ color: "red" }}>{validationErrors?.lastName}</p>
                )}
              </div>
              <div className="form-group md:mb-0 mb-0">
                <div className="btn-icon relative">
                  <PhoneInput
                    international
                    defaultCountry="US" // Default country code
                    value={phoneNumber}
                    onChange={setPhoneNumber}
                    disabled={disabledPhoneOTP || OtpMessage}
                    className="placeholder:text-[#11171F] w-full items-center rounded-[4px] bg-white border-solid border-2 border-[#DEDEDE] outline-1 -outline-offset-1 outline-[#DEDEDE] focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-[#11171F] md:min-h-[70px] min-h-[45px] block min-w-0 grow py-1.5 pr-5 pl-5 md:text-lg xs:text-[16px] small:text-[14px] text-[#11171F] focus:outline-none rtl:xl:text-[32px] sm:text-sm/6 md:mb-0 lg:mb-5 mb-3"
                    placeholder={t("phone_number")}
                  />
                  <button
                    disabled={disabledPhoneOTP || OtpMessage}
                    onClick={handleSendOTP}
                    className="px-4 py-2 font-semibold lg:text-lg rounded-[3px] bg-[#1796D8] text-white absolute rtl:xl:text-[30px] lg:w-[149px] w-[100px] lg:top-2 top-[2px] lg:right-2 right-[2px] lg:min-h-[calc(100%-16px)] min-h-[calc(100%-4px)] shadow-shadow-color"
                  >
                    {t("send_OTP")}
                  </button>
                </div>
                {errorMessage && (
                  <span className="text-red-500 text-sm mt-2">
                    {errorMessage}
                  </span>
                )}
              </div>
              {otpGenerated && (
                <div class="form-group md:mb-0 mb-0">
                  <div className="btn-icon relative">
                    <input
                      type="text"
                      name="otp"
                      id="otp"
                      disabled={disabledPhoneOTP}
                      onChange={(e) => setOtpCode(e.target.value)}
                      className="placeholder:text-[#11171F] w-full items-center rounded-[4px] bg-white border-solid border-2 border-[#DEDEDE] outline-1 -outline-offset-1 outline-[#DEDEDE] focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-[#11171F] lg:min-h-[70px] min-h-[50px] block min-w-0 grow py-1.5 pr-5 pl-5 lg:text-lg text-[#11171F] focus:outline-none rtl:xl:text-[32px] sm:text-sm/6 md:mb-0 lg:mb-5 mb-3"
                      placeholder="OTP"
                    />
                    <button
                      disabled={disabledPhoneOTP}
                      onClick={handleVerifyOTP}
                      class="px-4 py-2 font-semibold lg:text-lg rounded-[3px] bg-[#1796D8] text-white absolute w-[101px] lg:top-2 top-[2px] lg:right-2 right-[2px] lg:min-h-[calc(100%-16px)] min-h-[calc(100%-4px)] shadow-shadow-color"
                    >
                      {t("verify")}
                    </button>
                  </div>
                  {errorVerifyMessage && (
                    <span className="text-red-500 text-sm mt-2">
                      {errorVerifyMessage}
                    </span>
                  )}
                </div>
              )}
              <div class="form-group md:mb-0 mb-0">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={signUpData?.email}
                  onChange={(e) =>
                    setSignUpData({ ...signUpData, email: e.target.value })
                  }
                  className="placeholder:text-[#11171F] w-full items-center rounded-[4px] bg-white border-solid border-2 border-[#DEDEDE] outline-1 -outline-offset-1 outline-[#DEDEDE] focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-[#11171F] md:min-h-[70px] min-h-[45px] block min-w-0 grow py-1.5 pr-5 pl-5 md:text-lg xs:text-[16px] small:text-[14px] text-[#11171F] focus:outline-none rtl:xl:text-[32px] sm:text-sm/6 md:mb-0 lg:mb-5 mb-3"
                  placeholder={t("email")}
                />
                {validationErrors?.email && (
                  <p style={{ color: "red" }}>{validationErrors?.email}</p>
                )}
              </div>
              {disabledPhoneOTP && (
                <div className="form-group md:mb-0 mb-0">
                  <div className="flex items-center cursor-pointer placeholder:text-[#11171F]  relative  rounded-[4px] bg-white  border-solid border-2 border-[#DEDEDE]   outline-1 -outline-offset-1 outline-[#DEDEDE] focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-[#11171F] lg:min-h-[70px] min-h-[50px]   min-w-0 grow py-1.5 pr-5 pl-5 lg:text-lg  text-[#11171F]   focus:outline-none sm:text-sm/6">
                    {/* <!-- Label wraps everything --> */}
                    <label
                      for="upload_picture"
                      className="flex items-center w-full"
                    >
                      {/* <!-- Text Section --> */}
                      <span className="flex-1 lg:text-lg text-[#11171F]">
                        {imageName ? imageName : t("upload_picture")}
                      </span>
                      {/* <!-- Hidden Input --> */}
                      <input
                        type="file"
                        onChange={(e) => handleImageChange(e)}
                        id="upload_picture"
                        className="hidden"
                      />
                      {/* <!-- Upload Icon/Button --> */}
                      <span className="cursor-pointer bg-[#1796D8]   text-white flex items-center justify-center  rounded-[4px] w-[74px] absolute  lg:top-2 top-0  right-0 lg:min-h-[calc(100%-16px)] min-h-[100%] lg:right-[6px]">
                        {/* <!-- Icon --> */}
                        <svg
                          class="feather feather-upload"
                          fill="none"
                          height="24"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          viewBox="0 0 24 24"
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                          <polyline points="17 8 12 3 7 8" />
                          <line x1="12" x2="12" y1="3" y2="15" />
                        </svg>
                      </span>
                    </label>
                  </div>
                  {profileImagePreview && (
                    <div className="mt-4">
                      <img
                        src={profileImagePreview}
                        alt="Preview"
                        className="w-[100px] h-[100px] object-cover rounded"
                      />
                    </div>
                  )}
                  {!profileImage && imageError && (
                    <p style={{ color: "red" }}>{imageError}</p>
                  )}
                </div>
              )}
            </div>
          </div>
          <div className="book-you-button flex md:justify-between items-center mt-10 justify-between text-center ">
            <p className="text-black lg:order-none order-2 text-lg mb-3 lg:mt-0 mt-2 rtl:xl:text-[30px] ">
              {t("already_have_an_account")}{" "}
              <button
               onClick={signin}
               className="py-2 lg:px-8 px-3 text-white rounded-3xl font-medium rtl:font-black xl:text-xl rtl:xl:text-[32px] text-[12px] bg-btn-gradient hover:bg-btn-gradient-hover lg:ml-4 rtl:text-[12px]">
                {t("sign_in")}
              </button>

            </p>
            <button
              // disabled={!disabledPhoneOTP}
              onClick={handleSubmit}
              className={
                !disabledPhoneOTP
                  ? "lg:order-none order-1 py-2.5 px-6 text-white rounded-3xl font-medium xl:text-xl text-sm bg-btn-gradient "
                  : "lg:text-lg block lg:w-[181px] w-full lg:order-none order-1 py-2.5 px-6 text-white rounded-3xl font-medium xl:text-xl text-sm bg-btn-gradient hover:bg-btn-gradient-hover"
              }
            >
              {t("sign_up")}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
