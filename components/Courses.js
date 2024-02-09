"use client";
import avatar from "@/public/avatar.png";
import course1 from "@/public/course1.png";
import course2 from "@/public/course2.png";
import dot from "@/public/dot.svg";
import hexa from "@/public/hexa.svg";
import plus from "@/public/plus.svg";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

const Courses = () => {
  const courses = [
    {
      id: 1,
      fileUrl: course1,
      title: "Python Programming Masterclass",
      description:
        "Explore Python from basics to advanced, mastering real-world applications and hands-on projects.",
      instructorName: "Sarah Johnson",
      courseName: "Web Development",
      rating: 4.8,
      instructorImage: avatar,
      modules: [
        "Learn Python from scratch to advanced concepts.",
        "Engage in practical projects and coding exercises.",
        "Gain proficiency in data manipulation, web development, and more.",
      ],
    },
    {
      id: 2,
      fileUrl: course2,
      title: "UI/UX Design Essentials",
      description:
        "Unlock UI/UX essentials, from wireframing to prototyping, for visually stunning digital experiences.",
      instructorName: "Alex Rodriguez",
      courseName: "UI/UX Design",
      rating: 4.7,
      instructorImage: avatar,
      modules: [
        "Master the principles of effective UI/UX design.",
        "Hands-on experience with industry-standard design tools.",
        "Create a portfolio showcasing your design projects.",
      ],
    },
    {
      id: 1,
      fileUrl: course1,
      title: "Kotlin for Android Development",
      description:
        "Master Kotlin for Android, building robust applications from basics to advanced development.",
      instructorName: "Jasmine Lee",
      courseName: "Android Developer",
      rating: 4.5,
      instructorImage: avatar,
      modules: [
        "Learn Kotlin syntax and Android Studio.",
        "Develop real-world Android applications.",
        "Understand best practices for Android app design.",
      ],
    },
  ];
  const options = {};
  const [emblaRef] = useEmblaCarousel(options);

  return (
    <section className="pt-5 sm:pt-10 lg:pt-16 duration-200 relative overflow-x-hidden">
      <div className="container relative z-20">
        {/* headers  */}
        <div className="text-center px-6 relative z-30">
          <div className="relative max-w-max mx-auto">
            <h1 className="title inline-block">Find the Right Course</h1>
            <div className="absolute top-0 -left-20 z-10 hidden md:block">
              <Image src={plus} width={18} alt="hexa" />
            </div>
            <div className="absolute -top-4 -left-48 z-10 hidden md:block">
              <Image src={dot} width={18} alt="hexa" />
            </div>
          </div>
          <p className="subtitle mt-4">
            Whether you're looking to boost your career or explore a new
            passion, our featured courses are a gateway to your success.
          </p>
          {/* svg */}
          <div className="absolute top-1/2 -translate-y-1/2 -right-20 z-10 hidden md:block">
            <Image src={plus} width={18} alt="hexa" />
          </div>
        </div>
        {/* contents  */}
        <div className="w-full mt-0 sm:mt-8 relative z-30">
          <div className="overflow-hidden relative z-40" ref={emblaRef}>
            <div className="w-full flex items-stretch max-w-max mx-auto h-max">
              {courses?.map((item, index) => (
                <Card key={index} item={item}></Card>
              ))}
            </div>
          </div>

          {/* svg */}
          <div className="absolute top-0 z-10 hidden md:block">
            <Image src={hexa} width={88} alt="hexa" />
          </div>
          {/* svg */}
          <div className="absolute top-48 -left-16 z-10 hidden md:block">
            <Image src={plus} width={18} alt="hexa" />
          </div>
        </div>
        {/* svg */}
        <div className="absolute top-1/2 -translate-y-1/2 opacity-10 -left-[34rem] sm:-left-56 md:-left-16 max-w-max duration-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="832"
            height="711"
            viewBox="0 0 832 711"
            fill="none"
          >
            <g opacity="0.8" filter="url(#filter0_f_313_533)">
              <path
                d="M46.9933 387.083C45.1422 406.624 43.6139 426.164 42.1071 445.622C37.0704 510.273 39.6749 576.858 94.9933 622.488C125.774 647.87 166.175 659.803 206.233 665.499C287.768 677.119 370.832 665.499 451.894 650.947C535.689 636.042 620.905 617.395 692.819 573.262C746.372 540.395 793.641 487.178 791.833 425.915C790.929 396.167 778.53 367.854 764.087 341.557C738.43 294.825 703.818 250.193 655 226.348C612.08 205.415 562.444 202.463 516.08 190.094C458.75 174.702 406.651 144.947 365.063 103.844C342.096 80.9768 320.895 53.9521 289.576 44.0569C262.003 35.4091 231.46 42.2276 205.63 54.9707C165.121 74.9898 133.092 108.812 110.599 146.979C67.8507 219.405 54.7852 305.323 46.9933 387.083Z"
                className="fill-primary-200 dark:fill-dark-600"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_313_533"
                x="0.361206"
                y="0.189087"
                width="831.522"
                height="710.052"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="20"
                  result="effect1_foregroundBlur_313_533"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      {/* svg  */}
      <div className="absolute bottom-8 -right-72 sm:-right-60 lg:right-0 opacity-10 duration-200 3xl:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="572"
          height="286"
          viewBox="0 0 572 286"
          fill="none"
        >
          <path
            d="M572 0.349609V249.101C571.994 258.884 572 263.867 572 285.979C550.719 285.979 543.923 285.979 533.794 285.979H0.541565C3.69852 280.283 7.12811 274.67 10.8304 269.141C11.0671 268.829 11.2824 268.475 11.4976 268.164C48.4124 213.532 105.345 169.96 172.61 157.508C254.877 142.312 345.431 172.06 420.918 136.949C484.717 107.367 523.505 47.0606 572 0.349609Z"
            className="fill-secondary-200 dark:fill-dark-800"
          />
        </svg>
      </div>
    </section>
  );
};

