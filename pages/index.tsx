import Hero from "@/components/Hero";
import MobileNavbar from "@/components/MobileNavbar";
import Navbar from "@/components/Navbar";
import React, { useState } from "react";
import AboutPage from "../components/Stair";

const HomePage = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const openNav = (): void => {
    setIsNavOpen(true);
  };

  const closeNav = (): void => {
    setIsNavOpen(false);
  };

  return (
    <div className="overflow-x-hidden">
      <MobileNavbar closeNav={closeNav} isNavOpen={isNavOpen} />
      <Navbar openNav={openNav} />
      <Hero />
    </div>
  );
};

export default HomePage;
