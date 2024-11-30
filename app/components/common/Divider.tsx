export default function Divider({ reversed = false }: { reversed?: boolean }) {
  return (
    <div
      className={`DIVIDER relative h-[40px] w-full lg:h-[100px] ${reversed ? "bg-gray-200" : "bg-gray-100"}`}
    >
      <div
        className={`absolute left-0 top-0 h-full w-full border-r-[100vw] border-t-[40px] border-t-transparent lg:border-t-[100px] ${reversed ? "border-r-gray-100" : "border-r-gray-200"} `}
      />
    </div>
  );
}
