import Typography from "./common/Typography";

export default function ProjectTitles({
  title,
  subtitle,
}: IProjectTitlesProps) {
  return (
    <div className="flex flex-col items-start pl-[2px] lg:pl-0">
      <Typography className="w-fit text-[2rem] font-semibold leading-none lg:text-[3.25rem]">
        {title}
      </Typography>
      <Typography className="mb-2 w-fit text-[1.5rem] font-semibold leading-none text-mred lg:text-[2.25rem]">
        {subtitle}
      </Typography>
    </div>
  );
}

interface IProjectTitlesProps {
  title: string;
  subtitle: string;
}
