import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
  heading: string;
  nav?: ReactNode;
};

export const Layout = ({ children, heading, nav }: LayoutProps) => {
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
