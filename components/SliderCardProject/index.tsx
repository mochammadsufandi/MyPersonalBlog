import Link from "next/link";
import React from "react";

interface SliderProjectProps {
  isSlideOpen: boolean;
  image: Image;
}

type Image = {
  imageURL: string;
  title: string;
  description: string;
  link: string;
};

const SliderProject = (props: SliderProjectProps) => {
  const { isSlideOpen, image } = props;
  return (
    <>
      <div
        className={`absolute bg-violet-800 opacity-60 w-full h-full top-0 left-0 rounded-lg transition-transform duration-700 ease-in-out ${
          isSlideOpen ? "translate-y-0" : "-translate-y-full h-0"
        }`}
      ></div>
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-10">
        <Link
          href={image.link}
          className="p-4 text-headerNav text-center bg-violet-800 rounded-md opacity-90"
        >
          {isSlideOpen && (
            <>
              <h2 className="text-xl font-bold text-headerNav">
                {image.title}
              </h2>
              <p className="text-yellow-200">{image.description}</p>
            </>
          )}
        </Link>
      </div>
    </>
  );
};

export default SliderProject;
