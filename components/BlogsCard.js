import Image from 'next/image';
import { useTranslations } from "next-intl";

export default function BlogsCard() {
  const t = useTranslations("BlogCard");
  const blogCards = [
    {
      id: 1,
      title: t("self_Care_practices_for_daily_healing"),
      description:t("share_practical_self_care_routines"),
      image: "/BlogsCard2.png",
    },
    {
      id: 2,
      title: t("self_Care_practices_for_daily_healing"),
      description:t("share_practical_self_care_routines"),
      image: "/BlogsCard3.png",
    },
    {
      id: 3,
      title: t("self_Care_practices_for_daily_healing"),
      description: t("share_practical_self_care_routines"),
      image: "/BlogsCard4.png",
    },
  ];

  return (
    <section className="blog-wrap bg-gray-light xl:py-9 py-6">
      <div className="grid md:grid-cols-3 gap-6 ">
        {blogCards.map((card) => (
          <div
            key={card.id}
            className="blog-card shadow-shadow-color rounded-10 md:mb-6 small:mb-0 xs:mb-3"
          >
            <div className="card-img relative lg:min-h-[243px] min-h-[200px] ">
              <Image
                src={card.image}
                alt={card.title}
                layout="fill"
                className="rounded-10 object-cover"
              />
            </div>
            <div className="card-content lg:p-6 lg:pb-10 p-5 ">
              <h4 className="2xl:text-2xl rtl:2xl:text-[40px] text-[16px] font-bold max-w-[727px] rtl:text-right heading_40">{card.title}</h4>
              <p className="lg:text-lg text-[12px] xl:text-lg rtl:2xl:text-[30px] rtl:md:text-[28px] font-normal font_28 mt-4">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
