import bag from "@/public/bag.png";
import book from "@/public/book.png";
import bulb from "@/public/bulb.png";
import hero from "@/public/hero.png";
import solution from "@/public/solution.png";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="px-6 py-24 md:py-16 relative overflow-hidden">
      <div className="container grid md:grid-cols-2 gap-y-8 gap-x-2.5 items-center">
        {/* content  */}
        <div className="flex flex-col gap-6 w-full text-center md:text-left duration-200">
          <h1 className="text-black-900 dark:text-white-100 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold duration-200">
            Unlock Your <span className="text-primary-500">Potential</span> with
            Our Online Courses
          </h1>
          <p className="text-base text-black-500  dark:text-white-100">
            Welcome to <span className="font-bold">COURSBES</span>, where
            learning meets innovation! Explore our diverse range of online
            courses crafted to elevate your skills, advance your career, and
            broaden your horizons.
          </p>
          <button
            type="button"
            className="btn_common bg-primary-500 text-white-100 max-w-max mx-auto md:mx-0"
          >
            Explore Now
          </button>
        </div>
        {/* image  */}
        <div className="w-full max-w-[420px] md:max-w-full mx-auto relative">
          <Image src={hero} alt="hero bg" width={590} />

          <div className="absolute top-4 left-9 max-w-16 xs:max-w-[100px] sm:top-6 sm:left-8  md:top-6 md:left-10 lg:top-10 lg:left-20 duration-200">
            <Image src={book} alt="bulb" width={100} />
          </div>
          <div className="absolute -top-4 right-3 max-w-10 xs:max-w-[100px] xs:-top-4 xs:-right-2  md:-top-8 md:right-3 lg:-top-3 lg:right-6 duration-200">
            <Image src={bulb} alt="bulb" width={66} />
          </div>
          <div className="absolute -bottom-6 right-3 max-w-10 xs:max-w-[100px] xs:-right-2  md:-bottom-10 md:-right-2 lg:bottom-0 lg:right-0 duration-200">
            <Image src={bag} alt="bulb" width={66} />
          </div>
          <div className="absolute -bottom-6 -left-3 max-w-16 xs:max-w-[100px] sm:-bottom-6 sm:left-0  md:-bottom-8 md:left-0 lg:-bottom-10 lg:left-0 duration-200">
            <Image src={solution} alt="bulb" width={75} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
