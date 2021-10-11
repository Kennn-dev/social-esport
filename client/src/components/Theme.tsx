import React, { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import * as theme from "../constains/colors";

interface ThemeProps {
  children: ReactNode;
}
const Theme: React.FC<ThemeProps> = ({ children }) => {
  // console.log(theme);
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
