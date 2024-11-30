import Typography from "./common/Typography";
import ScalableImage from "./common/ScalableImage";

export default function About({ ref }: { ref: any }) {
  return (
    <div
      id="about"
      ref={ref}
      className="ABOUT flex w-full justify-center bg-gray-200"
    >
      <div className="flex w-auto justify-between px-4 py-10 lg:w-[74rem]">
        <div className="flex flex-col lg:gap-2">
          <Typography className="text-shadow-red3 text-[4rem] font-semibold leading-tight lg:text-[6rem] lg:text-shadow-red2">
            About
          </Typography>
          <Typography className="max-w-[48rem] text-justify text-[1rem] font-semibold lg:text-[1.6rem]">
            Hi, I'm Mike. I'm a software engineer, people person, and lifetime
            nerd. I specialize in building responsive, custom web apps using
            tech like React, Next.js, PostgreSQL, and more. I made the leap into
            tech in 2020 because I simply like creating cool stuff. Especially
            when it works well and looks good. <br />
            Most recently I worked at Vital Time Tech where I helped build
            everything from complex social media platforms to inventory and
            workflow management systems. My background in office environments
            also gave me valuable skills in teamwork, communication, and time
            management. <br />
            I'm a fast learner and I'm always excited to take on new challenges,
            whether it's frontend or full-stack development. If you're looking
            for a dedicated engineer who values quality and enjoys working with
            people, feel free to connect. Check out some of my projects below!
          </Typography>
        </div>
        <ScalableImage
          src="/images/about1.png"
          alt="Nerdy programmer guy"
          className="rounded-xl"
          containerClassName="hidden lg:block"
          width={360}
        />
      </div>
    </div>
  );
}
