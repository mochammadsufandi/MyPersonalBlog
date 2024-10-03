import { motion } from "framer-motion";

type KeyVariantsProps = {
  top: string[] | string;
};

interface VariantsProps {
  initial?: KeyVariantsProps;
  animate?: KeyVariantsProps;
  exit?: KeyVariantsProps;
}

const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

const reverseIndex = (index: number): number => {
  const totalSteps = 6;
  return totalSteps - (index - 1);
};

const Stairs = () => {
  return (
    <>
      {[...Array(6)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: reverseIndex(index) * 0.1,
            }}
            className="h-full w-full bg-[#3A6D8C] relative"
          />
        );
      })}
    </>
  );
};

export default Stairs;
