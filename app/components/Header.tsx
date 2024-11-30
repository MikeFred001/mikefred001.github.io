import Nav from "./Nav";
import Logo from "./Logo";

export default function Header({
  activeSection,
  miniHeader,
  className,
}: IHeaderProps) {
  const miniNavStyling = "pr-4 py-2 border-b-2 border-mred lg:p-2 lg:pr-6";

  return (
    <div
      className={`HEADER fixed right-0 top-0 z-10 flex w-full items-center justify-between bg-gray-100 ${className} ${miniHeader ? miniNavStyling : "p-4 pr-10"} `}
    >
      <Logo width={miniHeader ? 60 : 100} height={miniHeader ? 45 : 85} />
      <Nav activeSection={activeSection} miniHeader={miniHeader} />
    </div>
  );
}

interface IHeaderProps {
  activeSection: string;
  miniHeader: boolean;
  className?: string;
}
