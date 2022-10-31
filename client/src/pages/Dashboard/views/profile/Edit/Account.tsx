import React from "react";
import { Button, Input } from "src/components";
import { Wrapper, Title, GroupWrapperForm } from "./layouts/index";

export default function Account() {
  return (
    <form autoComplete="off" action="">
      <Wrapper>
        <GroupWrapperForm>
          <Title>Old password</Title>
          <Input type="password" minLength={8} style={{ width: "100%" }} />

          <Title>New password</Title>
          <Input type="password" minLength={8} style={{ width: "100%" }} />

          <Title>Confirm password</Title>
          <Input type="password" minLength={8} style={{ width: "100%" }} />
        </GroupWrapperForm>

        <div className="save">
          <Button htmlType={"submit"} color="primary">
            Save
          </Button>
        </div>
      </Wrapper>
    </form>
  );
}
