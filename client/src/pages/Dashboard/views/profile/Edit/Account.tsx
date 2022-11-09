import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Button, Input } from "src/components";
import { CHANGE_PASSWORD } from "src/graphql/mutations/auth";
import {
  ChangePasswordInputDto,
  StatusResponseDto,
} from "src/graphql/types/graphql";
import { Flex, GroupWrapperForm, Title, Wrapper } from "./layouts/index";

export default function Account() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const [changePassword, { loading }] = useMutation<
    { changePassword: StatusResponseDto },
    { input: ChangePasswordInputDto }
  >(CHANGE_PASSWORD, {
    onCompleted: (d) => {
      toast.success(d.changePassword.message);
    },
  });
  const watchPassword = watch("newPassword", "");
  const onSubmit = (values: any) => {
    console.log(values);
    changePassword({
      variables: {
        input: values,
      },
    });
  };
  const handleReset = () => {
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off" action="">
      <Wrapper>
        <GroupWrapperForm>
          <Title>Old password</Title>
          <Input
            registerProps={register("oldPassword", {
              required: "Field is required",
            })}
            type="password"
            minLength={8}
            style={{ width: "100%" }}
            error={errors.oldPassword?.message}
          />

          <Title>New password</Title>
          <Input
            registerProps={register("newPassword", {
              required: "Field is required",
            })}
            type="password"
            minLength={8}
            style={{ width: "100%" }}
            error={errors.newPassword?.message}
          />

          <Title>Confirm password</Title>
          <Input
            registerProps={register("confirmPassword", {
              required: "Password confirm is required",
              validate: (value) =>
                value === watchPassword || `2 Passwords not match ¯\\_(ツ)_/¯`,
            })}
            type="password"
            minLength={8}
            style={{ width: "100%" }}
            error={errors.confirmPassword?.message}
          />
        </GroupWrapperForm>

        <Flex>
          <div
            className="flex-none"
            style={{ maxWidth: "100px", alignSelf: "center" }}
          >
            <Button loading={loading} htmlType={"submit"} color="primary">
              Save
            </Button>
          </div>
          <div
            className="flex-none"
            style={{ maxWidth: "100px", alignSelf: "center" }}
          >
            <Button loading={loading} onClick={handleReset} color="no-style">
              Reset
            </Button>
          </div>
        </Flex>
      </Wrapper>
    </form>
  );
}
