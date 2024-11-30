import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt } from "@fortawesome/free-regular-svg-icons";
import { faSearch, faDownload } from "@fortawesome/free-solid-svg-icons";
import Typography from "./common/Typography";
import MiniButton from "./MiniButton";

export default function ResumeButton() {
  const btnClasses =
    "group relative flex size-[175px] cursor-pointer items-center justify-center whitespace-pre rounded-full border-2 border-gray-200 bg-mred p-6 outline outline-[5px] outline-black transition-all duration-300 hover:w-[300px] hover:bg-red hover:outline-[8px]";

  return (
    <div className="RESUME-BUTTON hidden flex-col items-center gap-[6px] lg:flex">
      <div className={btnClasses}>
        <FontAwesomeIcon
          icon={faFileAlt}
          size="4x"
          className="text-white transition-all duration-300 group-hover:w-0 group-hover:opacity-0"
        />

        <div className="flex h-full w-0 items-center justify-around opacity-0 group-hover:w-full group-hover:opacity-100">
          <MiniButton icon={faSearch} label={"view"} />
          <MiniButton icon={faDownload} label={"download"} download />
        </div>
      </div>

      <Typography className="text-[1.15rem] font-semibold">Resume</Typography>
    </div>
  );
}
