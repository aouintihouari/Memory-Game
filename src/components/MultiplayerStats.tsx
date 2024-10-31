import { ReactElement } from "react";

interface Props {
  currentPlayer: number;
  players: Array<{ moves: number; pairs: number; playerNumber: number }>;
}

export default function MultiplayerStats({
  currentPlayer,
  players,
}: Props): ReactElement {
  return (
    <footer className="flex max-w-12/12 justify-center gap-4 p-4 rounded-xl">
      {players.map((player, index) => (
        <div
          key={index}
          className=" max-w-full flex flex-col items-center min-w-[80px] sm:min-w-[120px] md:min-w-[150px]"
        >
          <div
            className={`relative flex flex-col sm:flex-row sm:justify-between items-center justify-center p-4 rounded-2xl shadow w-full max-w-[255px] -mt-10 ${
              currentPlayer === index ? "bg-primary" : "bg-lightGray"
            }`}
          >
            {currentPlayer === index && <div className="triangle-indicator" />}
            <span
              className={`block text-body sm:hidden ${
                currentPlayer === index ? "text-[#fff]" : "text-blueGray"
              }`}
            >
              P {index + 1}
            </span>
            <span
              className={`hidden sm:block text-body ${
                currentPlayer === index ? "text-[#fff]" : "text-blueGray"
              }`}
            >
              Player {player.playerNumber}
            </span>
            <span
              className={`font-semibold text-h2 ${
                currentPlayer === index ? "text-[#fff]" : "text-darkBlue"
              }`}
            >
              {player.moves}
            </span>
          </div>
          {currentPlayer === index && (
            <div className="text-navy text-[13px] text-center font-bold mt-2">
              CURRENT TURN
            </div>
          )}
        </div>
      ))}
    </footer>
  );
}
