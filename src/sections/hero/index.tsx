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

  const jobTitles = ["Frontend", "Backend", "Fullstack"];

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
    <section className="container z-20 relative pt-[10vh] min-h-[calc(90vh-80px)] lg:min-h-[calc(100vh-80px)]">
      <div className="flex-between">
        <div className="w-full flex-center-col lg:block lg:w-1/2">
          <Spotlight className="top-40 left-0 md:left-10 md:top-5" />

          <Motion
            variants={varSlide("up", {
              delay: 0.9,
            })}
          >
            <p className="whitespace-nowrap font-semibold leading-none text-[40px] sm:text-[50px] md:text-[60px] text-center lg:text-left">
              <span className="text-primary">Hello,</span> <br /> I'm Tunar
              Alyarzada
            </p>
          </Motion>

          <Motion
            variants={varSlide("up", {
              delay: 1,
            })}
          >
            <div className="flex whitespace-nowrap gap-x-2 mb-6 lg:mb-2 mt-2 lg:mt-0 text-[18px] sm:text-[20px] md:text-[30px]">
              <h1 className="w-[78px] md:w-[134px]" ref={scope}>
                {jobTitles[currentJobIndex]}
              </h1>
              <span className="flex items-center gap-x-1">
                Engineer based in Azerbaijan <MapPin />
              </span>
            </div>
          </Motion>

          <Motion
            variants={varSlide("up", {
              delay: 1.1,
            })}
          >
            <p className="text-muted-foreground text-center lg:text-start mb-6">
              Experienced React developer with over 3 years of expertise in
              building dynamic and responsive SaaS applications using modern
              tech stacks. Skilled in developing scalable, high-performance web
              solutions.
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
                  href="/Tunar_Alyarzada_CV.pdf"
                  download="Tunar_Alyarzada_CV"
                  type="application/pdf"
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

        <MotionViewport
          variants={varSlide("left")}
          className="w-1/3 hidden lg:block"
        >
          <Image src={ProfileImg} className="rounded-full w-full  shadow-2xl" />
        </MotionViewport>
      </div>

      <div className="flex justify-center mt-28 animate-bounce ">
        <Mouse size={28} />
      </div>
    </section>
  );
};

export default Hero;
