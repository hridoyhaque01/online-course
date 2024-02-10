"use client";
import instructor1 from "@/public/instructor-1.png";
import instructor2 from "@/public/instructor-2.png";
import instructor3 from "@/public/instructor-3.png";
import instructor4 from "@/public/instructor-4.png";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

const Team = () => {
  const options = {};
  const contents = [
    {
      id: 1,
      fileUrl: instructor1,
      title: "Sarah Johnson",
      department: "Web Development",
    },
    {
      id: 2,
      fileUrl: instructor2,
      title: "Dr. Alex Rodriguez",
      department: "Data Science Specialist",
    },
    {
      id: 3,
      fileUrl: instructor3,
      title: "Mark Taylor",
      department: "Digital Marketing Strategist",
    },
    {
      id: 4,
      fileUrl: instructor4,
      title: "Jasmine Lee",
      department: "Graphic Design Innovator",
    },
  ];
  const [emblaRef] = useEmblaCarousel(options);
  return (
    <section className="pt-5 sm:pt-10 lg:pt-16 duration-200 relative">
      <div className="container relative z-20">
        {/* headers  */}
        <div className="text-center px-6 w-full max-w-[824px] mx-auto">
          <h1 className="title">Meet Our Instructors</h1>
          <p className="subtitle mt-4">
            Unlock knowledge with industry experts. Our passionate instructors
            ensure an enriching educational journey. Join us to learn from the
            best!
          </p>
        </div>
        {/* content  */}
        <div className="w-full mt-0 sm:mt-8">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="w-full flex items-stretch max-w-max mx-auto h-max">
              {contents?.map((item, index) => (
                <Card key={index} item={item}></Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;

export const Card = ({ item }) => {
  return (
    <div className="w-full max-w-[270px] shrink-0">
      <div className="py-8 px-3  h-full">
        <div className="rounded-3xl bg-white-100 dark:bg-dark-900 shadow-grey w-full h-full overflow-hidden">
          <div className="mb-4">
            <Image
              src={item?.fileUrl}
              width={0}
              sizes="100vw"
              alt="diverse bg"
            />
          </div>
          <div className="px-4 py-8 text-center">
            <h2 className="text-base font-medium text-black-900 dark:text-white-500">
              {item?.title}
            </h2>
            <p className="text-xs text-black-100 dark:text-white-500 mt-1">
              {item?.department}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
