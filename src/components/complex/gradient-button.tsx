import { cn } from "@/lib/utils";
import { FC, HTMLAttributes, ReactNode } from "react";

interface IProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const GradientButton: FC<IProps> = ({ children, className, ...props }) => {
  return (
    <button
      className={cn(
        "relative inline-flex h-10 overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50",
        className
      )}
      {...props}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#515151_50%,#06b6d4_100%)]" />

      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-[#171717] px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
        {children}
      </span>
    </button>
  );
};

export default GradientButton;
