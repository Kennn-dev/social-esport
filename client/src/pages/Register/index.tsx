import React from "react";
import { Link, useHistory } from "react-router-dom";
import { LoginLayout, Input, Button } from "../../components/index";
import styled from "styled-components";
import { FormLoginWrapper } from "../Login/index";
import logo from "../../assets/social-esport-logo.png";
import { useMutation } from "@apollo/client";
import { REGISTER } from "src/graphql/mutations/auth";
import { useForm } from "react-hook-form";
import StaticAlert from "src/components/Notifications/StaticAlert";
import { ALERT_TYPE } from "src/constains";
import { toast } from "react-toastify";
import {
  InputCreateUserDto,
  StatusResponseDto,
} from "src/graphql/types/graphql";
const FormRegisterWrapper = styled(FormLoginWrapper)`
  .login--field {
    &--row {
      display: flex;
      width: 100%;
      gap: 1rem;
    }
  }
`;
const Register: React.FC<{}> = ({}) => {
  const history = useHistory();
  const [doRegister, { loading, error }] = useMutation<
    { createUser: StatusResponseDto },
    { inputCreate: InputCreateUserDto }
  >(REGISTER, {
    onCompleted: (dataRes) => {
      toast.success(dataRes?.createUser?.message);
      history.push("/login");
    },
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<InputCreateUserDto>();
  const watchPassword = watch("password", "");

  const onSubmit = (values: InputCreateUserDto) => {
    doRegister({
      variables: {
        inputCreate: {
          email: values.email,
          firstName: values.firstName,
          lastName: values.lastName,
          password: values.password,
          passwordConfirm: values.passwordConfirm,
        },
      },
    });
  };

  return (
    <LoginLayout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormRegisterWrapper>
          <div className="logo--login--layout">
            <img src={logo} width="100%" height={"auto"} />
          </div>
          <h4>Register</h4>
          {error && (
            <StaticAlert type={ALERT_TYPE.ERR} content={error.message} />
          )}
          <div className="login--form">
            <div className="login--field">
              <div className="login--field--row">
                <div>
                  <div className="label">First name </div>
                  <Input
                    registerProps={register("firstName", {
                      required: "First name is required ",
                    })}
                    error={errors?.firstName?.message}
                  />
                </div>
                <div>
                  <div className="label">Last name</div>
                  <Input
                    registerProps={register("lastName", {
                      required: "Last name is required",
                    })}
                    error={errors?.lastName?.message}
                  />
                </div>
              </div>
            </div>
            <div className="login--field">
              <div className="label">Email</div>
              <Input
                type="email"
                registerProps={register("email", {
                  required: "Email is required",
                })}
                error={errors?.email?.message}
              />
            </div>
            <div className="login--field">
              <div className="label">Password</div>
              <Input
                registerProps={register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must have at least 8 characters",
                  },
                })}
                type="password"
                error={errors?.password?.message}
              />
            </div>
            <div className="login--field">
              <div className="label">Confirm password</div>
              <Input
                registerProps={register("passwordConfirm", {
                  required: "Password confirm is required",
                  validate: (value) =>
                    value === watchPassword ||
                    `2 Passwords not match ¯\\_(ツ)_/¯`,
                })}
                error={errors.passwordConfirm?.message}
                type="password"
              />
            </div>
            <div>
              <Button
                loading={loading}
                htmlType={"submit"}
                size="lg"
                color={"primary"}
              >
                Register
              </Button>
            </div>
          </div>
          <div className="login--links">
            <span>
              Already have account ?{" "}
              <Link to="/login" className="bold">
                Login
              </Link>{" "}
            </span>
          </div>
        </FormRegisterWrapper>
      </form>
    </LoginLayout>
  );
};
export default Register;
