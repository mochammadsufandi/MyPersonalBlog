import {
  CodeBracketSquareIcon,
  CommandLineIcon,
  RocketLaunchIcon,
} from "@heroicons/react/20/solid";
import React from "react";

const Service = () => {
  return (
    <div className="mt-[12vh] bg-mainBG pt-[2rem] md:pt-[1rem] lg:h-[88vh] h-[100%] overflow-y-scroll">
      <h1 className="heading">
        My <span className="text-yellow-400">Services</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem] mt-[4rem] text-headerNav">
        <div>
          <div className="bg-red-700 hover:scale-105 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem] hover:border-headerNav border-2 rounded-lg">
            <CodeBracketSquareIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
              FrontEnd
            </h1>
            <p className="font-light">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque
              aliquam voluptates vitae nulla quisquam. Dolores minima dicta,
              iusto libero, pariatur saepe cum magni eius provident porro
              tempore consequatur maiores nobis.
            </p>
          </div>
        </div>
        <div>
          <div className="bg-orange-700 hover:scale-105 transform transition-all duration-300  uppercase font-semibold text-center p-[2rem] hover:border-headerNav border-2 rounded-lg">
            <RocketLaunchIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
              Backend
            </h1>
            <p className="font-light">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque
              aliquam voluptates vitae nulla quisquam. Dolores minima dicta,
              iusto libero, pariatur saepe cum magni eius provident porro
              tempore consequatur maiores nobis.
            </p>
          </div>
        </div>
        <div>
          <div className="bg-blue-700 hover:scale-105 transform transition-all duration-300 hover:rotate-6 uppercase font-semibold text-center p-[2rem] hover:border-headerNav border-2 rounded-lg">
            <CommandLineIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
              Fullstack Web Dev
            </h1>
            <p className="font-light">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque
              aliquam voluptates vitae nulla quisquam. Dolores minima dicta,
              iusto libero, pariatur saepe cum magni eius provident porro
              tempore consequatur maiores nobis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
