import React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import { Grids } from ".";
import styled from "styled-components";
interface LayoutProps {
  rightContent: boolean;
  children: React.ReactNode;
}
const GridLayout = styled.div`
  display: flex;
  width: 100%;
`;
const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;

  .body {
    padding-top: 6rem;

    .sidebar {
      position: fixed;
      top: 0;
      bottom: 0;
      width: 20%;
      padding-top: 6rem;
    }

    .body--content {
      width: 100%;
      display: flex;
      padding-left: 20%;
    }
  }
`;

function Layout({ rightContent = true, children }: LayoutProps) {
  return (
    <LayoutWrapper>
      <Navbar />
      <div className="body">
        <GridLayout>
          <div className="sidebar">
            <Sidebar />
          </div>
          <div className="body--content">{children}</div>
        </GridLayout>
      </div>
    </LayoutWrapper>
  );
}
export default Layout;
