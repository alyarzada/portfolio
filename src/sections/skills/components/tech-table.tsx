import { Meteors } from "@/components/complex/meteors";
import Image from "@/components/ui/image";
import { FC } from "react";

interface IProps {
  techs: {
    id: number;
    title: string;
    icon: string;
  }[];
}

const TechTable: FC<IProps> = ({ techs }) => {
  return (
    <div className="overflow-hidden w-full relative p-4 sm:p-10">
      <ul className="grid grid-cols-2 gap-6 p-3">
        {techs?.map((tech) => (
          <li key={tech.id} className="flex gap-x-2">
            <Image className="w-6 h-6" src={tech.icon} alt="" />
            {tech.title}
          </li>
        ))}
      </ul>

      <Meteors number={20} />
    </div>
  );
};

export default TechTable;
