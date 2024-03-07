import { Variants, motion } from "framer-motion";
import { FC, HTMLAttributes, ReactNode } from "react";

interface IProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variants: Variants;
}

const Motion: FC<IProps> = ({ children, variants, ...props }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={variants}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Motion;
