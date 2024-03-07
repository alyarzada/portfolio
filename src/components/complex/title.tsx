import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import MotionViewport from "../animation/motion-viewport";
import { varFade } from "@/lib/variants";

interface IProps {
  children: ReactNode;
  className?: string;
  textureClassName?: string;
}

function Title({ children, className, textureClassName }: IProps) {
  return (
    <MotionViewport variants={varFade()}>
      <div className={cn("w-full mb-4 text-center", className)}>
        <h1 className="md:text-7xl text-3xl lg:text-[65px] font-bold text-foreground relative z-20">
          {children}
        </h1>

        <div className={cn("w-[30rem] relative", textureClassName)}>
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-primary to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-primary to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-primary to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-primary to-transparent h-px w-1/4" />

          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 w-full h-full bg-background [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]" />
        </div>
      </div>
    </MotionViewport>
  );
}

export default Title;
