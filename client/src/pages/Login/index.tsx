import { ApolloError, useMutation } from "@apollo/client";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import Checkbox from "src/components/Inputs/Checkbox";
import StaticAlert from "src/components/Notifications/StaticAlert";
import { ALERT_TYPE } from "src/constains";
import COLORS from "src/constains/colors";
import { LOGIN } from "src/graphql/mutations/auth";
import styled from "styled-components";
import logo from "../../assets/social-esport-logo.png";
import {
  Button,
  FacebookIcon,
  GoogleColoredIcon,
  Input,
  LoginLayout,
} from "../../components/index";
import { ResponseLoginDto } from "src/graphql/types/graphql";
import { useAppStore } from "src/store";

export const FormLoginWrapper = styled.div`
  height: fit-content;
  width: 90%;
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
    column-gap: 20px;

    &--child {
      width: 50%;
    }
    svg {
      width: 25px;
      height: 25px;
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
  .logo--login--layout {
  }
  @media (min-width: 640px) {
    width: 70%;
  }

  @media (min-width: 768px) {
    /* font-size: 16px; */
    width: 50%;
    .logo--login--layout {
      display: none;
    }
  }

  @media (min-width: 1024px) {
    /* font-size: 16px; */
    width: 80%;
  }

  @media (min-width: 1280px) {
    width: 60%;
  }

  @media (min-width: 1536px) {
    width: 40%;
  }
`;

type LoginInput = {
  username: string;
  password: string;
};

const Login: React.FC<{}> = () => {
  const updateStore = useAppStore((state) => state.update);
  const history = useHistory();
  const [login, { loading, error }] = useMutation<
    { login: ResponseLoginDto },
    { input: TInputLoginDto }
  >(LOGIN);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginInput>();
  const onSubmit = (values: LoginInput) => {
    login({
      variables: {
        input: {
          email: values.username,
          password: values.password,
        },
      },
      onCompleted: (data) => {
        if (data.login.accessToken) {
          toast.success("Hoooray !!! Login success 🥰");
          updateStore(data.login);
          history.push("/dashboard");
        }
      },
    });
  };

  return (
    <LoginLayout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormLoginWrapper>
          <div className="logo--login--layout">
            <img src={logo} width="100%" height={"auto"} />
          </div>
          <h4>Login</h4>
          {error && (
            <StaticAlert type={ALERT_TYPE.ERR} content={error.message} />
          )}

          <div className="login--form">
            <div className="login--field">
              <div className="label">Username</div>
              <Input
                registerProps={register("username", {
                  required: "Username required",
                })}
                error={errors.username?.message}
              />
            </div>
            <div className="login--field">
              <div className="label">Password</div>
              <Input
                type="password"
                registerProps={register("password", {
                  required: "Password required",
                })}
                error={errors.password?.message}
              />
            </div>
            <label className="login--form--checkbox">
              <Checkbox>Remember my password</Checkbox>
            </label>

            <Button
              loading={loading}
              htmlType="submit"
              size="lg"
              color={"primary"}
            >
              Login
            </Button>
          </div>
          <div className="login--line">
            <span className="login--line--text">or</span>
          </div>
          <div className="login--social">
            <div className="login--social--child">
              <Button color="secondary" icon={<GoogleColoredIcon />}>
                Google
              </Button>
            </div>
            <div className="login--social--child">
              <Button color="secondary" icon={<FacebookIcon color="#4267B2" />}>
                Facebook
              </Button>
            </div>
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
