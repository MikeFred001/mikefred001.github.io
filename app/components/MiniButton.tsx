import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Typography from "./common/Typography";
import { useState } from "react";
import Link from "next/link";

export default function MiniButton({
  icon,
  label,
  download = false,
  iconClassName,
}: IMiniButtonProps) {
  const [hover, setHover] = useState(false);

  return (
    <Link
      href="/assets/resume.pdf"
      target={"_blank"}
      download={download ? "" : undefined}
      className="MINI-BUTTON z-10 flex h-full flex-col items-center justify-center text-[2.5rem] text-red transition-all duration-200 lg:hover:-translate-y-3"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <FontAwesomeIcon
        icon={icon}
        className={`rounded-full bg-white p-4 text-red ${iconClassName}`}
      />
      {label && (
        <Typography
          className={`absolute bottom-4 w-11 text-center text-[.9rem] font-semibold leading-none text-white transition-all duration-200 ${hover ? "lg:translate-y-[10px] lg:opacity-100" : "opacity-0"}`}
        >
          {label}
        </Typography>
      )}
    </Link>
  );
}

interface IMiniButtonProps {
  icon: any;
  label?: string;
  download?: boolean;
  iconClassName?: string;
}