export default Courses;

export const Card = ({ item }) => {
  return (
    <div className="w-full max-w-[370px] shrink-0">
      <div className="py-8 px-3 h-full">
        <div className="rounded-3xl bg-white-100 dark:bg-dark-900 shadow-grey w-full h-full ">
          <div className="w-full rounded-t-3xl overflow-hidden">
            <Image
              src={item?.fileUrl}
              width={0}
              sizes="100vw"
              alt="diverse bg"
            />
          </div>
          <div className="px-4 py-5 flex flex-col justify-between gap-4 h-[calc(100%-197px)]">
            <div className="flex flex-col gap-4">
              <div>
                <h2 className="text-lg font-bold text-black-900 dark:text-white-500">
                  {item?.title}
                </h2>
                <p className="common_text mt-2">{item?.description}</p>
              </div>
              {/* course instructor and rating  */}
              <div className="flex items-center justify-between gap-2">
                {/* instructor  */}
                <div className="flex items-center gap-2 ">
                  <div className="w-10 aspect-square rounded-full overflow-hidden">
                    <Image
                      src={item?.instructorImage}
                      width={0}
                      height={0}
                      sizes="100vw"
                      alt="instructor"
                    />
                  </div>
                  <div>
                    <h4 className="text-base text-black-900 dark:text-white-100 font-medium">
                      {item?.instructorName}
                    </h4>
                    <p className="subtitle text-xs">{item?.courseName}</p>
                  </div>
                </div>
                {/* rating  */}
                <div className="flex items-center gap-1">
                  <span className="text-base text-black-500 dark:text-white-500 font-bold">
                    {item?.rating}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 17.5195L16.15 20.0295C16.91 20.4895 17.84 19.8095 17.64 18.9495L16.54 14.2295L20.21 11.0495C20.88 10.4695 20.52 9.36952 19.64 9.29952L14.81 8.88952L12.92 4.42952C12.58 3.61952 11.42 3.61952 11.08 4.42952L9.19 8.87952L4.36 9.28952C3.48 9.35952 3.12 10.4595 3.79 11.0395L7.46 14.2195L6.36 18.9395C6.16 19.7995 7.09 20.4795 7.85 20.0195L12 17.5195Z"
                      fill="#FECA57"
                    />
                  </svg>
                </div>
              </div>
              {/* modules  */}
              {item?.modules?.length > 0 && (
                <ul className="list-disc list-outside pl-4">
                  {item?.modules?.map((module, index) => (
                    <li
                      key={index}
                      className={`text-sm ${
                        index % 2 === 0
                          ? "text-black-900 dark:text-white-100"
                          : "text-black-500 dark:text-white-500"
                      }`}
                    >
                      {module}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            {/* add to cart  */}
            <div className="flex justify-center">
              <button
                type="button"
                className="btn_common border border-primary-500 text-base text-primary-500 font-semibold"
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
