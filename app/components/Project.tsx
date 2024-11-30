import Typography from "./common/Typography";
import ProjectCard from "./ProjectCard";
import ProjectTitles from "./ProjectTitles";

export default function Project({ project }: { project: IProjectProps }) {
  return (
    <div className="PROJECT flex flex-wrap lg:max-h-[37rem] lg:w-[74rem]">
      <ProjectTitles title={project.title} subtitle={project.subtitle} />
      <div className="flex flex-col items-start gap-4 lg:flex-row lg:gap-10">
        <ProjectCard
          imageUrl={project.imageUrl}
          videoUrl={project.videoUrl}
          techStack={project.techStack}
        />
        <Typography className="px-1 text-justify text-[1rem] font-semibold leading-[1.4] lg:px-0 lg:text-[1.5rem]">
          {project.description}
        </Typography>
      </div>
    </div>
  );
}

interface IProjectProps {
  title: string;
  subtitle: string;
  imageUrl?: string;
  videoUrl?: string;
  techStack: string[];
  description: string;
  github?: string;
}
