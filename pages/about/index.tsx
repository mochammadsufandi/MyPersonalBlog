import About from "@/components/About";
import MobileNavbar from "@/components/MobileNavbar";
import Navbar from "@/components/Navbar";
import React, { useState } from "react";

const AboutPage = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const openNav = (): void => {
    setIsNavOpen(true);
  };

  const closeNav = (): void => {
    setIsNavOpen(false);
  };

  return (
    <div className="overflow-x-hidden">
      <Navbar openNav={openNav} />
      <MobileNavbar closeNav={closeNav} isNavOpen={isNavOpen} />
      <About />
    </div>
  );
};

export default AboutPage;
