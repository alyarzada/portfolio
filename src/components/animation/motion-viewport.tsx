import { Variants, motion } from "framer-motion";
import { FC, HTMLAttributes, ReactNode } from "react";

interface IProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variants: Variants;
}

const MotionViewport: FC<IProps> = ({ children, variants, ...props }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      exit="exit"
      variants={variants}
      viewport={{ once: true }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default MotionViewport;
