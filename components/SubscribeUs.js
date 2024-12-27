"use client"
import Image from 'next/image';
import Link from "next/link";
import { useTranslations } from "next-intl";
import axios from "axios"
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SubscribeUs(props) {
  const t = useTranslations("SubscribeUs");
  const [email, setEmail] = useState("")
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_API_FRONT}/newsletter`, { email: email })
      if(response.data.success){
        toast.success(t(response.data.message))
        setEmail("")
      }
      else{
        toast.error(t(response.data.message))
        setEmail("")
      }
    }
    catch (err) {
      console.log(err)
    }
  }
  return (
    <>
      <section className='SubscribeUs-wrap'>
        <div class="SubscribeUs-card shadow-shadow-color rounded-10 lg:py-4 lg:px-8 p-5">
        <h1 className='2xl:text-2xl rtl:2xl:text-[40px] text-[16px] font-bold text-center md:mb-6 small:mb-4'>{t("subscribeUs")}</h1> 
          <form className='form-group mb-7' onSubmit={onSubmit}>
            <div className='icon-wrap relative'>
              <input id="email" name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder={t("enter_email_address")} class="pl-3 pr-9 border-[#CBCBCB] outline-0 lg:text-xl rtl:lg:text-[28px] text-sm bg-transparent block w-full border-0 text-gray-900 border-b-2 py-3 placeholder:text-[#0F0202] focus:none rtl:pr-0 " required />
              <button type='submit' className=" absolute left-0 right-0 top-6 ml-auto rtl:mr-auto rtl:ml-0 flex lg:w-[20px] w-[15px] rtl:rotate-[180deg]"><Image src="/arrow.png" alt="logo white" width={20} height={20} /></button>
            </div>
          </form>
          <div className='follow-us flex items-center justify-between'>
          <h5 className='2xl:text-2xl rtl:2xl:text-[40px] text-[16px] mb-0 font-bold rtl:ml-4'>{t("follow_us")}</h5>
            <nav className="flex items-center justify-center ml-auto rtl:ml-0">
              <Link href={`${props.cmsWeb.facebook}`} target='_blank' className="lg:min-w-9 lg:min-h-9 min-w-7 min-h-7  rounded-full flex items-center justify-center shadow-shadow-color8 bor ease-in-out me-2"><Image src="/assets/images/social-icon/facebook.png" width={17} height={17} alt="facebook" className='lg:w-[17px] w-4' /></Link>
              <Link href={`${props.cmsWeb.linkedin}`} target='_blank' className="lg:min-w-9 lg:min-h-9 min-w-7 min-h-7 rounded-full flex items-center justify-center shadow-shadow-color8  ease-in-out me-2"><Image src="/assets/images/social-icon/linkedin.png" width={17} height={17} alt="linkedin" className='lg:w-[17px] w-4' /></Link>
              <Link href={`${props.cmsWeb.twitter}`} target='_blank' className="lg:min-w-9 lg:min-h-9 min-w-7 min-h-7 rounded-full flex items-center justify-center shadow-shadow-color8 ease-in-out me-2"><Image src="/assets/images/social-icon/twitter.png" width={17} height={17} alt="twitter" className='lg:w-[17px] w-4' /></Link>
              <Link href={`${props.cmsWeb.pinterest}`} target='_blank' className="lg:min-w-9 lg:min-h-9 min-w-7 min-h-7 rounded-full flex items-center justify-center shadow-shadow-color8 ease-in-out me-2"><Image src="/assets/images/social-icon/pinterest.png" width={17} height={17} alt="pinterest" className='lg:w-[17px] w-4' /></Link>
              <Link href={`${props.cmsWeb.youtube}`} target='_blank' className="lg:min-w-9 lg:min-h-9 min-w-7 min-h-7 rounded-full flex items-center justify-center shadow-shadow-color8 ease-in-out  "><Image src="/assets/images/social-icon/youtube.png" width={17} height={20} alt="youtube" className='lg:w-[17px] w-4' /></Link>
            </nav>
          </div>
        </div>
      </section>
      <ToastContainer/>
    </>
  )
}
