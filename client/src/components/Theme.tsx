import React, { ReactNode } from "react";
import styled, { ThemeProvider } from "styled-components";
import * as theme from "../constains/colors";
import svg from "src/assets/elipse-shape.png";

interface ThemeProps {
  children: ReactNode;
}
const Image = styled.div`
  background-image: url(${svg});
  position: absolute;
  background-repeat: no-repeat;
  background-position: right;
`;

const Theme: React.FC<ThemeProps> = ({ children }) => {
  // console.log(theme);
  return (
    <ThemeProvider theme={theme}>
      <Image />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
