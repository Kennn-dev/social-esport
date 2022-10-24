import { useMutation } from "@apollo/client";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Checkbox from "src/components/Inputs/Checkbox";
import COLORS from "src/constains/colors";
import { LOGIN } from "src/graphql/mutations/auth";
import styled from "styled-components";
import {
  Button,
  FacebookIcon,
  GoogleColoredIcon,
  Input,
  LoginLayout,
} from "../../components/index";

export const FormLoginWrapper = styled.div`
  height: fit-content;
  width: 50%;
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;

  margin: auto;
  padding: 2rem 2rem;
  /* border: 1px solid ${COLORS.white}; */
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
        color: ${COLORS.lightGray};
        font-weight: bold;
        margin-bottom: 0.75rem;
      }
    }

    .login--form--checkbox {
      span {
        margin-left: 0.5rem;
        color: ${COLORS.gray};
      }
    }
  }
  .login--line {
    span {
      display: flex;
      align-items: center;
      column-gap: 1rem;
      color: ${COLORS.gray};
      &:after,
      &:before {
        content: "";
        display: block;
        width: 50%;
        background: ${COLORS.bgBlock6};
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
      color: ${COLORS.gray};
    }
    a {
      margin-top: 5px;
      color: ${COLORS.gray};
    }
  }
`;

type LoginInput = {
  username: string;
  password: string;
};
const Login: React.FC<{}> = () => {
  const [login, { data, loading, error }] =
    useMutation<TResponseLoginDto>(LOGIN);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginInput>();
  const onSubmit = (values: LoginInput) => {
    console.log(values);
  };
  console.log(watch("username")); // watch input value by passing the name of it

  return (
    <LoginLayout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormLoginWrapper>
          <h4>Login</h4>
          <div className="login--form">
            <div className="login--field">
              <div className="label">Username</div>
              <Input
                registerProps={register("username", { required: true })}
                error={errors.username ? "Username required" : null}
              />
            </div>
            <div className="login--field">
              <div className="label">Password</div>
              <Input
                type="password"
                registerProps={register("password", { required: true })}
                error={errors.password ? "Password required" : null}
              />
            </div>
            <label className="login--form--checkbox">
              <Checkbox>Remember my password</Checkbox>
            </label>

            <Button htmlType="submit" size="lg" color={"primary"}>
              Login
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
      </form>
    </LoginLayout>
  );
};
export default Login;
