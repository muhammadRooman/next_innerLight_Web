"use client"
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function ContactUs() {
    const t = useTranslations("Contact");
    const [flag, setFlag] = useState(false)
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: "" });
    };
    
    const validatePhone = (e) => {
        const value = e.target.value;
        if (!/^[+\d]*$/.test(value)) {
          e.target.value = value.slice(0, -1);
        }
      };  

    const validateForm = () => {
        let errors = {};
        if (!formData?.name?.trim()) {
            errors.name = t("name_is_required");
        } else if (formData.name.trim().length > 150) {
            errors.name = t("name_can_not");
        }

        if (!formData?.email?.trim()) {
            errors.email = t("email_is_required");
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            errors.email = t("invalid_email");
        }

        if (!formData?.phone?.trim()) {
            errors.phone = t("phone_is_required");
        } else if (!/^[+]?[\d]+$/.test(formData.phone)) {
            errors.phone = t("invalid_phone");
        } else if (formData.phone.trim().length < 8 || formData.phone.trim().length > 16) {
            errors.phone = t("phone_must_be_8_to_16_digits");
        }
        if (!formData?.message?.trim()) {
            errors.message = t("message_is_required");
        } else if (formData.message.trim().length > 1000) {
            errors.message = t("message_too_long");
        }
        return errors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        setFlag(true);
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/contact`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            if (res.ok) {
                toast.success(t("alert"));
                setFormData({ name: "", email: "", phone: "", message: "" });
            } else {
                toast.error(t("something_went_wrong"));
            }
        } catch (error) {
            console.error(error);
            toast.error(t("network_error"));
        } finally {
            setFlag(false);
        }
    };

    return (
        <>
            <section className="bg-[#F7F7F7] lg:p-24 md:p-10 p-6 form_wrapper">
                <div className="2xl:container xl:container lg:container mx-auto md:flex justify-center">
                    <div className="form-wrapper bg-yoga bg-cover xl:p-16 p-8 rtl:rounded-r-lg ltr:rounded-l-lg md:flex hidden">
                        <div className="box-overlay shadow-shadow-color2 rounded-10 bg-[#F9F9F9] xl:px-24 xl:py-11 px-6 py-6 flex items-center flex-col justify-center">
                            <img src="/mobileimg.png" alt="mobile img" />
                            <div className="relative border_line"></div>
                            <h3 className="text-[32px] text-[#343434] font-bold">{t("download")}</h3>
                            <Link href="https://apps.apple.com/au/app/innerlight-academy/id6670317150" target="_blank">
                                <img
                                    src="/AppStore.png"
                                    alt="app store img"
                                    className="w-[222px] mt-8"
                                />
                            </Link>
                            <Link href="https://play.google.com/store/apps/details?id=com.arhamsoft.innerlight.innerlights&hl=en" target="_blank">
                                <img
                                    src="/GooglePlay.png"
                                    alt="google img"
                                    className="w-[222px] mt-8"
                                />
                            </Link>
                        </div>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg md:p-8 xs:p-6 small:p-4 xl:w-1/2 lg:w-1/2 w-full contact_us">
                        <h2 className="xl:text-40 md:text-[30px] xs:text-[20px] small:text-[18px] md:leading-[100px] xs:leading-[50px] small:leading-[30px] font-bold rtl:2xl:text-[72px] rtl:md:text-right rtl:xl:text-[50px] rtl:text-[40px] leading-[80px] text-[#1796D8] md:text-left text-center arabic_heading_two">
                            {t("contact_us")}
                        </h2>
                        <p className="mb-6 text-[#000000] md:text-[22px] small:text-[16px] md:leading-[23px] font-normal md:text-left text-center rtl:md:text-right font_32">
                            {t("form")}
                        </p>

                        <form onSubmit={handleSubmit} className="form_control">
                            <div className="input_wrapper">
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder={t("your_name")}
                                    maxLength="150"
                                    className="placeholder:text-[#11171F] w-full items-center rounded-[4px] bg-white border-solid border-2 border-[#DEDEDE] outline-1 -outline-offset-1 outline-[#DEDEDE] focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-[#11171F] lg:min-h-[70px] min-h-[50px] block min-w-0 grow py-1.5 pr-5 pl-5 lg:text-lg text-[#11171F] focus:outline-none rtl:xl:text-[32px] sm:text-sm/6"
                                />
                                {errors.name && <p className="error_msg" style={{ color: "red" }}>{errors.name}</p>}
                            </div>
                            <div className="input_wrapper">
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder={t("email")}
                                    className="placeholder:text-[#11171F] w-full items-center rounded-[4px] bg-white border-solid border-2 border-[#DEDEDE] outline-1 -outline-offset-1 outline-[#DEDEDE] focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-[#11171F] lg:min-h-[70px] min-h-[50px] block min-w-0 grow py-1.5 pr-5 pl-5 lg:text-lg text-[#11171F] focus:outline-none rtl:xl:text-[32px] sm:text-sm/6"
                                />
                                {errors.email && <p className="error_msg" style={{ color: "red" }}>{errors.email}</p>}
                            </div>
                            <div className="input_wrapper">
                                <input
                                    type="text"
                                    name="phone"
                                    onInput={validatePhone}
                                    inputMode="tel"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder={t("contact_no")}
                                    maxLength="17"
                                     className="placeholder:text-[#11171F] w-full items-center rounded-[4px] bg-white border-solid border-2 border-[#DEDEDE] outline-1 -outline-offset-1 outline-[#DEDEDE] focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-[#11171F] lg:min-h-[70px] min-h-[50px] block min-w-0 grow py-1.5 pr-5 pl-5 lg:text-lg text-[#11171F] focus:outline-none rtl:xl:text-[32px] sm:text-sm/6"
                                />
                                {errors.phone && <p className="error_msg" style={{ color: "red" }}>{errors.phone}</p>}
                            </div>
                            <textarea
                                maxlength="1000"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder={t("message")}
                                className="placeholder:text-[#11171F] w-full items-center rounded-[4px] bg-white border-solid border-2 border-[#DEDEDE] outline-1 -outline-offset-1 outline-[#DEDEDE] focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-[#11171F] min-h-[180px] block min-w-0 grow py-1.5 pr-5 pl-5 lg:text-lg text-[#11171F] focus:outline-none rtl:xl:text-[32px] sm:text-sm/6 resize-none"
                            ></textarea>
                            {errors.message && <p className="error_msg" style={{ color: "red" }}>{errors.message}</p>}
                            <div className="btn-wrap text-right rtl:text-left lg:mt-14 mt-10 submit_btn">
                                <button
                                    disabled={flag}
                                    type="submit"
                                    className="py-2 lg:px-8 px-3 text-white rounded-3xl font-medium rtl:font-black xl:text-xl rtl:xl:text-[32px] text-[12px] bg-btn-gradient hover:bg-btn-gradient-hover lg:ml-4 rtl:text-[12px] outline-none"
                                >
                                    {t("submit")}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <ToastContainer />
        </>
    );
}
