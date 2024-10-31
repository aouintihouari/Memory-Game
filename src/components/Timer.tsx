import { ReactElement } from "react";

interface Props {
  gridSize: number;
  seconds: number;
}

export default function Timer({ gridSize, seconds }: Props): ReactElement {
  function formatTime(totalSeconds: number): string {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = Math.floor(totalSeconds % 60);
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  }

  const colspan = gridSize === 4 ? "col-span-2" : "colspan-3";

  return (
    <aside
      className={`p-2 mb-5 -ml-6 mr-6 w-[151px] flex flex-col sm:flex-row justify-between items-center font-bold bg-lightGray rounded-xl sm:w-[255px] sm:h-[72px] ${colspan}`}
    >
      <div className="text-body text-blueGray">Time</div>
      <div className="text-h2 text-darkBlue">{formatTime(seconds)}</div>
    </aside>
  );
}
