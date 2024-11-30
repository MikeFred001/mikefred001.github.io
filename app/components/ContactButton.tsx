import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Typography from "./common/Typography";

export default function ContactButton({
  icon,
  label,
  href,
  onClick,
  phoneCopied,
}: IContactProps) {
  const mainClasses =
    "flex justify-center items-center whitespace-pre bg-mred border-2 border-gray-200 outline outline-[5px] outline-black rounded-full p-6 transition-all duration-300 hover:bg-red hover:outline-[8px]";

  return (
    <div
      className="CONTACT-BUTTON mb-4 flex flex-col items-center gap-[6px]"
      onClick={onClick}
    >
      <Link target="_blank" href={href || ""}>
        <div className={`size-[135px] lg:size-[175px] ${mainClasses}`}>
          {phoneCopied ? (
            <Typography className="text-[2rem]">COPIED!</Typography>
          ) : (
            <FontAwesomeIcon icon={icon} size="4x" className="m-2 text-white" />
          )}
        </div>
      </Link>
      <Typography className="text-[1.15rem] font-semibold">{label}</Typography>
    </div>
  );
}

interface IContactProps {
  icon: any;
  label: string;
  href?: string;
  phoneCopied?: boolean;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}
