import Image from 'next/image';
import { useTranslations } from "next-intl";
import SubscribeUs from "@/components/SubscribeUs";
import UpcomingWorkshop from "@/components/UpcomingWorkshop"; 
import BlogsCard from "@/components/BlogsCard"; 
export default function Blogs() {
  const t = useTranslations("Blog");
  return (
    <>
     <section className='blog-wrap bg-gray-light'>
        <div className="2xl:container xl:container lg:container px-5 mx-auto lg:py-12 py-7">
          <div className="heading-box lg:text-left text-center mb-9    ">
            <h5 className="text-info-color 2xl:text-2xl font-black">{t("deepen_your_practice")}</h5>
            <h2 className="xl:text-40 lg:text-[30px] text-[25px] font-bold">{t("blogs_and_upcoming_workshops")}</h2> 
          </div>
          <div className="xl:grid xl:grid-cols-12 gap-6">
            <div className='col-span-8'> 
                 <div className='blog-card shadow-shadow-color rounded-10 xl:mb-0 mb-6'> 
                    <div className='card-img relative xl:min-h-[521px] lg:min-h-[421px] min-h-[300px]'>
                        <Image src="/BlogCard1.png" alt="BlogCard1 white" layout="fill"  className="rounded-10 object-cover  " />
                    </div> 
                    <div className='card-content lg:p-7 p-5 lg:pb-10 pb-7 '>
                        <h4 className='2xl:text-2xl text-xl font-bold max-w-[605px] mb-4'>{t("the_mind_body_connection_how_mental_health")}</h4>
                        <p className='lg:text-lg text-sm'>{t("discuss_how_emotional_and_psychological")}</p>
                    </div>
                 </div> 
            </div>
            <div className='col-span-4  '> 
                <SubscribeUs />
                <UpcomingWorkshop   />
            </div>
          </div>
           <BlogsCard />
        </div>
     </section>
    </>
  )
}
