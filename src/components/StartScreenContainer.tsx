import { ReactElement, ReactNode } from "react";

type Props = { children: ReactNode };

export default function StartScreenContainer({
  children,
}: Props): ReactElement {
  return (
    <section className="flex flex-col justify-center items-center h-full bg-navy">
      {children}
    </section>
  );
}
