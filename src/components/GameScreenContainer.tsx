import { ReactElement, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function GameScreenContainer({ children }: Props): ReactElement {
  return (
    <main className="flex flex-col sm:justify-center sm:items-center h-full bg-white">
      {children}
    </main>
  );
}
