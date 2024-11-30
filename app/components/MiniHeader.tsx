import Nav from "./Nav";
import Logo from "./Logo";

export default function Header({
  activeSection,
  miniHeader,
}: IMiniHeaderProps) {
  return (
    <div className="HEADER fixed right-0 top-0 z-10 flex w-full items-center justify-between border-b-2 border-mred bg-gray-100 p-2 pr-6">
      <Logo width={60} height={45} />
      <Nav activeSection={activeSection} miniHeader={miniHeader} />
    </div>
  );
}

interface IMiniHeaderProps {
  activeSection: string;
  miniHeader: boolean;
}
