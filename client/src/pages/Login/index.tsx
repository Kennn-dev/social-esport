import React from "react";
import {
  LoginLayout,
  Input,
  Button,
  FacebookIcon,
  GoogleColoredIcon,
} from "../../components/index";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as colors from "../../constains/colors";
export const FormLoginWrapper = styled.div`
  height: fit-content;
  width: 50%;
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;

  margin: auto;
  padding: 2rem 2rem;
  /* border: 1px solid ${colors.white}; */
  h4 {
    font-size: 2rem;
    font-weight: bold;
  }
  .login--form {
    display: flex;
    flex-direction: column;
    row-gap: 1.25rem;

    .login--field {
      .label {
        color: ${colors.lightGray};
        font-weight: bold;
        margin-bottom: 0.75rem;
      }
    }

    .login--form--checkbox {
      span {
        margin-left: 0.5rem;
        color: ${colors.gray};
      }
    }
  }
  .login--line {
    span {
      display: flex;
      align-items: center;
      column-gap: 1rem;
      color: ${colors.gray};
      &:after,
      &:before {
        content: "";
        display: block;
        width: 50%;
        background: ${colors.bgBlock6};
        height: 1px;
      }
    }
  }
  .login--social {
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 1.5rem;
    svg {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
  .login--links {
    display: flex;
    flex-direction: column;
    span {
      display: block;
      color: ${colors.gray};
    }
    a {
      margin-top: 5px;
      color: ${colors.gray};
    }
  }
`;

const Login: React.FC<{}> = () => {
  return (
    <LoginLayout>
      <FormLoginWrapper>
        <h4>Login</h4>
        <div className="login--form">
          <div className="login--field">
            <div className="label">Username</div>
            <Input />
          </div>
          <div className="login--field">
            <div className="label">Password</div>
            <Input type="password" />
          </div>
          <label className="login--form--checkbox">
            <input type="checkbox" />
            <span className=""> Remember my password</span>
          </label>
          <Button size="lg" color={"primary"}>
            <Link to="/">Login</Link>
          </Button>
        </div>
        <div className="login--line">
          <span className="login--line--text">or</span>
        </div>
        <div className="login--social">
          <Button color="secondary" icon={<GoogleColoredIcon />}>
            Google
          </Button>
          <Button color="secondary" icon={<FacebookIcon color="#4267B2" />}>
            Facebook
          </Button>
        </div>
        <div className="login--links">
          <span>
            Dont have your account ?{" "}
            <Link to="/register" className="bold">
              Register
            </Link>{" "}
          </span>
          <Link to="/forgot-password">Forgot your password ?</Link>
        </div>
      </FormLoginWrapper>
    </LoginLayout>
  );
};
export default Login;
