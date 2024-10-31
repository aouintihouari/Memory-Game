import { ReactElement } from "react";

interface Props {
  onRestart: () => void;
  onNewGame: () => void;
  players: Array<{ moves: number; pairs: number; playerNumber: number }>;
}

export default function MultiplayerPlayerResults({
  onRestart,
  onNewGame,
  players,
}: Props): ReactElement {
  const sortedPlayers = [...players].sort(
    (a, b) => b.pairs - a.pairs || a.moves - b.moves
  );

  const highestPairs = sortedPlayers[0].pairs;
  const topPlayers = sortedPlayers.filter(
    (player) => player.pairs === highestPairs
  );

  const isTie = topPlayers.length > 1;

  return (
    <section className="flex flex-col justify-center items-center w-full h-full fixed top-0 left-0">
      <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
      <article className="relative z-10 flex flex-col w-10/12 sm:w-6/12 p-8 bg-white rounded-xl font-bold">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-h3 sm:text-h1 font-bold text-navy">
            {isTie
              ? "It's a Tie!"
              : `Player ${topPlayers[0].playerNumber} Wins!`}
          </h2>
          <p className="text-blueGray sm:text-body mt-5">
            Game over! Here’s how you got on…
          </p>
        </div>
        <div className="w-12/12 sm:w-10/12 sm:mx-auto my-5 sm:my-10">
          {sortedPlayers.map((player) => {
            const isWinner = player.pairs === highestPairs;
            return (
              <p
                key={player.playerNumber}
                className={`flex justify-between items-center mb-5 p-4 rounded-xl ${
                  isWinner
                    ? "bg-navy text-[#fff]"
                    : "bg-lightGray text-darkBlue"
                }`}
              >
                <span className="text-[13px] sm:text-[18px]">
                  Player {player.playerNumber} {isWinner && "(winner!)"}
                </span>
                <span className="text-[20px] sm:text-h2">
                  {player.pairs} Pairs
                </span>
              </p>
            );
          })}
        </div>
        <div className="sm:mx-auto mb-5 sm:mb-10 flex flex-col w-12/12 sm:grid sm:grid-cols-2 sm:w-10/12">
          <button
            onClick={onRestart}
            className="font-bold bg-primary text-white rounded-3xl py-2 sm:py-4 px-4 text-body hover:bg-lightOrange transition duration-500 mb-5 sm:mb-0"
          >
            Restart
          </button>
          <button
            onClick={onNewGame}
            className="sm:ml-5 font-bold bg-lightGray text-darkBlue rounded-3xl py-2 sm:py-4 px-4 text-body hover:bg-mediumBlue hover:text-white transition duration-500"
          >
            Setup New Game
          </button>
        </div>
      </article>
    </section>
  );
}
