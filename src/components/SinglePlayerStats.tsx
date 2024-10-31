import { ReactElement, ReactNode } from "react";

type Props = { children: ReactNode };

export default function SinglePlayerStats({ children }: Props): ReactElement {
  return <section className="flex justify-center mb-10">{children}</section>;
}
