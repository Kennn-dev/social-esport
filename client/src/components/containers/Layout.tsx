import React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import { Grids } from ".";
import styled from "styled-components";
interface LayoutProps {
  col: 1 | 2 | 3;
  children: React.ReactNode;
}
const GridLayout = styled(Grids)`
  align-items: start;
  gap: 0.5rem;
  padding: 0;
  height: 100%;
`;

function Layout({ col, children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <GridLayout col={col}>
        <Sidebar />
        {children}
        <div>Sidebar</div>
      </GridLayout>
    </>
  );
}
export default Layout;
