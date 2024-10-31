import { ReactElement } from "react";

interface Props {
  onShowMenu: (value: boolean) => void;
  onRestart: () => void;
  onNewGame: () => void;
  onTimerActive: (value: boolean) => void;
}

export default function Menu({
  onShowMenu,
  onRestart,
  onNewGame,
  onTimerActive,
}: Props): ReactElement {
  function handleRestart() {
    onRestart();
    onShowMenu(false);
  }

  function handleNewGame() {
    onShowMenu(false);
    onNewGame();
  }

  function handleResume() {
    onTimerActive(true);
    onShowMenu(false);
  }

  return (
    <section className="flex flex-col justify-center items-center w-full h-full fixed top-0 left-0">
      <div className="absolute inset-0 bg-black opacity-40 z-0"></div>{" "}
      <article className="relative z-10 flex flex-col w-10/12 sm:w-6/12 p-8 bg-white rounded-xl font-bold">
        <div className="sm:mx-auto mb-5 sm:mb-10 flex flex-col w-12/12 sm:grid sm:grid-cols-2 sm:w-10/12">
          <button
            onClick={handleRestart}
            className="font-bold bg-primary text-white rounded-3xl py-2 sm:py-4 px-4 text-body hover:bg-lightOrange transition duration-500 mb-5 sm:mb-0"
          >
            Restart
          </button>
          <button
            onClick={handleNewGame}
            className="sm:ml-5 font-bold mb-5 bg-lightGray text-darkBlue rounded-3xl py-2 sm:py-4 px-4 text-body hover:bg-mediumBlue hover:text-white transition duration-500"
          >
            New Game
          </button>
          <button
            onClick={handleResume}
            className="sm:ml-5 font-bold bg-lightGray text-darkBlue rounded-3xl py-2 sm:py-4 px-4 text-body hover:bg-mediumBlue hover:text-white transition duration-500"
          >
            Resume Game
          </button>
        </div>
      </article>
    </section>
  );
}
