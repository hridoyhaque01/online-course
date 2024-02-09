"use client";
import avatar from "@/public/avatar.png";
import course1 from "@/public/course-1.png";
import course2 from "@/public/course-2.png";
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
    <section className="py-5 sm:py-10 lg:py-16 duration-200 relative">
      <div className="container relative z-20">
        {/* headers  */}
        <div className="text-center px-6">
          <h1 className="title">Find the Right Course</h1>
          <p className="subtitle mt-4">
            Whether you're looking to boost your career or explore a new
            passion, our featured courses are a gateway to your success.
          </p>
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
          <div className="absolute top-0 z-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="89"
              height="78"
              viewBox="0 0 89 78"
              fill="none"
            >
              <path
                d="M50.1717 33.4195L49.9994 32.4633C49.961 32.1733 49.8401 31.8993 49.6501 31.6718C49.4601 31.4442 49.2085 31.272 48.9232 31.1744L48.0621 30.8626L27.6353 23.5659L23.3303 22.0068C23.0473 21.9181 22.746 21.8983 22.4531 21.9491C22.1603 21.9999 21.8849 22.1197 21.6515 22.2978L0.621836 39.1571C0.393564 39.3423 0.21827 39.581 0.112754 39.8503C0.00723754 40.1196 -0.0249065 40.4106 0.019214 40.6954L4.15191 63.9989L4.66848 66.6806C4.71691 66.9676 4.84438 67.2368 5.03752 67.4599C5.23065 67.683 5.48236 67.8518 5.76626 67.9487L31.316 77.0747C31.5092 77.0951 31.7041 77.0951 31.8972 77.0747C32.2967 77.0751 32.6842 76.943 32.9949 76.7005L54.0245 59.8621C54.2541 59.6739 54.4285 59.431 54.5304 59.1574C54.6324 58.8838 54.6584 58.5892 54.6057 58.303L50.1717 33.4195ZM31.5743 73.7486L7.76804 65.2462L6.64872 59.0098L3.48465 41.1527L23.0291 25.4784L25.7197 26.4555L46.8354 34.0016L51.1403 58.1782L31.5743 73.7486Z"
                fill="#2D3962"
              />
              <path
                d="M87.6675 6.81072C87.6466 6.52206 87.5429 6.24473 87.368 6.00976C87.1931 5.77479 86.954 5.59145 86.6774 5.48027L74.4729 0.158498C74.2057 0.0332954 73.9083 -0.019311 73.6125 0.00632454C73.3167 0.0319601 73.0339 0.13487 72.794 0.304015L61.8379 7.80855C61.5993 7.97472 61.4101 8.19853 61.2892 8.45756C61.1683 8.7166 61.12 9.00177 61.1491 9.28451L62.2469 20.5725L62.3976 22.2148C62.4255 22.4987 62.5295 22.7706 62.6994 23.0039C62.8692 23.2372 63.0991 23.4237 63.3662 23.5452L63.6461 23.6699L75.5707 28.9293C75.7922 29.0315 76.0357 29.0814 76.281 29.0749C76.6279 29.0809 76.9674 28.9788 77.2495 28.7838L88.2056 21.2793C88.4482 21.1156 88.6418 20.8928 88.7665 20.6336C88.8912 20.3744 88.9428 20.088 88.916 19.8033L87.6675 6.81072ZM76.0873 25.5201L65.6694 20.9467L64.5932 9.90815L73.9563 3.52619L84.3957 8.12037L85.4506 19.1589L76.0873 25.5201Z"
                fill="#2D3962"
              />
              <path
                d="M48.3417 34.2719C48.0801 34.2696 47.8224 34.2105 47.5876 34.0989C47.3529 33.9874 47.1471 33.8262 46.9856 33.6274C46.8511 33.4561 46.7533 33.2606 46.6978 33.0523C46.6423 32.8441 46.6301 32.6273 46.6622 32.4144C46.6942 32.2016 46.7698 31.9971 46.8845 31.8128C46.9992 31.6285 47.1506 31.468 47.3301 31.3407L62.7417 20.1359C63.0995 19.8767 63.5487 19.7641 63.9919 19.8224C64.4351 19.8808 64.8366 20.1055 65.1095 20.4477C65.244 20.6191 65.3418 20.8146 65.3973 21.0228C65.4529 21.2311 65.465 21.4479 65.433 21.6607C65.4009 21.8735 65.3253 22.078 65.2107 22.2624C65.096 22.4467 64.9445 22.6072 64.765 22.7344L49.3534 33.9393C49.0659 34.1593 48.7085 34.2768 48.3417 34.2719Z"
                fill="#2D3962"
              />
            </svg>
          </div>
          {/* svg */}
          <div className="absolute top-48 -left-16 z-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
            >
              <path
                d="M9.44943 18.0649C8.9756 18.0649 8.52116 17.8831 8.18611 17.5596C7.85107 17.236 7.66284 16.7971 7.66284 16.3395V1.62148C7.6903 1.18212 7.89065 0.76951 8.22277 0.468083C8.55488 0.166655 8.99367 -0.000796495 9.44943 2.84866e-06C9.92525 -2.97165e-05 10.3819 0.18109 10.7204 0.504085C11.0588 0.82708 11.2519 1.26591 11.2576 1.72543V16.4435C11.2248 16.8846 11.02 17.2974 10.6844 17.5983C10.3488 17.8993 9.9074 18.0661 9.44943 18.0649Z"
                fill="#2D3962"
              />
              <path
                d="M17.0261 10.706H1.78658C1.55197 10.706 1.31966 10.6613 1.1029 10.5746C0.886149 10.4879 0.689167 10.3608 0.523271 10.2006C0.357375 10.0404 0.225757 9.85018 0.135974 9.64084C0.0461919 9.4315 0 9.20713 0 8.98055C0 8.75396 0.0461919 8.5296 0.135974 8.32026C0.225757 8.11092 0.357375 7.92071 0.523271 7.76049C0.689167 7.60027 0.886149 7.47318 1.1029 7.38646C1.31966 7.29975 1.55197 7.25513 1.78658 7.25513H17.0261C17.5019 7.25509 17.9585 7.43621 18.297 7.75921C18.6355 8.0822 18.8284 8.52104 18.8341 8.98055C18.8284 9.44006 18.6355 9.8789 18.297 10.2019C17.9585 10.5249 17.5019 10.706 17.0261 10.706Z"
                fill="#2D3962"
              />
            </svg>
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
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
              objectFit="cover"
              alt="diverse bg"
            />
          </div>
          <div className="px-4 py-5 flex flex-col gap-4">
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
                    objectFit="cover"
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
