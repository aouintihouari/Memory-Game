import { ReactElement } from "react";

interface Props {
  onRestart: () => void;
  onNewGame: () => void;
  seconds: number;
  moves: number;
}

export default function SinglePlayerResults({
  onRestart,
  onNewGame,
  seconds,
  moves,
}: Props): ReactElement {
  function formatTime(totalSeconds: number): string {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = Math.floor(totalSeconds % 60);
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  }

  return (
    <section className="flex flex-col justify-center items-center w-full h-full fixed top-0 left-0">
      <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
      <article className="relative z-10 flex flex-col w-10/12 sm:w-6/12 p-8 bg-white rounded-xl font-bold">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-h3 sm:text-h1 font-bold text-navy">
            You did it!
          </h2>
          <p className="text-blueGray sm:text-body mt-5">
            Game over! Here’s how you got on…
          </p>
        </div>
        <div className="w-12/12 sm:w-10/12 sm:mx-auto my-5 sm:my-10">
          <p className="flex justify-between items-center bg-lightGray mb-5 p-4 rounded-xl">
            <span className="text-[13px] sm:text-[18px] text-blueGray">
              Time Elapsed
            </span>{" "}
            <span className="text-[20px] sm:text-h2 text-darkBlue">
              {formatTime(seconds)}
            </span>
          </p>
          <p className="flex justify-between items-center bg-lightGray p-4 rounded-xl">
            <span className="text-[13px] sm:text-[18px] text-blueGray">
              Moves Taken
            </span>{" "}
            <span className="text-[20px] sm:text-h2 text-darkBlue">
              {moves} Moves
            </span>
          </p>
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
