import React from "react";
import CardExperience from "./CardAcademyExperience";

const Experience = () => {
  const field = [
    {
      year: "2024",
      institution: "VIX in Core Inisiative X Rakamin",
      position: "Frontend",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. A consectetur eius placeat debitis blanditiis corporis ducimus? Minima non distinctio accusantium aliquam magnam saepe laudantium magni, fugiat, nulla tempore fuga sed!",
    },
    {
      year: "2024",
      institution: "VIX Mandiri X Rakamin",
      position: "Mobile App Developer",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. A consectetur eius placeat debitis blanditiis corporis ducimus? Minima non distinctio accusantium aliquam magnam saepe laudantium magni, fugiat, nulla tempore fuga sed! Lorem ipsum dolor sit, amet consectetur adipisicing elit. A consectetur eius placeat debitis blanditiis corporis ducimus? Minima non distinctio accusantium aliquam magnam saepe laudantium magni, fugiat, nulla tempore fuga sed!Lorem ipsum dolor sit, amet consectetur adipisicing elit. A consectetur eius placeat debitis blanditiis corporis ducimus? Minima non distinctio accusantium aliquam magnam saepe laudantium magni, fugiat, nulla tempore fuga sed!",
    },
    {
      year: "2024",
      institution: "Ganesha Operation",
      position: "Physics Tutor",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. A consectetur eius placeat debitis blanditiis corporis ducimus? Minima non distinctio accusantium aliquam magnam saepe laudantium magni, fugiat, nulla tempore fuga sed!",
    },
  ];
  return (
    <div className="bg-section">
      <h1 className="text-center text-headerNav text-[20px] sm:text-[25px] md:text-[35px] font-bold uppercase pt-[2rem]">
        My Exp<span className="text-yellow-400">erience</span>
      </h1>
      <p className="text-headerNav text-[17px] text-center mt-[2rem]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
        voluptatum!
      </p>
      <div className="flex flex-wrap justify-center text-headerNav items-center mx-auto w-[90%] md:pt-[3rem] gap-5 pb-[5rem]">
        {field.map((value, idx) => {
          return (
            <CardExperience
              year={value.year}
              institution={value.institution}
              position={value.position}
              description={value.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
