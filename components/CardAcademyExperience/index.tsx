import React from "react";

interface SectionCardProps {
  year: string;
  institution: string;
  position: string;
  description: string;
}

const CardExperience = (props: SectionCardProps) => {
  const { year, institution, position, description } = props;

  return (
    <div className="px-[4rem] py-[2rem] bg-sectionCard rounded-lg w-[35rem] h-[20rem] md:w-[25rem] overflow-y-auto">
      <h1 className="text-textAnimation text-[23px] font-bold ">{year}</h1>
      <h2 className="text-[18px] font-medium my-[0.5rem]">
        {institution},
        <span className="text-yellow-400 font-extrabold"> {position}</span>
      </h2>
      <div className="text-[14px]">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default CardExperience;
