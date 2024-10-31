import { ReactElement, ReactNode } from "react";

type Props = { children: ReactNode };

export default function Header({ children }: Props): ReactElement {
  return (
    <header className="px-4 mt-5 mb-10 sm:mb-0 w-12/12 sm:px-0 sm:w-10/12 flex justify-between items-center">
      {children}
    </header>
  );
}
