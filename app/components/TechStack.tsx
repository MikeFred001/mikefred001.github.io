import Typography from "./common/Typography";

export default function TechStack({ techStack }: { techStack: string[] }) {
  return (
    <div className="TECH-STACK relative flex px-2 pb-[6px] pt-[9px] text-[1rem] lg:text-[1.3rem]">
      <div>
        <Typography className="pr-5 font-semibold text-white lg:pr-8">
          Tech Stack
        </Typography>
      </div>
      <div>
        <Typography className="hidden flex-1 whitespace-pre font-semibold lg:block">
          {techStack.join("   •   ")}
        </Typography>
        <Typography className="block flex-1 whitespace-pre font-semibold lg:hidden">
          {techStack.join("  •  ")}
        </Typography>
      </div>
    </div>
  );
}
