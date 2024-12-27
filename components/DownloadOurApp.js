import Image from 'next/image';
import Link from "next/link"; 
import { useTranslations } from "next-intl"; 

export default function DownloadOurApp() {
  const t = useTranslations("ThankYou");

  return (
    <>
      <section className="DownloadOurApp bg-gray-light lg:pt-9">
        <div className="2xl:container xl:container lg:container mx-auto px-5"> 
          <div class="md:grid md:grid-cols-2 flex flex-col-reverse"> 
            <div className='DownloadOurApp-content xl:max-w-[685px] max-w-full lg:pt-20 pt-8 '> 
              <div className='heading-box text-left mb-3.5 rtl:text-right'>
                <h5 className='text-info-color 2xl:text-2xl font-black rtl:2xl:text-[56px] rtl:xl:text-[40px] rtl:text-[30px]'>{t('headingSmall')}</h5>
                <h2 className='xl:text-40 lg:text-[30px] text-[25px] font-bold rtl:2xl:text-[72px] rtl:xl:text-[50px] rtl:text-[40px]'>{t('downloadOurApp')}</h2>
              </div>
              <p className='text-lg xl:text-2xl font-bold text-[#753892] mb-7'>{t('connectWithExperts')}</p>
              <p className='text-lg xl:text-2xl mt-10'>{t('personalizedSupport')}</p>
              <div className='QR-box mt-9 flex justify-between items-center max-w-[420px]'>
                <div className='btn-download'>
                  <Link href="https://apps.apple.com/au/app/innerlight-academy/id6670317150" target='_blank' className=""><Image src="/AppStore.png" width={180} height={55} alt="AppStore" className=''/></Link> 
                  <Link href="https://play.google.com/store/apps/details?id=com.arhamsoft.innerlight.innerlights&hl=en" target='_blank'  className="mt-9 block"><Image src="/GooglePlay.png" width={180} height={55} alt="GoogleStore" className=''/></Link> 
                </div>
                <div className='QR'>
                  <Image src="/QR-Code.png" width={128} height={128} alt="AppStore" className=''/>
                </div>
              </div>
            </div> 
            <div className='DownloadOurApp-img  '> 
              <div className='relative xl:min-h-[700px] min-h-[400px]' >
                <Image src="/DownloadOurApp.png" alt="logo white" layout="fill" className="rounded-30 lg:object-contain object-contain p-2.5 xl:w-[400px]" />
              </div> 
            </div> 
          </div> 
        </div> 
      </section>
    </>
  );
}