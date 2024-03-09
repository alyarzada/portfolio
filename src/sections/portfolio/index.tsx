import { CardBody, CardContainer, CardItem } from "@/components/complex/card3d";
import Image from "@/components/ui/image";
import { projectsData } from "@/data";
import { ChevronRight, Github, LockKeyhole, Tv } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Title from "@/components/complex/title";
import MotionViewport from "@/components/animation/motion-viewport";
import { varSlide } from "@/lib/variants";

const Portfolio = () => {
  return (
    <section id="portfolio" className="container">
      <Title
        className="text-left mb-4"
        textureClassName="ml-0 mr-0 w-[30rem] -translate-x-24"
      >
        Portfolio
      </Title>

      <p className="text-muted-foreground mb-16 text-sm">
        Here is my recent works. You can see source code on github page or view
        demo by clicking appropriate buttons. <br /> Additionally, you can click
        feat button to see top features of the project.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project, index) => (
          <MotionViewport
            key={project.id}
            variants={varSlide("down", {
              delay: index * 0.1,
            })}
          >
            <CardContainer className="inter-var">
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-background dark:border-white/[0.2] border-black/[0.1] h-auto rounded-xl p-6 border">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  {project.title}
                </CardItem>

                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 mb-4"
                >
                  Hover over this card to unleash the power of CSS perspective
                </CardItem>

                <CardItem translateZ="100" className="w-full mb-6">
                  <Image
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    src={project.image}
                    alt={project.title}
                    height="500"
                    width="500"
                  />
                </CardItem>

                <CardItem className="flex flex-wrap gap-x-1 gap-y-2">
                  {project.techs.map((tech, index) => (
                    <div
                      className="text-xs bg-cyan-500/10 text-primary rounded-lg p-1"
                      key={index}
                    >
                      {tech}
                    </div>
                  ))}
                </CardItem>

                <div className="flex-between items-center mt-6">
                  <div className="flex gap-x-2">
                    <a
                      className="flex cursor-pointer w-full h-full px-4 py-2 rounded-xl text-xs font-normal dark:text-white bg-primary"
                      href={!project.private ? project.githubLink : false}
                      target="_blank"
                    >
                      {project.private ? (
                        <>
                          Private <LockKeyhole className="h-4 w-4 ml-1" />
                        </>
                      ) : (
                        <>
                          Github <Github className="h-4 w-4 ml-1" />
                        </>
                      )}
                    </a>

                    <a
                      className="flex cursor-pointer w-full h-full px-4 py-2 rounded-xl text-foregorund text-xs font-bold"
                      href={project.demoLink}
                      target="_blank"
                    >
                      Demo <Tv className="h-4 w-4 ml-1" />
                    </a>
                  </div>
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-background text-white text-xs font-bold"
                  >
                    <AlertDialog>
                      <AlertDialogTrigger className="flex">
                        Feat <ChevronRight className="h-4 w-4 ml-1" />
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>{project.title}</AlertDialogTitle>
                          <AlertDialogDescription>
                            Soon...
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction>Continue</AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </MotionViewport>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
