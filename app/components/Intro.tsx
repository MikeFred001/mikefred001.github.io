import Typography from "./common/Typography";

export default function Intro({ ref }: { ref: any }) {
  return (
    <div
      id="home"
      ref={ref}
      className="INTRO flex h-[80vh] flex-col justify-center gap-3 text-[5rem] font-semibold lg:h-screen lg:text-[8rem]"
    >
      <div className="ml-6 flex animate-fadeIn flex-col self-center">
        <Typography className="leading-none">
          Hi, I'm{" "}
          <span className="text-mred text-shadow-black2 lg:text-shadow-black3">
            Mike
          </span>
        </Typography>
        <Typography className="leading-none">I'm a Web Developer.</Typography>
      </div>
      <div className="flex h-[5px]">
        <div className="h-[5px] w-[90%] animate-grow bg-mred" />
      </div>
    </div>
  );
}
