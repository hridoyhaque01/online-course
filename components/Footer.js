import logo from "@/public/logoWhite.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-5 sm:py-10 lg:py-16 px-5 duration-200 relative bg-gradient-green dark:bg-gradient-dark border-t border-transparent dark:border-neutral-800">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-6 lg:gap-10">
          <div className="text-center sm:text-left">
            <div className="flex justify-center sm:justify-start">
              <Image src={logo} alt="logo" width={120} priority={1}></Image>
            </div>
            <p className="text-white-100 dark:text-white-500 mt-3  mb-3 md:mb-5">
              Empowering learning journeys. Explore courses, boost skills, and
              stay connected. Join our community for a brighter future in
              education.
            </p>
            <p className="text-white-100 dark:text-white-500 hidden md:block">
              ©2024 Nallasoft. All Rights Reserved
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-y-5 gap-x-2">
            {/* link one  */}
            <div>
              <h4 className="text-white-100 font-medium text-lg">Company</h4>
              <ul className="flex flex-col gap-2 mt-2.5 sm:mt-4 md:mt-6">
                <li>
                  <Link className="text-white-100" href="/">
                    About
                  </Link>
                </li>
                <li>
                  <Link className="text-white-100" href="/">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link className="text-white-100" href="/">
                    Courses
                  </Link>
                </li>
              </ul>
            </div>
            {/* link two  */}

            <div>
              <h4 className="text-white-100 font-medium text-lg">Company</h4>
              <ul className="flex flex-col gap-2 mt-2.5 sm:mt-4 md:mt-6">
                <li>
                  <Link className="text-white-100" href="/">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link className="text-white-100" href="/">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link className="text-white-100" href="/">
                    Terms & Condition
                  </Link>
                </li>
              </ul>
            </div>
            {/* link three  */}

            <div>
              <h4 className="text-white-100 font-medium text-lg">Company</h4>
              <ul className="flex flex-col gap-2 mt-2.5 sm:mt-4 md:mt-6">
                <li>
                  <Link className="text-white-100" href="/">
                    Social
                  </Link>
                </li>
                <li>
                  <Link className="text-white-100" href="/">
                    Designers
                  </Link>
                </li>
                <li>
                  <Link className="text-white-100" href="/">
                    Devolopers
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="text-center text-white-100 dark:text-white-500 block md:hidden mt-6">
          ©2024 Nallasoft. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
