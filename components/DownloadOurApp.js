import Image from 'next/image';
import Link from "next/link"; 
import { useTranslations } from "next-intl"; 

export default function DownloadOurApp() {
  const t = useTranslations("ThankYou");

  return (
    <>
      <div className='2xl:container xl:container md:container mx-auto'>
        <section className="DownloadOurApp bg-gray-light lg:pt-9">
          <div className="2xl:container xl:container lg:container mx-auto px-5">
            <div className="md:grid md:grid-cols-2 flex flex-col-reverse">
              <div className="DownloadOurApp-content xl:max-w-[685px] max-w-full lg:pt-20 pt-8">
                <div className="heading-box text-left mb-3.5 rtl:text-right">
                  <h5 className="text-info-color 2xl:text-[22px] xl:text-[20px] lg:text-[18px] sm:text-[16px] text-[14px] 2xl:leading-[69px] font-black rtl:2xl:text-[56px] rtl:xl:text-[40px] rtl:text-[30px]">
                    {t('headingSmall')}
                  </h5>
                  <h2 className="2xl:text-[40px] xl:text-[35px] lg:text-[30px] sm:text-[25px] text-[14px] 2xl:leading-[88px] font-bold rtl:2xl:text-[72px] rtl:xl:text-[50px] rtl:text-[40px]">
                    {t('downloadOurApp')}
                  </h2>
                </div>
                <p className="2xl:text-[24px] xl:text-[22px] lg:text-[20px] sm:text-[18px] text-[14px] rtl:xl:text-[48px] mb-2 font-bold text-[#753892]">
                  {t('connectWithExperts')}
                </p>
                <p className="2xl:text-[24px] xl:text-[22px] lg:text-[20px] sm:text-[18px] text-[14px] xl:leading-10 rtl:xl:text-[40px] rtl:max-w-[786px] font-normal mb-4">
                  {t('personalizedSupport')}
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
    </>
  );
}