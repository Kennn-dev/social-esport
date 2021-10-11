import React from "react";
import { Link } from "react-router-dom";
import { LoginLayout, Input, Button } from "../../components/index";
import styled from "styled-components";
import { FormLoginWrapper } from "../Login/index";
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
  return (
    <LoginLayout>
      <FormRegisterWrapper>
        <h4>Register</h4>
        <div className="login--form">
          <div className="login--field">
            <div className="login--field--row">
              <div>
                <div className="label">First name </div>
                <Input />
              </div>
              <div>
                <div className="label">Last name</div>
                <Input />
              </div>
            </div>
          </div>
          <div className="login--field">
            <div className="label">Email</div>
            <Input type="email" />
          </div>
          <div className="login--field">
            <div className="label">Password</div>
            <Input type="password" />
          </div>
          <div className="login--field">
            <div className="label">Confirm password</div>
            <Input type="password" />
          </div>
          <div>
            <Button size="lg" color={"primary"}>
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
    </LoginLayout>
  );
};
export default Register;
