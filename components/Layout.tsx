import { simpleclassName } from "@/constants";
import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
  heading: string;
  nav?: ReactNode;
};

export const Layout = ({ children, heading, nav }: LayoutProps) => {
  return (
    <>
      <header className={simpleclassName}>
        <h1>{heading}</h1>
      </header>
      {nav && <nav className={simpleclassName}>{nav}</nav>}
      <main className={simpleclassName}>{children}</main>
      <footer className={simpleclassName}>Copywright Amal 2023</footer>
    </>
  );
};
