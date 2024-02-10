"use client";
import instructor1 from "@/public/instructor-1.png";
import instructor2 from "@/public/instructor-2.png";
import instructor3 from "@/public/instructor-3.png";
import instructor4 from "@/public/instructor-4.png";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback } from "react";

const Testimonial = () => {
  const options = { loop: true };
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
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );
  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );

  return (
    <section className="py-5 sm:py-10 lg:py-16 duration-200 relative">
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
            <div className="w-full flex items-stretch h-max">
              {contents?.map((item, index) => (
                <Card key={index} item={item}></Card>
              ))}
            </div>
          </div>
          {/* navigation  */}
          <div className="flex items-center justify-center gap-5 mt-4">
            <button
              type="button"
              className={`w-12 h-12 rounded-full flex items-center justify-center bg-white-500`}
              onClick={scrollPrev}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="32"
                viewBox="0 0 33 32"
                fill="none"
              >
                <path
                  d="M13.1617 24.3983C13.6817 23.8783 13.6817 23.0383 13.1617 22.5183L8.00166 17.3317H28.2283C28.9617 17.3317 29.5617 16.7317 29.5617 15.9983C29.5617 15.265 28.9617 14.665 28.2283 14.665H8.00166L13.175 9.49168C13.695 8.97168 13.695 8.13168 13.175 7.61168C12.655 7.09168 11.815 7.09168 11.295 7.61168L3.82833 15.065C3.30833 15.585 3.30833 16.425 3.82833 16.945L11.2817 24.3983C11.8017 24.905 12.655 24.905 13.1617 24.3983Z"
                  fill="#737373"
                />
              </svg>
            </button>
            <button
              type="button"
              className={`w-12 h-12 rounded-full flex items-center justify-center bg-white-500`}
              onClick={scrollNext}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="32"
                viewBox="0 0 33 32"
                fill="none"
              >
                <path
                  d="M19.825 7.61314C19.305 8.13314 19.305 8.97314 19.825 9.49314L24.9983 14.6665H4.77167C4.03833 14.6665 3.43833 15.2665 3.43833 15.9998C3.43833 16.7331 4.03833 17.3331 4.77167 17.3331H25.0117L19.8383 22.5065C19.3183 23.0265 19.3183 23.8665 19.8383 24.3865C20.3583 24.9065 21.1983 24.9065 21.7183 24.3865L29.1717 16.9331C29.6917 16.4131 29.6917 15.5731 29.1717 15.0531L21.705 7.61314C21.1983 7.09314 20.345 7.09314 19.825 7.61314Z"
                  fill="#737373"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

export const Card = ({ item }) => {
  return (
    <div className="w-full shrink-0">
      <div className="py-8 px-8 h-full">
        <div className="rounded-3xl bg-white-100 dark:bg-dark-900 shadow-grey w-full h-full overflow-hidden p-5 sm:py-8 md:py-10 lg:py-16">
          <div className="w-full max-w-[926px] mx-auto grid sm:grid-cols-2 gap-6 items-center">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="w-full max-w-[120px] sm:max-w-[90px] md:max-w-[120px]">
                <Image
                  src={item?.fileUrl}
                  width={0}
                  sizes="100vw"
                  alt="diverse bg"
                  className="rounded-full"
                />
              </div>
              <div>
                <h2 className="text-xl text-black-900 dark:text-white-100 font-bold">
                  Janna Pham
                </h2>
                <p className="text-black-500 dark:text-white-500">
                  UI/UX Designer
                </p>
              </div>
            </div>
            <div>
              <p className="text-black-500 dark:text-white-500 text-center sm:text-left">
                Choose from a variety of courses spanning [list of categories,
                e.g., technology, business, arts, health, etc.]. Our extensive
                library ensures that you find the perfect learning path for your
                goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
