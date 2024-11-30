import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt } from "@fortawesome/free-regular-svg-icons";
import { faSearch, faDownload } from "@fortawesome/free-solid-svg-icons";
import Typography from "./common/Typography";
import MiniButton from "./MiniButton";

export default function ResumeButton() {
  const btnClasses =
    "relative flex h-[135px] w-full max-w-[350px] cursor-pointer items-center justify-center whitespace-pre rounded-full border-2 border-gray-200 bg-mred p-6 outline outline-[5px] outline-black transition-all duration-300 justify-between";

  return (
    <div className="RESUME-BUTTON-MOBILE flex w-full flex-col items-center gap-[6px] lg:hidden">
      <div className={btnClasses}>
        <MiniButton icon={faSearch} iconClassName={"p-6"} />
        <MiniButton icon={faDownload} iconClassName={"p-6"} download />
      </div>

      <Typography className="text-[1.15rem] font-semibold">Resume</Typography>
    </div>
  );
}
