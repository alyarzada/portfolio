import { skillsData } from "@/data";
import { useState } from "react";
import BackgroundGradient from "@/components/complex/gradient-card";
import SparklesText from "@/components/complex/title";
import TechTable from "./components/tech-table";
import Field from "./components/field";
import MotionViewport from "@/components/animation/motion-viewport";
import { varRotate, varScale } from "@/lib/variants";

const Skills = () => {
  const [activeId, setActiveId] = useState<number>(1);

  const handleTechs = () => {
    return skillsData.find((skill) => skill.id === activeId)!.techs;
  };

  return (
    <section className="container mb-12 lg:mb-0" id="skills">
      <div className="flex flex-col">
        <SparklesText
          position="left"
          desc={
            <p>
              You can click on different areas to view my known tech stack in
              <br /> the right panel.
            </p>
          }
        >
          Tech stack
        </SparklesText>

        <div className="flex flex-col gap-y-8 lg:flex-between lg:flex-row">
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skillsData.map((skill, index) => (
                <MotionViewport
                  className="h-[202px]"
                  variants={varScale(1, {
                    delay: index * 0.1,
                  })}
                  key={skill.id}
                >
                  <Field
                    activeId={activeId}
                    setActiveId={setActiveId}
                    {...skill}
                  />
                </MotionViewport>
              ))}
            </div>
          </div>

            <MotionViewport variants={varRotate(-10)}>
              <BackgroundGradient className="rounded-[22px] min-h-[400px] lg:min-w-[500px] bg-background">
                <TechTable techs={handleTechs()} />
              </BackgroundGradient>
            </MotionViewport>
        </div>
      </div>
    </section>
  );
};

export default Skills;
