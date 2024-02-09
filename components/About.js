"use client";
import diverse from "@/public/diverse.png";
import flexible from "@/public/flexible.png";
import interactive from "@/public/interactive.png";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

const About = () => {
  const options = {};
  const contents = [
    {
      id: 1,
      fileUrl: diverse,
      title: "Diverse Course Selection",
      description:
        "Choose from a variety of courses spanning [list of categories, e.g., technology, business, arts, health, etc.]. Our extensive library ensures that you find the perfect learning path for your goals.",
    },
    {
      id: 2,
      fileUrl: flexible,
      title: "Flexible Learning",
      description:
        "Life is busy, and we understand that. That's why our courses are designed to fit into your schedule. Learn at your own pace, from anywhere in the world.",
    },
    {
      id: 3,
      fileUrl: interactive,
      title: "Interactive Learning Experience",
      description:
        "Engage in hands-on projects, discussions, and assessments. Our interactive approach ensures that you not only absorb information but also apply it effectively.",
    },
  ];
  const [emblaRef] = useEmblaCarousel(options);
  return (
    <section className="pt-5 sm:pt-10 lg:pt-16 duration-200 relative">
      <div className="container relative z-20">
        {/* headers  */}
        <div className="text-center px-6">
          <h1 className="title">Why Choose Us</h1>
          <p className="subtitle mt-4">
            At Coursbes, we believe in the transformative power of education.
            Here's why thousands of learners choose us:
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
      <div className="w-44 sm:w-64 md:w-72 aspect-square bg-secondary-500 dark:bg-dark-800 opacity-15 rounded-full absolute -bottom-8 -left-32 md:-bottom-20 z-10 duration-200"></div>
    </section>
  );
};

export default About;

export const Card = ({ item }) => {
  return (
    <div className="w-full max-w-[370px] shrink-0">
      <div className="py-8 px-3  h-full">
        <div className="p-5 rounded-3xl bg-white-100 dark:bg-dark-900 shadow-grey w-full h-full ">
          <div className="mb-4">
            <Image src={item?.fileUrl} width={80} alt="diverse bg" />
          </div>
          <h2 className="text-xl font-bold text-black-900 dark:text-white-500">
            {item?.title}
          </h2>
          <p className="subtitle mt-2">{item?.description}</p>
        </div>
      </div>
    </div>
  );
};
