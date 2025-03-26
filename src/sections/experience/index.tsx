import SparklesText from "@/components/complex/title";
import { educationData, experienceData } from "@/data";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Timeline from "./components/timeline";

const tabsHeader = [
  {
    id: "experience",
    title: "Work",
  },
  {
    id: "education",
    title: "Education",
  },
];

const Experience = () => {
  const [active, setActive] = useState<string>("experience");

  return (
    <section className="container mb-28">
      <SparklesText textureClassName="w-[28rem] ml-auto mr-auto mb-8">
        Experience
      </SparklesText>

      <div className="px-5 lg:custom-px relative">
        <div
          className={cn(
            "flex justify-center relative border mx-auto w-[16rem] py-3 px-2 border-primary rounded-xl gap-x-4 lg:gap-x-10 mb-20  after:bg-cyan-500/10 after:block after:absolute after:top-[7px] after:translate-x-0 after:left-2 after:w-[40%] after:h-[70%] after:rounded-xl after:z-10 after:transition-transform after:duration-300",
            {
              " after:translate-x-[96%] after:w-[46%]": active === "education",
            }
          )}
        >
          {tabsHeader.map((tabHeader) => (
            <div
              key={tabHeader.id}
              onClick={() => setActive(tabHeader.id)}
              className={cn(
                "cursor-pointer px-3 py-1 rounded-md z-20 relative",
                {
                  "text-primary": tabHeader.id === active,
                }
              )}
            >
              {tabHeader.title}
            </div>
          ))}
        </div>

        <div className="relative">
          <Timeline
            data={active === "experience" ? experienceData : educationData}
          />
          <div className="absolute top-10% right-10% white__gradient w-20% h-30% rounded-full" />
        </div>

        <div className="absolute -top-30 left-0" id="career" />
      </div>

      {/* <Lamp /> */}
    </section>
  );
};

export default Experience;
