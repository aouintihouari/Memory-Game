import { ReactElement, ReactNode } from "react";

interface Props {
  children: ReactNode;
  gridSize: number;
  isSelected: boolean;
  isCorrect: boolean;
  onClick: () => void;
}

export default function Card({
  children,
  gridSize,
  isSelected,
  isCorrect,
  onClick,
}: Props): ReactElement {
  return (
    <div
      className={`${
        isCorrect ? "bg-primary" : isSelected ? "bg-lightGray" : "bg-darkBlue"
      } text-[#fff] rounded-full flex items-center justify-center font-bold cursor-pointer transition duration-500 ${
        gridSize === 4
          ? `text-[40px] w-[72px] h-[72px] sm:text-gameNumber4x4 sm:h-[118px] sm:w-[118px]`
          : `text-[24px] w-[48px] h-[48px] sm:text-gameNumber6x6 sm:h-[82px] sm:w-[82px]`
      }`}
      onClick={onClick}
    >
      {isSelected || isCorrect ? children : null}
    </div>
  );
}
