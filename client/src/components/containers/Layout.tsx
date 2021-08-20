import React from "react";
import Navbar from "../Navbar/Navbar";

interface LayoutProps {
  children: React.ReactNode;
}
function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
export default Layout;
