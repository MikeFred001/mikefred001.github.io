import { useEffect, useState, useRef } from "react";
import Project from "./Project";
import Typography from "./common/Typography";
import projects from "../data/projects.json";

export default function Projects({ ref }: { ref: any }) {
  const [visibleIndexes, setVisibleIndexes] = useState<number[]>([]);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(slideInProject, []);

  return (
    <div
      id="projects"
      ref={ref}
      className="PROJECTS flex w-full px-4 py-10 lg:py-10"
    >
      <div className="mx-auto pb-10">
        <Typography className="text-shadow-red3 mb-10 text-[4rem] font-semibold leading-tight lg:text-[6rem] lg:text-shadow-red2">
          Projects
        </Typography>
        <div className="flex flex-col gap-[8rem] lg:gap-[12rem]">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => {
                projectRefs.current[index] = el;
              }}
              className={`transform transition-all duration-[700ms] ${
                visibleIndexes.includes(index)
                  ? "translate-x-0 opacity-100"
                  : "translate-x-[-50px] opacity-0"
              }`}
            >
              <Project project={project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  function slideInProject() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = projectRefs.current.indexOf(
            entry.target as HTMLDivElement,
          );
          if (entry.isIntersecting && index !== -1) {
            setVisibleIndexes((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.5 },
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      projectRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }
}
