import { cn } from "@/lib/utils";
import { FC, HTMLAttributes } from "react";

const Gradient: FC<HTMLAttributes<HTMLDivElement>> = ({ className }) => {
  return (
    <div
      className={cn(
        "absolute z-5 top-0 left-0 w-[300px] h-[300px] bg-cyan-500/50 rounded-full",
        className
      )}
    />
  );
};

export default Gradient;
