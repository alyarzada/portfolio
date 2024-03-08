import Spotlight from "@/components/complex/spotlight";
import ProfileImg from "@/assets/images/hero.jpg";
import Image from "@/components/ui/image";
import GradientButton from "@/components/complex/gradient-button";
import { Button } from "@/components/ui/button";
import { Flame, MapPin, Mouse } from "lucide-react";
import { useAnimate } from "framer-motion";
import { useEffect, useState } from "react";
import Socials from "./components/socials";
import { varSlide } from "@/lib/variants";
import Motion from "@/components/animation/motion";
import MotionViewport from "@/components/animation/motion-viewport";

const Hero = () => {
  const [currentJobIndex, setCurrentJobIndex] = useState<number>(0);
  const [scope, animate] = useAnimate();

  const jobTitles = ["Developer", "Programmer", "Coder"];

  useEffect(() => {
    setInterval(() => {
      animate(scope.current, { opacity: 0, y: 20 });

      setTimeout(() => {
        setCurrentJobIndex((prevIndex) => (prevIndex + 1) % jobTitles.length);
        animate(scope.current, { opacity: 1, y: 0 });
      }, 500);
    }, 2000);
  }, []);

  return (
    <section className="container z-20 relative pt-[10vh] min-h-[calc(100vh-80px)]">
      <div className="flex-center lg:flex-between">
        <div className="w-full lg:w-1/2">
          <Spotlight className="top-40 left-0 md:left-10 md:top-5" />

          <Motion
            variants={varSlide("up", {
              delay: 0.8,
            })}
            className="font-semibold text-primary leading-none text-[60px]"
          >
            Hello,
          </Motion>

          <Motion
            variants={varSlide("up", {
              delay: 0.9,
            })}
          >
            <p className="whitespace-nowrap font-semibold leading-none text-[60px]">
              I'm Tunar Alyarzada
            </p>
          </Motion>

          <Motion
            variants={varSlide("up", {
              delay: 1,
            })}
          >
            <div className="flex gap-x-2 text-[30px] mb-8">
              <h1 ref={scope}>{jobTitles[currentJobIndex]}</h1>
              <span className="flex items-center gap-x-1">
                based in Azerbaijan <MapPin />
              </span>
            </div>
          </Motion>

          <Motion
            variants={varSlide("up", {
              delay: 1.1,
            })}
          >
            <p className="text-muted-foreground mb-6">
              Experienced React developer specializing in complex dashboard
              projects, with over <br /> three years of expertise in modern tech
              stacks for crafting dynamic and responsive web applications.
            </p>
          </Motion>

          <Motion
            variants={varSlide("up", {
              delay: 1.2,
            })}
          >
            <div className="flex gap-x-3 mb-6">
              <GradientButton>
                <a href="#skills" className="flex items-center">
                  See my Work <Flame size={20} className="ml-2" />
                </a>
              </GradientButton>
              <Button variant="outline">
                <a
                  href="../../assets/Tunar_Alyarzada_CV.pdf"
                  download="Tunar_Alyarzada_CV"
                >
                  Download CV
                </a>
              </Button>
            </div>
          </Motion>

          <Motion
            variants={varSlide("up", {
              delay: 1.3,
            })}
          >
            <Socials />
          </Motion>
        </div>

        <MotionViewport variants={varSlide("left")} className="w-1/3">
          <Image
            src={ProfileImg}
            className="rounded-full w-full hidden lg:block shadow-2xl"
          />
        </MotionViewport>
      </div>

      <div className="flex justify-center mt-28 animate-bounce ">
        <Mouse size={28} />
      </div>
    </section>
  );
};

export default Hero;
