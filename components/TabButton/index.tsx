import React, { ReactElement } from "react";

interface TabButtonProps {
  title: string;
  children: ReactElement;
  onHover: () => void;
  closeHover: () => void;
  onClick: () => void;
}

const TabButton = (props: TabButtonProps) => {
  const { title, children, onHover, closeHover, onClick } = props;
  return (
    <>
      <button
        className="flex items-center rounded-md bg-textAnimation px-[2rem] py-[1rem] space-x-2 text-[18px] text-black font-bold uppercase hover:bg-green-700 hover:text-yellow-300 border-headerNav hover:border-2"
        onMouseEnter={onHover}
        onMouseLeave={closeHover}
        onClick={onClick}
      >
        {children}
        <h2 className="">{title}</h2>
      </button>
    </>
  );
};

export default TabButton;
