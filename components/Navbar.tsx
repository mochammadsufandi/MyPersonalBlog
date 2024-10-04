import { Bars3Icon } from "@heroicons/react/16/solid";
import React from "react";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";

interface Props {
  openNav: () => void;
}

const Navbar = (props: Props) => {
  const { openNav } = props;
  const router = useRouter();
  const pathname = usePathname();
  const routeLink = (link: string): void => {
    router.push(link);
  };

  return (
    <div className="w-[100%] top-0 h-[12vh] bg-navbar shadow-md fixed z-[100] ">
      <div className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
        <h1 className="flex-[0.6] cursor-pointer text-[25px] text-headerNav font-bold">
          WEB
          <span className="text-yellow-300">Dev</span>
        </h1>

        <div className="nav-link" onClick={() => routeLink("/")}>
          HOME
        </div>
        <div className="nav-link" onClick={() => routeLink("/service")}>
          SERVICE
        </div>
        <div className="nav-link" onClick={() => routeLink("/about")}>
          About
        </div>
        <div className="nav-link" onClick={() => routeLink("/project")}>
          Project
        </div>
        <div className="nav-link">Blog</div>
        <div className="nav-link">Contact</div>

        <div onClick={openNav}>
          <Bars3Icon className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-yellow-300" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
