import { ReactElement } from "react";

type Props = { onNewGame: () => void };

export default function NewGameButton({ onNewGame }: Props): ReactElement {
  return (
    <button
      onClick={onNewGame}
      className="ml-5 font-bold bg-lightGray text-darkBlue rounded-3xl py-2 px-4 text-body hover:bg-mediumBlue hover:text-white transition duration-500"
    >
      New Game
    </button>
  );
}
