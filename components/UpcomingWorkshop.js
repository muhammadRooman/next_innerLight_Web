import Image from 'next/image';
import { useTranslations } from "next-intl";

export default function UpcomingWorkshop() {
  const t = useTranslations("UpComingWorkShop");
  const workshops = [
    {
      id: 1,
      imgSrc: "/MediaImg1.png",
      description: t("discuss_how_support_groups"),
    },
    {
      id: 2,
      imgSrc: "/MediaImg2.png",
      description: t("discover_strategies_to_improve"),
    },
    {
      id: 3,
      imgSrc: "/MediaImg3.png",
      description: t("learn_about_the_benefits_of_active"),
    },
  ];

  return (
    <section className="SubscribeUs-wrap mt-6 lg:mb-0 mb-3">
      <div className="SubscribeUs-card shadow-shadow-color rounded-10 lg:py-4 lg:px-8 p-5">
        <h1 className="2xl:text-2xl rtl:2xl:text-[40px] text-xl font-bold text-center mb-6">{t("upcoming_workshop")}</h1> 
        {workshops.map((workshop) => (
          <div 
            key={workshop.id} 
            className="mediaObject flex justify-start items-center mb-5"
          >
            <Image 
              src={workshop.imgSrc} 
              alt="Workshop image" 
              width={103} 
              height={94} 
              className="rounded-10 lg:w-[103px] w-20" 
            />
            <div className="mediaContent ml-5 xl:max-w-[307px] max-w-full">
              <p className='lg:text-lg text-sm text-left rtl:text-right'>{workshop.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
