import MobileNavbar from "@/components/MobileNavbar";
import Navbar from "@/components/Navbar";
import Service from "@/components/Service";
import React, { useState } from "react";

const ServicePage = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const openNav = (): void => {
    setIsNavOpen(true);
  };

  const closeNav = (): void => {
    setIsNavOpen(false);
  };

  return (
    <div>
      <Navbar openNav={openNav} />
      <MobileNavbar closeNav={closeNav} isNavOpen={isNavOpen} />
      <Service />
    </div>
  );
};

export default ServicePage;
