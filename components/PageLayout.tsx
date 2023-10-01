import { ReactNode } from "react";

type PageLayoutProps = {
  children: ReactNode;
  heading: string;
  nav?: ReactNode;
};

export const PageLayout = ({ children, heading, nav }: PageLayoutProps) => {
  return (
    <>
      <header className="container">
        <h1>{heading}</h1>
      </header>
      {nav && <nav className="container">{nav}</nav>}
      <main className="container">{children}</main>
      <footer className="container">Copywright Amal 2023</footer>
    </>
  );
};
