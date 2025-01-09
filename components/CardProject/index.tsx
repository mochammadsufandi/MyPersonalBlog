import Image from "next/image";
import React, { useState } from "react";
import SliderProject from "../SliderCardProject";

interface ProjectCardProps {
  image: Image;
}

type Image = {
  imageURL: string;
  title: string;
  description: string;
  link: string;
};

const ProjectCard = (props: ProjectCardProps) => {
  const { image } = props;
  const [isSlideOpen, setIsSlideOpen] = useState(false);

  const onHover = (): void => {
    setIsSlideOpen(true);
  };

  const closeHover = (): void => {
    setIsSlideOpen(false);
  };

  return (
    <div
      className="relative hover:-translate-y-3 transform transition-all duration-300 overflow-hidden"
      onMouseEnter={onHover}
      onMouseLeave={closeHover}
    >
      <div className="px-[4rem] py-[2rem] cursor-pointer rounded-lg w-[35rem] h-[20rem] md:w-[25rem] relative">
        <Image
          src={image.imageURL}
          alt={image.title}
          layout="fill"
          className="object-cover w-full h-full"
        />
      </div>
      <SliderProject isSlideOpen={isSlideOpen} image={image} />
    </div>
  );
};

export default ProjectCard;
