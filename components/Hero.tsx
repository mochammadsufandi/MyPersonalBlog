import React from "react";
import Particle from "./Particle";
import TypeEffect from "./TypeEffect";
import Image from "next/image";
import { ArrowDownTrayIcon, PlayCircleIcon } from "@heroicons/react/20/solid";

const Hero = () => {
  return (
    <div className="h-[88vh] bg-[url('/images/banner.jpg')] bg-cover bg-center mt-[12vh]">
      <Particle />
      <div className="w-[80%] grid grid-cols-1 lg:grid-cols-2 mx-auto gap-[3rem] h-[100%] items-center">
        <div>
          <h1 className="text-[35px] md:text-[50px] text-headerNav font-bold">
            Hi, I'm <span className="text-yellow-400">Andi</span>
          </h1>
          <TypeEffect />
          <p className="mt-[1.5rem] text-[20px] text-textDescription">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            impedit earum ratione labore quod. Corporis, ipsa deserunt culpa
            quae laudantium dicta, rem atque dignissimos voluptas error
            repellendus inventore consequuntur corrupti?
          </p>
          <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6">
            <button className="px-[2rem] hover:bg-green-700 transition-all duration-0 py-[1rem] text-[18px] font-bold uppercase bg-textAnimation text-black flex items-center space-x-2 rounded-md hover:border-2 ">
              <p> Download CV </p>
              <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black" />
            </button>

            <button className="flex items-center space-x-2 h-[4rem] rounded-md hover:bg-blue-400 transition-all duration-0 hover:border-2">
              <PlayCircleIcon className="w-[3rem] h-[3rem] hover:text-yellow-300 transition-all duration-200 text-textAnimation" />
              <p className="text-[20px] font-semibold text-white">
                Watch My Project Video
              </p>
            </button>
          </div>
        </div>

        <div className="w-[500px] hidden bg-textAnimation relative lg:flex items-center rounded-full h-[500px]">
          <Image
            src={"/images/u1.jpg"}
            alt="profileImage"
            layout="fill"
            className="object-cover rounded-full"
          />
          <button></button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
