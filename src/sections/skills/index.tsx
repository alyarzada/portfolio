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
    <section className="container" id="skills">
      <div>
        <SparklesText
          className="mb-4 text-left"
          textureClassName="w-[28rem] mr-auto ml-0"
        >
          Tech stack
        </SparklesText>

        <div className="flex flex-col lg:flex-between lg:flex-row">
          <div className="w-full lg:w-1/2">
            <p className=" mb-8 text-sm text-muted-foreground">
              You can click on different areas to view my known tech stack in
              the right <br /> panel.
            </p>

            <div className="flex lg:grid lg:grid-cols-2 gap-6">
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
            <BackgroundGradient className="rounded-[22px] min-w-[500px] min-h-[400px] max-w-sm bg-background">
              <TechTable techs={handleTechs()} />
            </BackgroundGradient>
          </MotionViewport>
        </div>
      </div>
    </section>
  );
};

export default Skills;
