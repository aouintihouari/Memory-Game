import { ReactElement } from "react";

interface Props {
  gridSize: number;
  message: string;
  moves: number;
}

export default function MoveCounter({
  gridSize,
  message,
  moves,
}: Props): ReactElement {
  const colspan = gridSize === 4 ? "col-span-2" : "colspan-3";

  return (
    <aside
      className={`p-2 mb-5 flex justify-between flex-col sm:flex-row items-center w-[151px] font-bold bg-lightGray rounded-xl sm:w-[255px] sm:h-[72px] ${colspan}`}
    >
      <div className="text-body text-blueGray">{message}</div>
      <div className="text-h2 text-darkBlue">{moves}</div>
    </aside>
  );
}
