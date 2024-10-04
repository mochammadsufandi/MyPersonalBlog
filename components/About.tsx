import React, { useState } from "react";
import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  TvIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
import TabButton from "./TabButton";
import Academy from "./Academy";
import Experience from "./Experience";

const About = () => {
  const [clickText, setClickText] = useState(false);
  const [isCardOpenAcademy, setIsCardOpenAcademy] = useState(false);
  const [isCardOpenExperience, setIsCardOpenExperience] = useState(false);
  const onHover = (): void => {
    setClickText(true);
  };
  const closeHover = (): void => {
    setClickText(false);
  };
  const onClickAcademy = (): void => {
    setIsCardOpenAcademy((state) => !state);
  };
  const onClickExperience = (): void => {
    setIsCardOpenExperience((state) => !state);
  };

  return (
    <>
      <div className="bg-mainBG pb-[3rem] pt-[2rem] mt-[12vh] md:pt-[3rem] h-[100%]">
        <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] h-[100%] mx-auto gap-[3rem] items-center lg:h-[58vh]">
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
          </div>
          <div className="w-[300px] h-[300px] relative mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[350px] lg:w-[350px] ">
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
        <div className="flex flex-wrap justify-center gap-6 mt-[3rem]">
          <TabButton
            title="Academy"
            onHover={onHover}
            closeHover={closeHover}
            onClick={onClickAcademy}
          >
            <AcademicCapIcon className="w-[2rem] h-[2rem]" />
          </TabButton>
          <TabButton
            title="Experience"
            onHover={onHover}
            closeHover={closeHover}
            onClick={onClickExperience}
          >
            <TvIcon className="w-[2rem] h-[2rem]" />
          </TabButton>
          <p className="w-[100%] h-[2rem] text-center text-headerNav font-bold transition-all duration-300">
            {clickText && "Click For Detail!!!"}
          </p>
        </div>
      </div>
      {isCardOpenAcademy && <Academy />}
      {isCardOpenExperience && <Experience />}
    </>
  );
};

export default About;
