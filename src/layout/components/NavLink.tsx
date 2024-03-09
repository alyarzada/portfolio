import { cn } from "@/lib/utils";
import { FC } from "react";

interface IProps {
  navLink: {
    id: number;
    title: string;
    path: string;
  };
  className?: string;
}

const NavLink: FC<IProps> = ({ navLink, className }) => {
  return (
    <li
      key={navLink.id}
      className={cn(
        "text-muted-foreground hover:text-primary text-sm font-medium tracking-wide transition-colors duration-300",
        className
      )}
    >
      <a href={navLink.path}>{navLink.title}</a>
    </li>
  );
};

export default NavLink;
