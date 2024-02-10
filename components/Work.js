"use client";

import minus from "@/public/acc_minus.svg";
import question from "@/public/question.png";
import { Accordion, AccordionItem } from "@nextui-org/react";
import Image from "next/image";

const Work = () => {
  return (
    <section className="py-5 sm:py-10 lg:py-16 px-5 duration-200 relative">
      <div className="container">
        <div className="grid md:grid-cols-2 gapy-y-8 gap-6 md:gap-14 lg:gap-20 items-center">
          <div className="max-w-max mx-auto">
            <Image src={question} width={545} alt="works bg" />
          </div>
          <div className="text-center md:text-left">
            <h1 className="title">How It Works</h1>
            <p className="subtitle mt-4 mb-4 sm:mb-6">
              Explore courses, enroll with a click, learn from experts, and earn
              certifications.
            </p>
            <WorkContent></WorkContent>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;

const WorkContent = () => {
  const itemClasses = {
    base: " group-[.is-splitted]:px-0 group-[.is-splitted]:shadow-none group-[.is-splitted]:bg-transparent rounded-xl data-[open=true]:bg-white-100 data-[open=true]:dark:bg-dark-800 group-[.is-splitted]:data-[open=true]:shadow-accContainer",
    trigger:
      "py-0 data-[open=true]:bg-secondary-500 data-[open=true]:dark:bg-secondary-600 rounded-xl pr-3 outline-none",
    title:
      "text-xl font-bold text-black-900 dark:text-white-100 data-[open=true]:text-white-100",
    content: "p-6",
  };

  const contents = [
    {
      id: 1,
      title: "Browse Courses",
      description:
        "Explore our diverse catalog and discover the courses that align with your goals.",
    },
    {
      id: 2,
      title: "Purchase",
      description:
        "Explore our diverse catalog and discover the courses that align with your goals.",
    },
    {
      id: 3,
      title: "Learn",
      description:
        "Explore our diverse catalog and discover the courses that align with your goals.",
    },
    {
      id: 4,
      title: "Earn Certification",
      description:
        "Explore our diverse catalog and discover the courses that align with your goals.",
    },
  ];

  return (
    <div>
      <Accordion
        showDivider={false}
        className="px-0 rounded-xl gap-6"
        itemClasses={itemClasses}
        variant="splitted"
      >
        {contents?.map((item) => (
          <AccordionItem
            key={item?.id}
            aria-label="Connected devices"
            startContent={
              <div className="w-12 aspect-square bg-secondary-500 dark:bg-secondary-600 flex items-center justify-center rounded-xl">
                <div className="w-6 aspect-square bg-white-100 dark:bg-dark-800 rounded-lg"></div>
              </div>
            }
            title={<h4 className="ellipse">{item?.title}</h4>}
            indicator={({ isOpen }) =>
              isOpen ? (
                <Image src={minus} width={24} alt="minus" />
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M18 13H13V18C13 18.55 12.55 19 12 19C11.45 19 11 18.55 11 18V13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H11V6C11 5.45 11.45 5 12 5C12.55 5 13 5.45 13 6V11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z"
                    className="fill-black-900 dark:fill-white-100"
                  />
                </svg>
              )
            }
          >
            {item?.description}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
