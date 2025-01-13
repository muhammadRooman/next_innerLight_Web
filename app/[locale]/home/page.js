"use client"
import { usePathname, useRouter } from 'next/navigation';
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import Link from "next/link";
import SubscribeUs from "@/components/SubscribeUs";
import BlogsCard from "@/components/BlogsCard";
import useSWR from 'swr';
import FullPageLoader from '@/components/fullPageLoader.js/FullPageLoader';
import OurClients from '@/components/OurClients';
import Head from "@/app/[locale]/home/head"; // Import DefaultTags component

// Define fetcher function
const fetcher = (url) => fetch(url).then((r) => r.json());

export default function LandingPage() {
  const t = useTranslations("SiteBanner");
  const router = useRouter();
  const currentPath = usePathname();
  const [language, setLanguage] = useState('')
  const [cmsWebHeadingData, setCmsWebHeadingData] = useState("")
  const [cmsWebCommitmentData, setCmsWebHCommitmentData] = useState("")
  const [CmsWebHMeditationData, setCmsWebHMeditationData] = useState("")
  const [CmsWebHEventsData, setCmsWebHEventsData] = useState([])
  const [testimonialsData, setTestimonialsData] = useState([])
  {/* State to manage visibility */ }
  const [showAll, setShowAll] = useState(false);

  {/* Data to be displayed */ }
  // const displayedEvents = showAll ? CmsWebHEventsData : CmsWebHEventsData.slice(-3);
  // Reverse the data for latest events
  const displayedEvents = showAll
    ? CmsWebHEventsData.slice().reverse()
    : CmsWebHEventsData.slice(-3).reverse();

  const latestEvent = [...CmsWebHEventsData].reverse()[0];

  // Fetch cmsWeb data using SWR
  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_BASE_API}/cmsWeb`,
    fetcher
  );

  // Fetch Webinar data using SWR
  const { data: WebinarData, error: WebinarError, isLoading: isWebinarLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_BASE_API_FRONT}/webinars/events`,
    fetcher
  );

  // Fetch Testimonial data using SWR
  const { data: testimonialData, error: testimonialError, isLoading: isTestimonialLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_BASE_API}/testimonial`,
    fetcher
  );

  // fetched cmsWeb
  useEffect(() => {
    if (data) {
      setCmsWebHeadingData(data?.cmsWeb?.header)
      setCmsWebHCommitmentData(data?.cmsWeb?.commitment)
      setCmsWebHMeditationData(data?.cmsWeb?.meditation)
    }
    const lang = currentPath.split('/')[1] || 'en';
    setLanguage(lang);
  }, [data, currentPath]);

  // fetched Webinar
  useEffect(() => {
    if (WebinarData) {
      setCmsWebHEventsData(WebinarData?.events)
    }
  }, [WebinarData]);

  // fetched testimonialData
  useEffect(() => {
    if (testimonialData) {
      setTestimonialsData(testimonialData?.testimonials)
    }
  }, [testimonialData]);

  const truncateText = (text) => {
    if (!text) return '';
    const words = text.split(' ');
    return words.length > 15 ? words.slice(0, 15).join(' ') + '...' : text;
  };


  if (isLoading) return <div> <FullPageLoader /></div>;
  if (error) return <div>Error: {error.message}</div>;

  const benefits = [
    {
      id: 1,
      image: "/benefitsImg1.png",
      title: t("personalization"),
      description: t("para_1")
    },
    {
      id: 2,
      image: "/benefitsImg2.png",
      title: t("community"),
      description: t("para_2")
    },
    {
      id: 3,
      image: "/benefitsImg3.png",
      title: t("accessibility"),
      description: t("para_3")
    },
    {
      id: 4,
      image: "/benefitsImg4.png",
      title: t("flexibility"),
      description: t("para_4")
    }
  ];

  return (
    <>
      <Head />
      {/* Hero Banner Section */}
      <section className="site-banner home_banner bg-site-banner bg-cover 2xl:min-h-[calc(997px-100px)] lg:min-h-[calc(997px-400px)] sm:min-h-[calc(997px-600px)] min-h-[calc(350px)] relative flex items-end justify-center md:pb-10 pb-5 lg:bg-center bg-center">
        <div className="2xl:container xl:container lg:container mx-auto px-5">
          <div className="inner-container relative sm:pt-4 md:pt0">
            <div className="site-banner-content home_banner max-w-[965px] mx-auto">
              <h5 className="xl:text-40 rtl:xl:text-[100px] lg:text-[30px] text-[22px] text-white font-bold text-center xl:leading-normal">{language === "en" ? cmsWebHeadingData?.heading_en : cmsWebHeadingData?.heading_ar} </h5>
              <div className="relative banner-img 2xl:min-h-[148px] sm:min-h-[80px] lg:min-h-[120px] min-h-[60px] max-w-full wellness_image_wrap">
                {
                  language === "en" ? (
                    <Image
                      src="/wellness.png"
                      alt={t("wellnessAlt")}
                      layout="fill"
                      className="max-w-full object-contain"
                    />
                  ) : (
                    <Image
                      src="/wellness_arabic.png"
                      alt={t("wellnessAlt")}
                      width={485}
                      height={160}
                      className='m-auto object-contain'
                    />
                  )
                }
              </div>
              <p className="text-center text-white 2xl:text-2xl lg:text-xl md:text-[16] md:max-w-[650px] xl:max-w-[956px] sm:text-[14px] text-[12px] 2xl:leading-10 rtl:2xl:text-[40px] mt-6">{language === "en" ? cmsWebHeadingData?.description_en : cmsWebHeadingData?.description_ar}</p>
            </div>
            <div className="social-icon">
              <nav className="flex items-center justify-center mt-6">
                {cmsWebHeadingData?.facebook && (
                  <Link href={cmsWebHeadingData.facebook}
                    target="_blank"
                    className="
                   min-w-14 min-h-14 
                   small:min-w-7 small:min-h-7  
                   xs:min-w-9 xs:min-h-9       
                   sm:min-w-11 sm:min-h-11  
                   lg:min-w-16 lg:min-h-16  
                   rounded-full border-solid border-2 
                   flex items-center justify-center border-info-color 
                   ease-in-out me-2 hover:bg-info-color">

                    <Image
                      src="/facebook.png"
                      width={25} height={25}
                      alt={t("facebookAlt")}
                      className="
                     max-w-full object-contain 
                     small:w-4 small:h-4   
                     xs:w-5 xs:h-5       
                     sm:w-6 sm:h-6     
                     lg:w-9 lg:h-9   
                   "
                    />
                  </Link>
                )}
                {cmsWebHeadingData?.twitter && (
                  <Link href={cmsWebHeadingData.twitter} target="_blank" className="min-w-14 min-h-14 
                   small:min-w-7 small:min-h-7  
                   xs:min-w-9 xs:min-h-9       
                   sm:min-w-11 sm:min-h-11  
                   lg:min-w-16 lg:min-h-16  
                   rounded-full border-solid border-2 
                   flex items-center justify-center border-info-color 
                   ease-in-out me-2 hover:bg-info-color">
                    <Image src="/twitter.png" width={25} height={25} alt={t("twitterAlt")} className="max-w-full object-contain 
                     small:w-4 small:h-4   
                     xs:w-5 xs:h-5       
                     sm:w-6 sm:h-6     
                     lg:w-9 lg:h-9" />
                  </Link>
                )}
                {cmsWebHeadingData?.linkedin && (
                  <Link href={cmsWebHeadingData.linkedin} target="_blank" className="min-w-14 min-h-14 
                   small:min-w-7 small:min-h-7  
                   xs:min-w-9 xs:min-h-9       
                   sm:min-w-11 sm:min-h-11  
                   lg:min-w-16 lg:min-h-16  
                   rounded-full border-solid border-2 
                   flex items-center justify-center border-info-color 
                   ease-in-out me-2 hover:bg-info-color">
                    <Image src="/linkedin.png" width={25} height={25} alt={t("linkedinAlt")} className="max-w-full object-contain 
                     small:w-4 small:h-4   
                     xs:w-5 xs:h-5       
                     sm:w-6 sm:h-6     
                     lg:w-9 lg:h-9" />
                  </Link>
                )}
                {cmsWebHeadingData?.youtube && (
                  <Link href={cmsWebHeadingData.youtube} target="_blank" className="min-w-14 min-h-14 
                   small:min-w-7 small:min-h-7  
                   xs:min-w-9 xs:min-h-9       
                   sm:min-w-11 sm:min-h-11  
                   lg:min-w-16 lg:min-h-16  
                   rounded-full border-solid border-2 
                   flex items-center justify-center border-info-color 
                   ease-in-out me-2 hover:bg-info-color">
                    <Image src="/playSolid.png" width={25} height={25} alt={t("playSolidAlt")} className="max-w-full object-contain 
                     small:w-4 small:h-4   
                     xs:w-5 xs:h-5       
                     sm:w-6 sm:h-6     
                     lg:w-9 lg:h-9" />
                  </Link>
                )}
              </nav>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <div className='2xl:container xl:container md:container mx-auto'>
        <section className="commitment-wrap bg-gray-light lg:pt-[80px] xl:pb-[90px] lg:pb-[80px] md:pt-[50px] pt-[30px] md:pb-[60px] pb-[40]">
          <div className="2xl:container xl:container lg:container mx-auto px-5">
            <div className="heading-box text-center md:pb-0 pb-5 arabic_heading_box">
              <h5 className="text-info-color 2xl:text-3xl xl:text-2xl lg:text-xl text-[16px] sm:text-md font-black rtl:2xl:text-[56px] rtl:xl:text-[40px] rtl:text-[30px] sm:text-[20px] arabic_heading_one">
                {t("innerLight")}
              </h5>
              <h2 className="xl:text-[40px] lg:text-[30px] text-[18px] font-bold rtl:2xl:text-[72px] rtl:xl:text-[50px] rtl:text-[40px] sm:text-[22px] arabic_heading_two">
                {language === "en" ? cmsWebCommitmentData?.heading_en : cmsWebCommitmentData?.heading_ar}
              </h2>
            </div>

            <div className="grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 small:grid-cols-1 items-center blog-card-content">
              {/* First Column */}
              <div className="lg:col-span-1 md:col-span-1 small:col-span-2 col-span-1">
                <div className="commitment-content text-center lg:mb-36 mb-4 lg:max-w-[395px] max-w-full">
                  <p className="md:text-lg text-sm md:leading-[28px] rtl:2xl:text-[32px] rtl:max-w-[750px] rtl:md:text-[28px font-normal font_32">
                    {language === "en" ? cmsWebCommitmentData?.point1_en : cmsWebCommitmentData?.point1_ar}
                  </p>
                </div>
                <div className="commitment-content text-center lg:mb-36 mb-4 lg:max-w-[395px] max-w-full">
                  <p className="xl:text-lg md:text-base sm:text-sm text-[14px] rtl:2xl:text-[32px] rtl:md:text-[28px] font-normal font_32">
                    {language === "en" ? cmsWebCommitmentData?.point2_en : cmsWebCommitmentData?.point2_ar}
                  </p>
                </div>
                <div className="commitment-content text-center lg:max-w-[395px] max-w-full mb-4">
                  <p className="xl:text-lg md:text-base sm:text-sm text-[14px] rtl:2xl:text-[32px] rtl:md:text-[28px] font-normal font_32">
                    {language === "en" ? cmsWebCommitmentData?.point3_en : cmsWebCommitmentData?.point3_ar}
                  </p>
                </div>
              </div>

              {/* Middle Column with Image */}
              <div className="col-span-2">
                <div className="relative xl:max-w-[566px] lg:max-w-[440px] md:max-w-[360px] sm:max-w-[280px] max-w-full lg:min-h-[715px] md:min-h-[450px] sm:min-h-[450px] min-h-[300px] shadow-shadow-color bg-white p-2.5 mx-auto rounded-10 my-7 comitment_img">
                  <Image
                    src="/CommitmentImg.png"
                    alt="Commitment Image"
                    layout="fill"
                    className="rounded-30 object-cover p-2.5"
                  />
                </div>
              </div>

              {/* Third Column */}
              <div className="lg:col-span-1 md:col-span-1 small:col-span-2 col-span-1">
                <div className="commitment-content text-center lg:mb-36 lg:max-w-[395px] max-w-full mb-4">
                  <p className="xl:text-lg md:text-base sm:text-sm text-[14px] rtl:2xl:text-[32px] rtl:md:text-[28px] font-normal font_32">
                    {language === "en" ? cmsWebCommitmentData?.point4_en : cmsWebCommitmentData?.point4_ar}
                  </p>
                </div>
                <div className="commitment-content text-center lg:mb-36 lg:max-w-[395px] max-w-full mb-4">
                  <p className="xl:text-lg md:text-base sm:text-sm text-[14px] rtl:2xl:text-[32px] rtl:md:text-[28px] font-normal font_32">
                    {language === "en" ? cmsWebCommitmentData?.point5_en : cmsWebCommitmentData?.point5_ar}
                  </p>
                </div>
                <div className="commitment-content text-center lg:max-w-[395px] max-w-full mb-4">
                  <p className="xl:text-lg md:text-base sm:text-sm text-[14px] rtl:2xl:text-[32px] rtl:md:text-[28px] font-normal font_32">
                    {language === "en" ? cmsWebCommitmentData?.point6_en : cmsWebCommitmentData?.point6_ar}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>
      </div>

      <section className="MeditationConsultation-wrap">
        <div className='MeditationConsultation-inner flex lg:min-h-[997px] min-h-[860px]'>
          <div className='Meditation-left-img bg-meditation-left w-full bg-cover lg:max-w-[calc(100%-70%)] max-w-full min-h-full lg:block hidden'></div>
          <div className='Meditation-content bg-meditation-bg w-full bg-cover md:pt-12 pt-5 lg:pl-16 rtl:lg:pr-16 2xl:pr-[260px] rtl:2xl:pl-[260px] xl:pr-[140px] rtl:xl:pl-[140px] lg:pr-[45px] rtl:lg:pl-[45px] rtl:px-4 lg:max-w-[calc(100%-30%)] max-w-full min-h-full px-5'>
            <div className='Meditation-content-inner md:pb-8 pb-4'>
              <div className='max-w-[887px]'>
                <div className='heading-box xl:mb-9 mb-4'>
                  <h5 className='text-info-color 2xl:text-[22px] xl:text-[20px] lg:text-[18px] sm:text-[16px] text-[14px] font-black rtl:2xl:text-[56px] rtl:xl:text-[40px] rtl:text-[30px] arabic_heading_one'>{t("innerLight")}</h5>
                  <h2 className='2xl:text-[40px] xl:text-[36px] lg:text-[30px] sm:text-[25px] text-[14px] font-bold rtl:2xl:text-[72px] rtl:xl:text-[50px] rtl:text-[40px] arabic_heading_two'>{language === "en" ? CmsWebHMeditationData?.heading_en : CmsWebHMeditationData?.heading_ar}</h2>
                </div>
                <p className='2xl:text-[24px] xl:text-[22px] lg:text-[20px] sm:text-[18px] text-[14px] xl:leading-10 rtl:xl:text-[40px] rtl:max-w-[926px] rtl:xl:leading-10 font-normal mb-4 font_40'>
                  {language === "en" ? CmsWebHMeditationData?.description_en : CmsWebHMeditationData?.description_ar}
                </p>
                <h5 className='2xl:text-[24px] xl:text-[22px] lg:text-[20px] sm:text-[18px] text-[14px] xl:leading-10 rtl:xl:text-[48px] md:mb-24 mb-6 font-bold text-[#753892] heading_48 compassionate'>
                  {t("connect_with_compassionate")}
                </h5>
              </div>
              <div className='static-img relative lg:left-[-166px] rtl:lg:right-[-166px] mt-8 lg:w-[calc(100%+166px)] w-full'>
                <div className="md:grid md:grid-cols-3 items-center">
                  <div className='col-span-1'>
                    <div className='static-img-wrap relative min-h-[200px] sm:min-h-[300px] xs:min-h-[250px] lg:min-h-[412px] rounded-10 overflow-hidden'>
                      <Image src="/MmeditationImg1.png" alt="logo white" layout="fill" className="rounded-30 object-cover p-2.5" />
                    </div>
                  </div>
                  <div className='col-span-1'>
                    <div className='static-img-wrap relative min-h-[200px] sm:min-h-[300px] xs:min-h-[250px] lg:min-h-[412px] rounded-10 overflow-hidden'>
                      <Image src="/MmeditationImg2.png" alt="logo white" layout="fill" className="rounded-30 object-cover p-2.5" />
                    </div>
                  </div>
                  <div className='col-span-1'>
                    <div className='static-img-wrap relative min-h-[200px] sm:min-h-[300px] xs:min-h-[250px] lg:min-h-[412px] rounded-10 overflow-hidden'>
                      <Image src="/MmeditationImg3.png" alt="logo white" layout="fill" className="rounded-30 object-cover p-2.5" />
                    </div>
                  </div>
                </div>
              </div>
              <div className='book-you-button sm:flex sm:justify-between items-center md:mt-8 mt-3 justify-center text-center'>
                <h5 className='text-black 2xl:text-[40px] xl:text-[35px] lg:text-[30px] xs:text-[25px] text-[14px] font-bold mb-3'>{t("book_your_consultation")}</h5>
                <Link href={`/${language}/contact`} className="py-2 md:px-6 px-3 text-white rounded-3xl font-medium rtl:font-black xl:text-xl md:text-[15px] sm:text-[10px] rtl:xl:text-[32px] text-[9px] bg-btn-gradient hover:bg-btn-gradient-hover ml-4 rtl:text-[12px]">{t("contact_us")}</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className='2xl:container xl:container md:container mx-auto'>
        <section className="DownloadOurApp bg-gray-light lg:pt-9">
          <div className="2xl:container xl:container lg:container mx-auto px-5">
            <div className="md:grid md:grid-cols-2 flex flex-col-reverse">
              <div className="DownloadOurApp-content xl:max-w-[685px] max-w-full lg:pt-20 pt-8">
                <div className="heading-box text-left mb-3.5 rtl:text-right">
                  <h5 className="text-info-color 2xl:text-[22px] xl:text-[20px] lg:text-[18px] sm:text-[16px] text-[14px] 2xl:leading-[69px] font-black rtl:2xl:text-[56px] rtl:xl:text-[40px] rtl:text-[30px] arabic_heading_one innerlight_heading_space">
                    {t('headingSmall')}
                  </h5>
                  <h2 className="2xl:text-[40px] xl:text-[35px] lg:text-[30px] sm:text-[25px] text-[14px] 2xl:leading-[88px] font-bold rtl:2xl:text-[72px] rtl:xl:text-[50px] rtl:text-[40px] arabic_heading_two">
                    {t('downloadOurApp')}
                  </h2>
                </div>
                <h5 className="2xl:text-[24px] xl:text-[22px] lg:text-[20px] text-[#753892] sm:text-[18px] text-[14px] xl:leading-10 rtl:xl:text-[40px] rtl:max-w-[786px] mb-4 font-bold font_40">
                  {t('personalizedSupport')}
                </h5>
                <p className="2xl:text-[24px] xl:text-[22px] lg:text-[20px] sm:text-[18px] text-[14px] rtl:xl:text-[48px] mb-2 text-[#000] font_25 compassionate">
                  {t('connectWithExperts')}
                </p>
                <div className="QR-box mt-9 flex xs:justify-between small:justify-center items-center max-w-[420px] gap-3">
                  <div className="btn-download">
                    <Link href="https://apps.apple.com/au/app/innerlight-academy/id6670317150" target="_blank">
                      <Image
                        src="/AppStore.png"
                        width={180}
                        height={55}
                        alt="AppStore"
                        className="w-[90px] xl:w-[180px] lg:w-[160px] md:w-[140px] sm:w-[120px] xs:w-[100px]"
                      />

                    </Link>
                    <Link href="https://play.google.com/store/apps/details?id=com.arhamsoft.innerlight.innerlights&hl=en" target="_blank" className="md:mt-9 xs:mt-5 mt-3 block">
                      <Image src="/GooglePlay.png" width={180} height={55} alt="Google Play" className="w-[90px] xl:w-[180px] lg:w-[160px] md:w-[140px] sm:w-[120px] xs:w-[100px]" />
                    </Link>
                  </div>
                  <div className="QR">
                    <Image
                      src="/QR-Code.png"
                      width={128}
                      height={128}
                      alt="QR Code"
                      className="w-[90px] xl:w-[120px] lg:w-[110px] md:w-[100px] sm:w-[90px] xs:w-[80px]"
                    />

                  </div>
                </div>
              </div>
              <div className="DownloadOurApp-img">
                <div className="relative xl:min-h-[700px] min-h-[300px]">
                  <Image
                    src="/DownloadOurApp.png"
                    alt="App Image"
                    layout="responsive"
                    width={400}
                    height={400}
                    className="rounded-30 lg:object-contain object-contain p-2.5 xl:w-[400px] sm:w-[250px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className='2xl:container xl:container md:container mx-auto'>
        <section className="benefits-holistic bg-gray-light lg:pt-0 xs:pt-8 small:pt-0 pb-[40px] small:pb-0 sm:pb-[10px]">
          <div className="2xl:container xl:container lg:container mx-auto px-5">
            <div className="heading-box text-center md:mb-20 mb-5">
              <h5 className="text-info-color 2xl:text-3xl xl:text-2xl lg:text-xl text-[16px] sm:text-md font-black rtl:2xl:text-[56px] rtl:xl:text-[40px] rtl:text-[30px] sm:text-[20px] arabic_heading_one">
                {t("discoverThe")}
              </h5>
              <h2 className="xl:text-[40px] lg:text-[30px] text-[18px] font-bold rtl:2xl:text-[72px] rtl:xl:text-[50px] rtl:text-[40px] sm:text-[22px] arabic_heading_two">
                {t("benefits_of_holistic")}
              </h2>
            </div>
            <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 small:grid-cols-1 md:gap-7 small:gap-3">
              {benefits.map(benefit => (
                <div key={benefit.id} className="benefits-card-wrap xl:mb-3 mb-6">
                  <div className="benefits-card text-center">
                    <div className="relative lg:min-h-[280px] md:min-h-[200px] sm:min-h-[280px] small:min-h-[280px]">
                      <Image
                        src={benefit.image}
                        alt={benefit.title}
                        layout="fill"
                        className="object-cover rounded-10"
                      />
                    </div>
                    <div className="benefits-content xl:max-w-[307px] mx-auto">
                      <h5 className="2xl:text-2xl rtl:2xl:text-[32px] text-xl font-bold text-info-color lg:py-5 py-3 sm:text-[18px] font_40">
                        {benefit.title}
                      </h5>
                      <p className="xl:text-lg rtl:2xl:text-[32px] rtl:md:text-[28px] font-normal sm:text-[14px] font_32">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* blog */}

      <div className='2xl:container xl:container md:container mx-auto'>
        <section className='blog-wrap bg-gray-light'>
          <div className="2xl:container xl:container lg:container px-5 mx-auto lg:py-12 py-5">
            <div className="heading-box lg:text-left rtl:text-right text-center mb-9">
              <h5 className="text-info-color 2xl:text-2xl text-[14px] mb-3 sm:text-[14px] lg:text-[16px] xl:text-[18px] font-black rtl:2xl:text-[56px] rtl:xl:text-[40px] rtl:text-[30px] leading-[22px] sm:leading-[22px] lg:leading-[26px] xl:leading-[30px] arabic_heading_one">
                {t("deepen_your_practice")}
              </h5>
              <h2 className="xl:text-[40px] lg:text-[30px] text-[18px] font-bold rtl:2xl:text-[72px] rtl:xl:text-[50px] rtl:text-[40px] sm:text-[14px] leading-[24px] sm:leading-[24px] lg:leading-[28px] xl:leading-[32px] arabic_heading_two">
                {t("blogs_and_upcoming_workshops")}
              </h2>
            </div>
            <div className="grid xl:grid lg:grid-cols-12 gap-6">
              <div className='col-span-8'>
                <div className='blog-card shadow-shadow-color rounded-10 xl:mb-0 mb-6'>
                  <Link href={`/${language}/event/${latestEvent?._id}`}>
                    <div className="card-img relative xl:min-h-[521px] lg:min-h-[421px] min-h-[300px] overflow-hidden group">
                      <Image
                        src={`${process.env.NEXT_PUBLIC_IMAGE_API}/${latestEvent?.thumbnailPic}`}
                        alt="BlogCard1 white"
                        layout="fill"
                        className="rounded-10 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                      />
                    </div>
                  </Link>
                  <div className='card-content lg:p-7 p-5 lg:pb-10 pb-7'>
                    <h4 className="2xl:text-2xl font-bold max-w-[605px] hover:text-blue-500 mb-4 text-[14px] lg:text-[16px] xl:text-[18px] leading-[20px] sm:leading-[20px] lg:leading-[24px] xl:leading-[28px] heading_40">
                    <Link href={`/${language}/event/${latestEvent?._id}`}>
                      {language === "en"
                        ? truncateText(latestEvent?.name || "No description available")
                        : truncateText(latestEvent?.name_ar || "تفصیل موجود نہیں")}
                    </Link>
                    </h4>
                    <p className="lg:text-lg text-sm hover:text-blue-500 mb-4 text-[14px] sm:text-[14px] lg:text-[16px] xl:text-[18px] leading-[18px] sm:leading-[18px] lg:leading-[22px] xl:leading-[24px] font_32">
                    <Link href={`/${language}/event/${latestEvent?._id}`}>
                      {language === "en"
                        ? truncateText(latestEvent?.shortDescription || "No description available")
                        : truncateText(latestEvent?.shortDescription_ar || "تفصیل موجود نہیں")}
                    </Link>
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-span-8 lg:col-span-4 xl:col-span-4'>
                <SubscribeUs cmsWeb={cmsWebHeadingData} />
                <section className="SubscribeUs-wrap mt-6 lg:mb-0 mb-3">
                  <div className="SubscribeUs-card shadow-shadow-color rounded-10 lg:py-4 lg:px-8 p-5">
                    <h1 className="2xl:text-2xl rtl:2xl:text-[40px] font-bold text-center mb-6 text-[16px] sm:text-[14px] lg:text-[16px] xl:text-[18px] leading-[22px] sm:leading-[22px] lg:leading-[26px] xl:leading-[30px] heading_40">
                      {t("upcoming_workshop")}
                    </h1>

                    {displayedEvents?.map((item) => (
                      <Link href={`/${language}/event/${item._id}`} key={item._id}>
                        <div className="mediaObject flex justify-start items-center mb-5 hover:text-blue-500 overflow-hidden group">
                          <Image
                            src={item.thumbnailPic ? `${process.env.NEXT_PUBLIC_IMAGE_API}/${item.thumbnailPic}` : '/default-thumbnail.jpg'} // Fallback image
                            alt="Workshop image"
                            width={103}
                            height={94}
                            className="rounded-10 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105 w-[103px] h-[94px]"
                          />
                          <div className="mediaContent ml-5 xl:max-w-[307px] max-w-full">
                            <p className="xl:text-lg rtl:2xl:text-[30px] rtl:md:text-[28px] font-normal rtl:mr-3 text-[14px] sm:text-[14px] lg:text-[16px] xl:text-[18px] leading-[18px] sm:leading-[18px] lg:leading-[22px] xl:leading-[24px] font_32">
                              {language === 'en' ? truncateText(item?.shortDescription || 'No description available') : truncateText(item?.shortDescription_ar || 'تفصیل موجود نہیں')}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                    {CmsWebHEventsData.length > 3 && (
                      <button
                        className="bg-primary text-black py-2 px-4 rounded rtl:2xl:text-[32px] md:text-[22px] small:text-[16px] hover:text-blue-500"
                        onClick={() => router.push(`/${language}/event`)}
                      >
                        {t("show_more")}
                      </button>
                    )}
                  </div>
                </section>
              </div>
            </div>
            <BlogsCard />
          </div>
        </section>

      </div>

      <OurClients />

      {/* Additional Sections */}
      {/* ...Other sections like DownloadOurApp, BenefitsOfHolistic, etc. */}
    </>
  );
}
