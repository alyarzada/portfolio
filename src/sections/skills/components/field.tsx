import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { FC, ReactNode } from "react";

interface IProps {
  setActiveId: React.Dispatch<React.SetStateAction<number>>;
  activeId: number;
  id: number;
  field: string;
  techs: string[];
  icon: ReactNode;
  desc: string;
}

const Field: FC<IProps> = ({
  activeId,
  setActiveId,
  id,
  field,
  icon,
  desc,
}) => {
  return (
    <Card
      className={cn(
        "p-10 cursor-pointer h-full relative rounded-3xl overflow-hidden hover:shadow-lg hover:shadow-primary transition-all duration-300",
        {
          "border-cyan-500/50": id === activeId,
        }
      )}
      onClick={() => setActiveId(id)}
    >
      {field === "Frontend" && (
        <span className="text-xs text-primary bg-cyan-500/10 px-2 py-1 rounded-full absolute top-2 right-2">
          Focus On
        </span>
      )}

      <CardHeader>
        <CardTitle className="flex items-center gap-x-2">
          {field} {icon}
        </CardTitle>
      </CardHeader>

      <CardDescription>{desc}</CardDescription>
    </Card>
  );
};

export default Field;
