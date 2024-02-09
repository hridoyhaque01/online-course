"use client";
import logo from "@/public/logo.png";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Nav = () => {
  const { theme, setTheme } = useTheme();
  const [isScroll, setIsScroll] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const handleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenu = (value) => {
    if (value) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    setShowMenu(value);
  };

  return (
    <nav
      className={`px-6  text-black-900 dark:text-white-100 sticky top-0 duration-200 z-[999] ${
        isScroll
          ? "bg-gradient-100 dark:bg-gradient-900 backdrop-blur-md py-3"
          : "py-5"
      }`}
    >
      <div className="container flex items-center justify-between gap-4">
        {/* logo  */}
        <div>
          <button type="button" onClick={handleTheme}>
            <Image src={logo} alt="logo" width={120} priority={1}></Image>
            {/* <img src="" alt="" /> */}
          </button>
        </div>

        {/* desktop menu  */}
        <div className="hidden md:flex items-center md:gap-6 lg:gap-10">
          <ul className="flex items-center gap-6 lg:gap-8 font-medium">
            <li>
              <Link href="/">Courses</Link>
            </li>
            <li>
              <Link href="/">About</Link>
            </li>
            <li>
              <Link href="/">Contact</Link>
            </li>
            <li>
              <Link href="/">Blog</Link>
            </li>
          </ul>

          <div>
            <button type="button" className="flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M22.0617 17.3333C23.0617 17.3333 23.9417 16.7867 24.395 15.96L29.1684 7.30667C29.6617 6.42667 29.0217 5.33333 28.0084 5.33333H8.27505L7.02171 2.66667H2.66171V5.33333H5.32838L10.1284 15.4533L8.32838 18.7067C7.35505 20.4933 8.63505 22.6667 10.6617 22.6667H26.6617V20H10.6617L12.1284 17.3333H22.0617ZM9.54171 8H25.7417L22.0617 14.6667H12.7017L9.54171 8ZM10.6617 24C9.19505 24 8.00838 25.2 8.00838 26.6667C8.00838 28.1333 9.19505 29.3333 10.6617 29.3333C12.1284 29.3333 13.3284 28.1333 13.3284 26.6667C13.3284 25.2 12.1284 24 10.6617 24ZM23.995 24C22.5284 24 21.3417 25.2 21.3417 26.6667C21.3417 28.1333 22.5284 29.3333 23.995 29.3333C25.4617 29.3333 26.6617 28.1333 26.6617 26.6667C26.6617 25.2 25.4617 24 23.995 24Z"
                  className="dark:fill-white-100 fill-black-900"
                />
              </svg>
            </button>
          </div>

          <div className="flex items-center gap-4 lg:gap-5">
            <button
              type="button"
              className="btn_common border border-primary-500 text-primary-500 py-3 lg:py-4 px-6 lg:px-10 text-sm lg:text-base whitespace-nowrap"
            >
              Sign In
            </button>
            <button
              type="button"
              className="btn_common bg-secondary-500 text-white-100 py-3 lg:py-4 px-6 lg:px-10 text-sm lg:text-base whitespace-nowrap"
            >
              Sign Up
            </button>
          </div>
        </div>

        {/* mobile menu  */}

        <div className="md:hidden flex items-center gap-5">
          <button type="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M22.0616 17.3333C23.0616 17.3333 23.9416 16.7867 24.395 15.96L29.1683 7.30667C29.6616 6.42667 29.0216 5.33333 28.0083 5.33333H8.27495L7.02162 2.66667H2.66162V5.33333H5.32829L10.1283 15.4533L8.32829 18.7067C7.35495 20.4933 8.63495 22.6667 10.6616 22.6667H26.6616V20H10.6616L12.1283 17.3333H22.0616ZM9.54162 8H25.7416L22.0616 14.6667H12.7016L9.54162 8ZM10.6616 24C9.19495 24 8.00829 25.2 8.00829 26.6667C8.00829 28.1333 9.19495 29.3333 10.6616 29.3333C12.1283 29.3333 13.3283 28.1333 13.3283 26.6667C13.3283 25.2 12.1283 24 10.6616 24ZM23.995 24C22.5283 24 21.3416 25.2 21.3416 26.6667C21.3416 28.1333 22.5283 29.3333 23.995 29.3333C25.4616 29.3333 26.6616 28.1333 26.6616 26.6667C26.6616 25.2 25.4616 24 23.995 24Z"
                className="dark:fill-white-100 fill-black-900"
              />
            </svg>
          </button>
          <button type="button" onClick={() => handleMenu(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M5.60506 24H20.2717C21.0051 24 21.6051 23.4 21.6051 22.6667C21.6051 21.9333 21.0051 21.3333 20.2717 21.3333H5.60506C4.87173 21.3333 4.27173 21.9333 4.27173 22.6667C4.27173 23.4 4.87173 24 5.60506 24ZM5.60506 17.3333H16.2717C17.0051 17.3333 17.6051 16.7333 17.6051 16C17.6051 15.2667 17.0051 14.6667 16.2717 14.6667H5.60506C4.87173 14.6667 4.27173 15.2667 4.27173 16C4.27173 16.7333 4.87173 17.3333 5.60506 17.3333ZM4.27173 9.33333C4.27173 10.0667 4.87173 10.6667 5.60506 10.6667H20.2717C21.0051 10.6667 21.6051 10.0667 21.6051 9.33333C21.6051 8.6 21.0051 8 20.2717 8H5.60506C4.87173 8 4.27173 8.6 4.27173 9.33333ZM27.3384 19.84L23.4984 16L27.3384 12.16C27.8584 11.64 27.8584 10.8 27.3384 10.28C26.8184 9.76 25.9784 9.76 25.4584 10.28L20.6717 15.0667C20.1517 15.5867 20.1517 16.4267 20.6717 16.9467L25.4584 21.7333C25.9784 22.2533 26.8184 22.2533 27.3384 21.7333C27.8451 21.2133 27.8584 20.36 27.3384 19.84Z"
                fill="#F39A0F"
              />
            </svg>
          </button>
        </div>

        {/* menus  */}
        <div
          className={`fixed top-0 right-0 w-full ${
            showMenu ? "max-w-[380px]" : "max-w-[0]"
          }  h-screen overflow-hidden bg-gradient-100 dark:bg-gradient-900 backdrop-blur-md md:hidden duration-200 z-[99999]`}
        >
          <div className="w-full h-full overflow-auto p-5">
            {/* close button  */}
            <div className="flex justify-end">
              <button type="button" onClick={() => handleMenu(false)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M24.4 7.61333C23.88 7.09333 23.04 7.09333 22.52 7.61333L16 14.12L9.47996 7.6C8.95996 7.08 8.11996 7.08 7.59996 7.6C7.07996 8.12 7.07996 8.96 7.59996 9.48L14.12 16L7.59996 22.52C7.07996 23.04 7.07996 23.88 7.59996 24.4C8.11996 24.92 8.95996 24.92 9.47996 24.4L16 17.88L22.52 24.4C23.04 24.92 23.88 24.92 24.4 24.4C24.92 23.88 24.92 23.04 24.4 22.52L17.88 16L24.4 9.48C24.9066 8.97333 24.9066 8.12 24.4 7.61333Z"
                    fill="#171717"
                  />
                </svg>
              </button>
            </div>

            {/* menu  */}
            <ul className="flex flex-col items-center gap-4 font-medium my-6">
              <li>
                <Link href="/" onClick={() => handleMenu(false)}>
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/" onClick={() => handleMenu(false)}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/" onClick={() => handleMenu(false)}>
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/" onClick={() => handleMenu(false)}>
                  Blog
                </Link>
              </li>
            </ul>

            {/* auth  */}
            <div className="flex flex-col items-center gap-5">
              <button
                type="button"
                className="w-full max-w-[200px] mx-auto btn_common border border-primary-500 text-primary-500"
              >
                Sign In
              </button>
              <button
                type="button"
                className="w-full max-w-[200px] mx-auto btn_common bg-secondary-500 text-white-100"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
