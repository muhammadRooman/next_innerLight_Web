"use client"
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function ContactUs() {
    const t = useTranslations("Contact");
    const [flag, setFlag] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log("Captured Value:", value);
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFlag(true)
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/contact`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            setFlag(false)
            const data = await res.json();
            if (res.ok) {
                toast.success(t("alert"))
                setFlag(false)
                setFormData({ name: "", email: "", phone: "", message: "" });
            } else {
                alert("Something went wrong.PLease try again")
               setFlag(false)
            }
        } catch (error) {
            console.log(error)
        }
    };
    return (
        <>
            <section className="bg-[#F7F7F7] lg:p-24 md:p-10 p-6">
                <div className="2xl:container xl:container lg:container mx-auto md:flex justify-center">
                    <div className="form-wrapper bg-yoga bg-cover xl:p-16 p-8 rtl:rounded-r-lg ltr:rounded-l-lg md:flex hidden">
                        <div className="box-overlay shadow-shadow-color2 rounded-10 bg-[#F9F9F9] xl:px-24 xl:py-11 px-6 py-6 flex items-center flex-col justify-center">
                            <img src="/mobileimg.png" alt="mobile img" />
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
                    <div className="bg-white shadow-lg rounded-lg md:p-8 xs:p-6 small:p-4 xl:w-1/2 lg:w-1/2 w-full">
                        <h2 className="xl:text-40 md:text-[30px] xs:text-[20px] small:text-[18px] md:leading-[100px] xs:leading-[50px] small:leading-[30px] font-bold rtl:2xl:text-[72px] rtl:lg:text-right rtl:xl:text-[50px] rtl:text-[40px] leading-[80px] text-[#1796D8] md:text-left text-center">
                            {t("contact_us")}
                        </h2>
                        <p className="mb-6 text-[#000000] md:text-[18px] small:text-[14px] md:leading-[23px] font-normal md:text-left text-center rtl:lg:text-right">
                            {t("form")}
                        </p>

                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder={t("your_name")}
                                required
                                 maxLength="150"
                                className="placeholder:text-[#11171F] w-full items-center rounded-[4px] bg-white border-solid border-2 border-[#DEDEDE] outline-1 -outline-offset-1 outline-[#DEDEDE] focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-[#11171F] lg:min-h-[70px] min-h-[50px] block min-w-0 grow py-1.5 pr-5 pl-5 lg:text-lg text-[#11171F] focus:outline-none rtl:xl:text-[32px] sm:text-sm/6 mb-5"
                            />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder={t("email")}
                                required
                                className="placeholder:text-[#11171F] w-full items-center rounded-[4px] bg-white border-solid border-2 border-[#DEDEDE] outline-1 -outline-offset-1 outline-[#DEDEDE] focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-[#11171F] md:min-h-[70px] min-h-[45px] block min-w-0 grow py-1.5 pr-5 pl-5 md:text-lg xs:text-[16px] small:text-[14px] text-[#11171F] focus:outline-none rtl:xl:text-[32px] sm:text-sm/6 mb-5"
                            />
                            <input
                            type="text"
                            name="phone"
                            inputMode="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder={t("contact_no")}
                            required
                            maxLength="17" 
                            // pattern="^[+]?[\d]+$" 
                            className="placeholder:text-[#11171F] w-full items-center rounded-[4px] bg-white border-solid border-2 border-[#DEDEDE] outline-1 -outline-offset-1 outline-[#DEDEDE] focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-[#11171F] lg:min-h-[70px] min-h-[50px] block min-w-0 grow py-1.5 pr-5 pl-5 lg:text-lg text-[#11171F] focus:outline-none rtl:xl:text-[32px] sm:text-sm/6 mb-5"
                           />
                            <textarea
                                maxlength="1000"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                placeholder={t("message")}
                                className="placeholder:text-[#11171F] w-full p-4 border border-[#DEDEDE] focus:outline-none rounded-lg min-h-[180px] rtl:xl:text-[32px] md:text-lg xs:text-[16px] small:text-[14px] resize-none"
                            ></textarea>
                            <div className="btn-wrap text-right rtl:text-left lg:mt-14 mt-10">
                                <button
                                   disabled={flag}
                                    type="submit"
                                    className="py-2 lg:px-8 px-3 text-white rounded-3xl font-medium rtl:font-black xl:text-xl rtl:xl:text-[32px] text-[12px] bg-btn-gradient hover:bg-btn-gradient-hover lg:ml-4 rtl:text-[12px]"
                                >
                                    {t("submit")}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <ToastContainer/>
        </>
    );
}
