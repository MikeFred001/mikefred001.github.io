import Link from "next/link";
import Typography from "./common/Typography";

export default function Nav({
  activeSection,
  miniHeader,
}: {
  activeSection: string;
  miniHeader: boolean;
}) {
  const styling = {
    default: `${miniHeader ? "text-[1.5rem]" : "text-[2rem]"} hover:scale-110 active:text-mred transition-all duration-300`,
    active: "text-mred text-shadow-black1",
    mini: "text-[1.1rem] w-[17rem] lg:text-[1.25rem] lg:w-[19rem]",
  };

  return (
    <nav
      className={`NAV flex justify-between font-semibold transition-all duration-300 ${miniHeader ? styling.mini : "w-[23rem] text-[2rem]"} `}
    >
      <Link href="#home">
        <Typography
          className={`${styling.default} ${activeSection === "home" ? styling.active : ""}`}
        >
          Home
        </Typography>
      </Link>

      <Link href="#about">
        <Typography
          className={`${styling.default} ${activeSection === "about" ? styling.active : ""}`}
        >
          About
        </Typography>
      </Link>

      <Link href="#projects">
        <Typography
          className={`${styling.default} ${activeSection === "projects" ? styling.active : ""}`}
        >
          Projects
        </Typography>
      </Link>

      <Link href="#contact">
        <Typography
          className={`${styling.default} ${activeSection === "contact" ? styling.active : ""}`}
        >
          Contact
        </Typography>
      </Link>
    </nav>
  );
}
