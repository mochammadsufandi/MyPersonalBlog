import MobileNavbar from "@/components/MobileNavbar";
import Navbar from "@/components/Navbar";
import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import React, { useState } from "react";

const AboutPage = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const openNav = (): void => {
    setIsNavOpen(true);
  };

  const closeNav = (): void => {
    setIsNavOpen(false);
  };

  return (
    <div className="overflow-x-hidden">
      <Navbar openNav={openNav} />
      <MobileNavbar closeNav={closeNav} isNavOpen={isNavOpen} />
      <div className="bg-[#121121] pb-[4rem] pt-[4rem] mt-[12vh] md:pt-[8rem]">
        <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
          <div>
            <h1 className="text-[20px] font-bold uppercase text-textAnimation mb-[1rem]">
              About Me
            </h1>
            <h2 className="text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-headerNav">
              Transforming <span className="text-yellow-400">Vision</span>
            </h2>
            <div className="mb-[3rem] flex items-center md:space-x-10">
              <span className="w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm "></span>
              <p className="text-[19px] text-slate-300 w-[80%]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Exercitationem maiores totam vel facere? Dolores rem, numquam
                modi ipsam necessitatibus, neque pariatur corrupti totam
                consequuntur ratione, iure perferendis illo omnis? Iusto.
              </p>
            </div>
            <button className="px-[2rem] hover:bg-green-700 transition-all duration-0 py-[1rem] text-[18px] font-bold uppercase bg-textAnimation text-black flex items-center space-x-2 rounded-md hover:border-2 ">
              <p> Download CV </p>
              <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black" />
            </button>
          </div>
          <div className="w-[300px] h-[300px] relative mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[400px] lg:w-[400px] ">
            <Image
              src={"/images/about.jpg"}
              alt="aboutProfile"
              layout="fill"
              objectFit="contain"
              className="relative z-[20] w-[100%] h-[100%] object-contain"
            />
            <div className="absolute w-[100%] h-[100%] z-[10] bg-textAnimation top-[-2rem] right-[-2rem]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
