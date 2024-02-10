import bell from "@/public/bell.svg";
import contactbg from "@/public/contact.png";
import plane from "@/public/plane.svg";
import { Button } from "@nextui-org/react";
import Image from "next/image";

const Contact = () => {
  return (
    <section className="py-5 sm:py-10 lg:py-16 px-5 duration-200 relative overflow-x-hidden">
      <div className="container relative z-20">
        <div className="w-full grid sm:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <div className="relative ">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-normal relative z-20 text-center sm:text-left">
                Stay Updated with
                <span className="text-primary-500 leading-normal">
                  {" "}
                  COURSBES
                </span>
              </h1>
              <div className="absolute -top-6 -right-5 xs:-right-0 sm:-top-12 sm:-right-7 lg:-top-10 lg:right-16 w-full max-w-[80px] sm:max-w-[120px] z-10">
                <Image src={plane} width={120} alt="plane" />
              </div>
            </div>
            <p className="text-center sm:text-left subtitle my-4">
              Subscribe to our newsletter and be the first to receive:
            </p>
            <ul className="flex flex-col gap-2">
              <li className="subtitle font-medium">
                🚀 Course updates and new content
              </li>
              <li className="subtitle font-medium">
                💡 Expert tips and insights
              </li>
              <li className="subtitle font-medium">
                🎁 Exclusive offers just for you
              </li>
            </ul>
          </div>
          <div>
            <p className="text-center sm:text-left text-base sm:text-lg font-medium text-black-900 dark:text-white-100">
              Join us on this learning journey! Enter your email below and never
              miss out.
            </p>
            <form action="#">
              <div className="w-full my-4 relative">
                <input
                  type="email"
                  className="px-3 py-4 border border-white-900 dark:border-black-500 rounded-xl w-full placeholder:text-disable bg-white-100 dark:bg-dark-900 outline-none"
                  placeholder="Email Enter Your Email"
                />
                <div className="absolute -right-10 -bottom-20 opacity-60 hidden sm:block">
                  <Image src={bell} width={70} alt="bell" />
                </div>
              </div>
              <div className="flex items-center sm:items-start">
                <Button
                  type="button"
                  className="px-10 py-4 h-auto rounded-full bg-primary-500 text-white-100 mx-auto md:mx-0 text-base w-full max-w-[200px] uppercase font-semibold"
                >
                  SUBMIT
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 opacity-40">
        <Image src={contactbg} width={460} alt="contact" />
      </div>
    </section>
  );
};

export default Contact;
