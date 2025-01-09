import React from "react";
import CardExperience from "./CardAcademyExperience";

const Education = () => {
  const field = [
    {
      year: "2023",
      institution: "Institut Teknologi Sepuluh Nopember",
      position: "Bachelor Degree Physics",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. A consectetur eius placeat debitis blanditiis corporis ducimus? Minima non distinctio accusantium aliquam magnam saepe laudantium magni, fugiat, nulla tempore fuga sed!",
    },
    {
      year: "2024",
      institution: "Rakamin Academy",
      position: "Fullstack Web Developer",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. A consectetur eius placeat debitis blanditiis corporis ducimus? Minima non distinctio accusantium aliquam magnam saepe laudantium magni, fugiat, nulla tempore fuga sed!",
    },
    {
      year: "2023",
      institution: "Dicoding Scolarship",
      position: "Front End",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. A consectetur eius placeat debitis blanditiis corporis ducimus? Minima non distinctio accusantium aliquam magnam saepe laudantium magni, fugiat, nulla tempore fuga sed!",
    },
  ];
  return (
    <div className="bg-section">
      <h1 className="text-center text-headerNav text-[20px] sm:text-[25px] md:text-[35px] font-bold uppercase pt-[2rem]">
        My Edu<span className="text-yellow-400">cation</span>
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

export default Education;
