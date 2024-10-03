import React from "react";
import { TypeAnimation } from "react-type-animation";

const TypeEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "Coding",
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        "Web Developer",
        1000,
        "React JS",
        1000,
        "Physics",
        1000,
      ]}
      wrapper="span"
      speed={50}
      className="text-[2rem] md:text-[3rem] text-textAnimation font-bold uppercase"
      repeat={Infinity}
    />
  );
};

export default TypeEffect;
