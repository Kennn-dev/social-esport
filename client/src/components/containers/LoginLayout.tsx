import React from "react";
import styled from "styled-components";
import * as colors from "../../constains/colors";

import heroImg from "../../assets/hero-login.png";
import blackLogo from "../../assets/black-logo.svg";

interface LoginProps {
  children: React.ReactNode;
}
const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;

  .hero {
    position: relative;
    width: 40%;
    height: 100%;
    background-color: #ff6523;
    overflow-y: hidden;
    .hero--heading {
      position: absolute;
      top: 10%;
      left: 10%;

      z-index: 10;
      h1 {
        font-family: "Poppins", "ubuntu";
        font-size: 3rem;
        margin-top: 7rem;
        color: ${colors.bgBlock1};
        transform: translateY(-30%);
      }
      .hero--heading--logo {
        width: 20%;
        height: auto;
      }
    }
    .hero--img {
      position: absolute;
      height: auto;
      width: 100%;
      bottom: -10%;
      z-index: 1;
    }
  }
  .login--children {
    flex: 1;
    color: ${colors.white};
    margin: auto;
  }
`;

const LoginLayout: React.FC<LoginProps> = ({ children }) => {
  return (
    <Wrapper>
      <div className="hero">
        <div className="hero--heading">
          <img
            alt="logo"
            className="hero--heading--logo"
            src={blackLogo}
            width={"100%"}
            height="auto"
          />
          <h1>Connect esport to the world</h1>
        </div>
        <img
          alt="Hero"
          className="hero--img"
          src={heroImg}
          width={"100%"}
          height="auto"
        />
      </div>
      <div className="login--children">{children}</div>
    </Wrapper>
  );
};

export default LoginLayout;
