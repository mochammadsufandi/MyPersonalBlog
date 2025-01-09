import React from "react";
import ProjectCard from "./CardProject";

const Project = () => {
  const projectList = [
    {
      title: "OyaCo Warehouse Management System",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, facilis.",
      imageURL: "/images/p1.jpg",
      link: "http://localhost:3000/api/images/p1.jpg",
    },
    {
      title: "Bookshelf Website",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, facilis.",
      imageURL: "/images/p2.jpg",
      link: "http://localhost:3000/api/images/p1.jpg",
    },
    {
      title: "Tic Tac Toe Web",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, facilis.",
      imageURL: "/images/p3.jpg",
      link: "http://localhost:3000/api/images/p1.jpg",
    },
    {
      title: "Tic Tac Toe Web",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, facilis.",
      imageURL: "/images/p4.jpg",
      link: "http://localhost:3000/api/images/p1.jpg",
    },
    {
      title: "Tic Tac Toe Web",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, facilis.",
      imageURL: "/images/p5.jpg",
      link: "http://localhost:3000/api/images/p1.jpg",
    },
  ];

  return (
    <div className="mt-[12vh]  md:pt-[1rem]  h-[100%] pt-[1rem]">
      <h1 className="text-center text-headerNav text-[20px] sm:text-[25px] md:text-[35px] font-bold uppercase">
        My Pro<span className="text-yellow-400">Ject</span>
      </h1>
      <div className="flex flex-wrap justify-evenly text-headerNav items-center mx-auto w-[90%] md:pt-[3rem] gap-5 pb-[5rem]">
        {projectList.map((value, idx) => {
          return <ProjectCard image={value} key={idx} />;
        })}
      </div>
    </div>
  );
};

export default Project;
