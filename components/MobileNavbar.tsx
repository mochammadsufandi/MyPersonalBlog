import { XMarkIcon } from "@heroicons/react/20/solid";
import React from "react";

interface Props {
  isNavOpen: boolean;
  closeNav: () => void;
}

const MobileNavbar = (props: Props) => {
  const { isNavOpen, closeNav } = props;
  const navAnimation = isNavOpen ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <div
      className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[1000]`}
    >
      <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center bg-navbar opacity-80">
        <div className="nav-link-mobile">HOME</div>
        <div className="nav-link-mobile">SERVICE</div>
        <div className="nav-link-mobile">ABOUT</div>
        <div className="nav-link-mobile">PROJECT</div>
        <div className="nav-link-mobile">BLOG</div>
        <div className="nav-link-mobile">CONTACT</div>

        <div
          className="absolute cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-yellow-400"
          onClick={closeNav}
        >
          <XMarkIcon className="font-bold" />
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
