import { TextRevealCard } from "@/components/complex/card-text-reveal";
import Title from "@/components/complex/title";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { varSlide } from "@/lib/variants";
import MotionViewport from "@/components/animation/motion-viewport";

import AboutImage from "@/assets/images/notebook.jpg";

const About = () => {
  const [readMore, setReadMore] = useState<boolean>(false);

  return (
    <section id="about" className="container relative">
      <div className="flex gap-x-8">
        <MotionViewport className="w-1/3" variants={varSlide("right")}>
          <img
            src={AboutImage}
            alt="about image"
            className="w-full rounded grayscale hidden lg:block"
          />
        </MotionViewport>

        <MotionViewport variants={varSlide("left")} className="flex-1 w-full">
          <Title className="text-right" textureClassName="w-[30rem] ml-auto">
            About me
          </Title>

          <div className="text-muted-foreground mb-4 text-right flex flex-col gap-y-4">
            <p className="text-xl text-primary-foreground">
              Welcome to my portfolio website. My name is Tunar Alyarzada. I am
              a developer from the beautiful capital city of Baku in Azerbaijan.
            </p>

            <p>
              <span className="text-primary">For over three years now</span>, I
              have been immersing myself in both practical and theoretical
              knowledge in the field of front-end development, particularly
              focusing on React.js. In addition to various projects, my primary
              focus has been on developing complex "dashboard type" systems from
              scratch, incorporating all necessary frontend modules using modern
              technologies. As someone who is eager to continually learn new
              things, I closely follow emerging innovations in this field and
              implement them in every project I undertake. In addition to my
              expertise in the front-end field, I have also delved into the
              server-side (Node.js) to fully grasp the field, developing several
              different full-stack apps over the past years...
            </p>

            {readMore && (
              <>
                <p>
                  <span className="text-primary">
                    A Brief History of my journey
                  </span>{" "}
                  - After finishing my master's degree in Business
                  Administration, I felt a bit lost since I only knew English at
                  the time. But then, one day, a friend who works as a backend
                  developer suggested me to try frontend development. I started
                  frontend by watching beginner videos about HTML, CSS, and JS.
                  And that's how I started my journey into coding... Throughout
                  my career journey, I've faced many challenges. This field
                  requires patience and consistency. But my strong desire to
                  learn has kept me moving forward! Sometimes I needed a breaks
                  to recharge and step away from everything. Despite the ups and
                  downs, I've enjoyed overcoming obstacles and am excited about
                  what's next!
                </p>
              </>
            )}

            <Button
              className="w-fit ml-auto"
              variant="outline"
              onClick={() => setReadMore(!readMore)}
            >
              Read {readMore ? "less" : "more"}
            </Button>

            <TextRevealCard
              text="Hover over to see my slogan;)"
              revealText="'Everything is about consistency!'"
            />
          </div>
        </MotionViewport>
      </div>
    </section>
  );
};

export default About;

//  <p className="mb-4">
//             "Throughout my career journey, I have been through a lot stuff:)
//             This dynamic field demands patient and consistency! But my
//             relentless passion for learning has kept me pushing forward on
//             this way! There were times when I needed a break to recharge and
//             step away from everything. Despite the ups and downs, I've found
//             joy in overcoming obstacles and am excited about what the future
//             holds!"
//           </p>
