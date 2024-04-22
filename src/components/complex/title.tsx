import { cn } from "@/lib/utils";
import { ReactElement, ReactNode } from "react";
import MotionViewport from "../animation/motion-viewport";
import { varFade } from "@/lib/variants";

interface IProps {
  children: ReactNode;
  className?: string;
  desc?: string | Element | ReactElement;
  position?: "right" | "center" | "left";
}

function Title({ children, className, desc, position = "center" }: IProps) {
  return (
    <MotionViewport variants={varFade()} className="mb-6">
      <div
        className={cn("w-full mb-4", className, {
          "text-right": position === "right",
          "text-left": position === "left",
          "text-center": position === "center",
        })}
      >
        <div className="mb-4">
          <h1 className="md:text-7xl text-3xl lg:text-[65px] font-bold text-foreground relative z-20">
            {children}
          </h1>

          <div
            className={cn("] w-full flex justify-end", {
              "justify-end": position === "right",
              "justify-start": position === "left",
              "justify-center": position === "center",
            })}
          >
            <div className={cn(" w-[30rem] relative")}>
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-primary to-transparent h-[2px] w-3/4 blur-sm" />
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-primary to-transparent h-px w-3/4" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-primary to-transparent h-[5px] w-1/4 blur-sm" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-primary to-transparent h-px w-1/4" />
              <div className="absolute inset-0 w-full h-full bg-background [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]" />
            </div>
          </div>
        </div>

        {desc ? <p className="text-muted-foreground text-sm">{desc}</p> : null}
      </div>
    </MotionViewport>
  );
}

export default Title;
