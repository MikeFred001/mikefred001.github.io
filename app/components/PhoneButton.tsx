import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Typography from "./common/Typography";

export default function PhoneButton({
  icon,
  label,
  onClick,
  phoneCopied,
}: IPhoneButtonProps) {
  const mainClasses =
    "flex size-[135px] lg:size-[175px] cursor-pointer items-center justify-center whitespace-pre rounded-full border-2 border-gray-200 bg-mred p-6 outline outline-[5px] outline-black transition-all duration-300 hover:bg-red hover:outline-[8px]";

  return (
    <div
      className="PHONE-BUTTON flex flex-col items-center gap-[6px]"
      onClick={onClick}
    >
      <div className={mainClasses}>
        {phoneCopied ? (
          <Typography className="text-[3rem] text-white transition-all duration-300">
            COPIED!
          </Typography>
        ) : (
          <FontAwesomeIcon icon={icon} size="4x" className="m-2 text-white" />
        )}
      </div>
      <Typography className="text-[1.15rem] font-semibold">{label}</Typography>
    </div>
  );
}

interface IPhoneButtonProps {
  icon: any;
  label: string;
  phoneCopied?: boolean;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}
