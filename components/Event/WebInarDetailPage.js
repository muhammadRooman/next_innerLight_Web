"use client"
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { useTranslations } from "next-intl";
import useSWR from 'swr';
import { useParams } from 'next/navigation';
import FullPageLoader from '../fullPageLoader.js/FullPageLoader';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer,toast } from 'react-toastify';

const fetcher = (url) => fetch(url).then((r) => r.json());

const WebInarDeatilPage = () => {
  const router = useRouter();
  const t = useTranslations("SpiritualCard");
  const params = useParams(); 
  const { detaiId } = params; 
  const currentPath = usePathname();
  const [language, setLanguage] = useState('')
  const [webinarDetailPage, setWebinarDetailPage] = useState(null)
  const [loading,setLoading]=useState(false);
  const token = localStorage.getItem("authToken");
  const [isImageLoading, setIsImageLoading] = useState(true);

  // Fetch WebInarDetailPage data using SWR
  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_BASE_API_FRONT}/webinars/event/${detaiId}`,
    fetcher
  );

    useEffect(() => {
      if (data) {
        setWebinarDetailPage(data?.event);
      }
      const lang = currentPath.split('/')[1] || 'en';
      setLanguage(lang);
    }, [data, currentPath]);

    const handleSubmit = async (id) => {
      setLoading(true)
      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_BASE_API_FRONT}/webinars/join-webinar/${id}`,
          {},
          {
            headers: {
              "Authorization": `Bearer ${token}`,
            },
          }
        );
      if (response.data.success === 1) {
          router.push(`/${language}/thank-you`);
        } else if (response.data.status === 0) {
          router.push(`/${language}/signup`);
          setLoading(false)
        } else {
          toast.error(
            language === "en"
              ? response.data.message
              : "لم يتم العثور على الرمز المميز"
          );
          setLoading(false)
        }
      } catch (error) {
        console.error("Error in joining webinar:", error);
        setLoading(false)

        if (error.response?.status === 401 || error.response?.status === 403) {
          toast.error(
            language === "en"
              ? "Your session has expired. Please sign up again."
              : "انتهت صلاحية الجلسة. الرجاء التسجيل مرة أخرى."
          );
          router.push(`/${language}/signup`);
          setLoading(false)

        } else {
          toast.error(
            language === "en"
              ? "An unexpected error occurred. Please try again."
              : "حدث خطأ غير متوقع. حاول مرة اخرى."
          );
        setLoading(false)
        }
      }
    };

    const handleImageLoadingComplete = () => {
      setIsImageLoading(false);
    };

    if (isLoading) return <FullPageLoader />;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
          {
            loading ? (<FullPageLoader/>):(
              <>
              <section className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
              {isImageLoading && <FullPageLoader />}
                <Image
                 src={`${process.env.NEXT_PUBLIC_IMAGE_API}/${webinarDetailPage?.bannerPic}`}
                  alt="Banner"
                  layout="fill"
                  objectFit="cover"
                  priority
                  className="w-full"
                  onLoadingComplete={handleImageLoadingComplete}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                </div>
              </section>
              <section className="container mx-auto px-4 py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                  <div className="flex justify-center detail_img">
              {isImageLoading && <FullPageLoader />}
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMAGE_API}/${webinarDetailPage?.thumbnailPic}`}
                      alt="Product"
                      width={400}
                      height={400}
                      className="rounded-lg shadow-lg"
                      onLoadingComplete={handleImageLoadingComplete}
                    />
                  </div> 
                  <div>
                    <h2 className="text-3xl font-bold mb-4"> {language === "en" ? webinarDetailPage?.name : webinarDetailPage?.name_ar}</h2>
                    <p className="text-gray-600 mb-4 font_25">
                     {language === "en" ? webinarDetailPage?.shortDescription : webinarDetailPage?.shortDescription_ar}
                    </p>
                    {
                      webinarDetailPage?.type &&  <div className="mb-3">
                      <span className="text-xl font-semibold font_26 font_32">{t("price")}:</span>{" "}
                      <span className="text-xl text-black-600 font_25">$0.00</span>
                    </div>
                    }            
                    {
                      webinarDetailPage?.date && <div className="mb-3">
                      <span className="text-xl font-semibold font_26 font_32">{t("date")}:</span>{" "}
                      <span className="text-xl text-black-600 font_25">
                    {new Date(webinarDetailPage?.date).toLocaleDateString(language, {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                    </div>
                    }     
                    {
                      webinarDetailPage?.time &&  <div className="mb-3">
                      <span className="text-xl font-semibold font_26 font_32">{t("time")}:</span>{" "}
                      <span className="text-xl text-black-600 font_25">{webinarDetailPage?.time}</span>
                    </div>
                    }    
                 {
                (webinarDetailPage?.description?.length > 0 || webinarDetailPage?.description_ar?.length > 0) && (
                    <div className="mb-3">
                      {language === "en" ? (
                        webinarDetailPage?.description?.length > 0 ? (
                          <span className="text-xl font-semibold font_26 font_32">{t("outline")}:</span>
                        ) : null
                      ) : (
                        webinarDetailPage?.description_ar?.length > 0 ? (
                          <span className="text-xl font-semibold font_26 font_32">{t("outline")}:</span>
                        ) : null
                      )}
                        <div
                          className="text-xl text-black-600 font_26 detail_titles"
                          dangerouslySetInnerHTML={{
                            __html: (language === "en" ? webinarDetailPage?.description : webinarDetailPage?.description_ar)
                              .replace(/<ol>/g, '<ol style="list-style-type: decimal; margin-left: 20px;">')
                              .replace(/<ul>/g, '<ul style="list-style-type: disc; margin-left: 20px;">'),
                          }}
                        />
                      </div>
                    )
                }        
                   <button
                   disabled={loading}
                      onClick={()=>handleSubmit(webinarDetailPage._id)}
                        className="py-2.5 px-6 text-white rounded-3xl font-medium xl:text-xl text-sm bg-btn-gradient hover:bg-btn-gradient-hover lg:mr-8 lg:text-lg"
                      >
                        {t("enrollnow")}
                        </button>
                  </div>
                </div>
              </section>
              </>
            )
          }      
      <ToastContainer />
        </div>
      );
}

export default WebInarDeatilPage
