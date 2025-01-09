import MobileNavbar from "@/components/MobileNavbar";
import Navbar from "@/components/Navbar";
import Project from "@/components/Project";
import React, { useState } from "react";

const ProjectPage = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const openNav = (): void => {
    setIsNavOpen(true);
  };

  const closeNav = (): void => {
    setIsNavOpen(false);
  };
  return (
    <div className="bg-mainBG ">
      <Navbar openNav={openNav} />
      <MobileNavbar isNavOpen={isNavOpen} closeNav={closeNav} />
      <Project />
    </div>
  );
};

export default ProjectPage;
