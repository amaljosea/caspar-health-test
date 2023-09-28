import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
  heading: string;
  nav?: ReactNode;
};

export const Layout = ({ children, heading, nav }: LayoutProps) => {
  return (
    <>
      <header className="font-black text-xl border-solid border-2 border-indigo-600 m-4">
        <h1>{heading}</h1>
      </header>
      {nav && <nav>{nav}</nav>}
      <main>{children}</main>
      <footer>copywright</footer>
    </>
  );
};
