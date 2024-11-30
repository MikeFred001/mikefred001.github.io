import ScalableImage from "./common/ScalableImage";
import TechStack from "./TechStack";

export default function ProjectCard({
  videoUrl,
  imageUrl,
  techStack,
}: IProjectCardProps) {
  return (
    <div className="PROJECT-CARD relative flex w-full flex-shrink-0 flex-col overflow-hidden rounded-lg bg-gray-300 shadow-custom1 lg:w-[45rem]">
      <div className="absolute bottom-0 left-0 h-[6.5rem] w-[5rem] -translate-x-2 translate-y-5 rotate-[345deg] bg-gray-600 lg:w-[6.5rem]" />
      {videoUrl && (
        <video className="scale-[1.01]" src={videoUrl} controls loop muted>
          Your browser does not support the video tag.
        </video>
      )}
      {imageUrl && (
        <ScalableImage
          src={imageUrl}
          className="scale-[1.01]"
          alt="Project image"
        />
      )}
      <TechStack techStack={techStack} />
    </div>
  );
}

interface IProjectCardProps {
  videoUrl?: string;
  imageUrl?: string;
  techStack: string[];
}
