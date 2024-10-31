import { ReactElement } from "react";

interface Props {
  selectTheme: string;
  onSelectTheme: (theme: string) => void;
  numberPlayers: number;
  onSetNumberPlayers: (players: number) => void;
  gridSize: number;
  onGridSize: (grids: number) => void;
  onStartGame: (start: boolean) => void;
}

export default function StartScreenSettings({
  selectTheme,
  onSelectTheme,
  numberPlayers,
  onSetNumberPlayers,
  gridSize,
  onGridSize,
  onStartGame,
}: Props): ReactElement {
  return (
    <article className="bg-white flex-col rounded-xl p-6 lg:p-14 w-11/12 lg:w-6/12 font-bold mt-10">
      <section>
        <p className="text-blueGray font-bold lg:text-body mb-4">
          Select Theme
        </p>
        <div className="grid grid-cols-2 gap-2 lg:gap-8 mt-2 text-body lg:text-h3">
          <p
            onClick={() => onSelectTheme("numbers")}
            className={`text-center text-white cursor-pointer rounded-3xl p-2 transition duration-500 ${
              selectTheme === "numbers"
                ? "bg-darkBlue"
                : "bg-secondary hover:bg-mediumBlue"
            }`}
          >
            Numbers
          </p>
          <p
            onClick={() => onSelectTheme("icons")}
            className={`text-center text-white cursor-pointer rounded-3xl p-2 transition duration-500 ${
              selectTheme === "icons"
                ? "bg-darkBlue"
                : "bg-secondary hover:bg-mediumBlue"
            }`}
          >
            Icons
          </p>
        </div>
      </section>
      <section className="mt-3 lg:mt-6">
        <p className="text-blueGray font-bold lg:text-body mb-2 lg:mb-4">
          Number of Players
        </p>
        <div className="grid grid-cols-4 gap-2 lg:gap-8 mt-2 text-body lg:text-h3">
          <p
            onClick={() => onSetNumberPlayers(1)}
            className={`text-center text-white cursor-pointer rounded-3xl p-2 transition duration-500 ${
              numberPlayers === 1
                ? "bg-darkBlue"
                : "bg-secondary hover:bg-mediumBlue"
            }`}
          >
            1
          </p>
          <p
            onClick={() => onSetNumberPlayers(2)}
            className={`text-center text-white cursor-pointer rounded-3xl p-2 transition duration-500 ${
              numberPlayers === 2
                ? "bg-darkBlue"
                : "bg-secondary hover:bg-mediumBlue"
            }`}
          >
            2
          </p>
          <p
            onClick={() => onSetNumberPlayers(3)}
            className={`text-center text-white cursor-pointer rounded-3xl p-2 transition duration-500 ${
              numberPlayers === 3
                ? "bg-darkBlue"
                : "bg-secondary hover:bg-mediumBlue"
            }`}
          >
            3
          </p>
          <p
            onClick={() => onSetNumberPlayers(4)}
            className={`text-center text-white cursor-pointer rounded-3xl p-2 transition duration-500 ${
              numberPlayers === 4
                ? "bg-darkBlue"
                : "bg-secondary hover:bg-mediumBlue"
            }`}
          >
            4
          </p>
        </div>
      </section>
      <section className="mt-3 mb-5 lg:mt-6 lg:mb-10">
        <p className="text-blueGray font-bold lg:text-body mb-4">Grid Size</p>
        <div className="grid grid-cols-2 gap-2 lg:gap-8 mt-2 text-body lg:text-h3">
          <p
            onClick={() => onGridSize(4)}
            className={`text-center  text-white cursor-pointer rounded-3xl p-2 transition duration-500 ${
              gridSize === 4
                ? "bg-darkBlue"
                : "bg-secondary hover:bg-mediumBlue "
            }`}
          >
            4x4
          </p>
          <p
            onClick={() => onGridSize(6)}
            className={`text-center  text-white cursor-pointer rounded-3xl p-2 transition duration-500 ${
              gridSize === 6
                ? "bg-darkBlue"
                : "bg-secondary hover:bg-mediumBlue "
            }`}
          >
            6x6
          </p>
        </div>
      </section>
      <section className="mt-3 lg:mt-6">
        <p
          onClick={() => onStartGame(true)}
          className="w-full rounded-3xl bg-primary text-white text-center font-bold cursor-pointer p-2 lg:p-3 text-h3 lg:text-h2 hover:bg-lightOrange"
        >
          Start Game
        </p>
      </section>
    </article>
  );
}
