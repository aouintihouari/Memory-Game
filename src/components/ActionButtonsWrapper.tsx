import { ReactElement, ReactNode } from "react";

interface Props {
  onTimerActive: (value: boolean) => void;
  onShowMenu: (value: boolean) => void;
  children: ReactNode;
}

export default function ActionButtonsWrapper({
  onTimerActive,
  onShowMenu,
  children,
}: Props): ReactElement {
  function handleShowMenu() {
    onTimerActive(false);
    onShowMenu(true);
  }

  return (
    <>
      <aside className="hidden sm:block">{children}</aside>
      <button
        onClick={handleShowMenu}
        className="block sm:hidden font-bold bg-primary text-white rounded-3xl mr-2 py-2 px-4 text-body hover:bg-lightOrange transition duration-500"
      >
        Menu
      </button>
    </>
  );
}
