import type { ReactNode } from "react";

type MastheadProps = {
  label: string;
  title: ReactNode;
  intro: string;
  children?: ReactNode;
};

export function StudioMasthead({ label, title, intro, children }: MastheadProps) {
  return (
    <header className="studio-masthead">
      <div>
        <p className="studio-kicker">{label}</p>
        <h1>{title}</h1>
      </div>
      <div className="studio-masthead__aside">
        <p>{intro}</p>
        {children}
      </div>
    </header>
  );
}
