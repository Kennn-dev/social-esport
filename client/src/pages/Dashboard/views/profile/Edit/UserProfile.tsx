import { useMutation } from "@apollo/client";
import { Maybe } from "graphql/jsutils/Maybe";
import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Button, Input, Skeleton } from "src/components";
import AvatarThumb from "src/components/Avatar/AvatarThumb";
import COLORS from "src/constains/colors";
import { UPDATE_COMMON_PROFILE } from "src/graphql/mutations/user";
import {
  ResponseUserDto,
  StatusResponseDto,
  UpdateUserInputDto,
} from "src/graphql/types/graphql";
import useFileUpload from "src/hooks/useFileUpload";
import { useAppStore } from "src/store";
import { pick } from "src/utils";
import {
  Wrapper,
  Title,
  GroupAvatar,
  GroupWrapper,
  GroupWrapperForm,
  SubText,
  Flex,
  Background,
} from "./layouts/index";

type Props = {
  user: ResponseUserDto | undefined;
  loading: boolean;
};

export default function UserProfile(props: Props) {
  const { loading, user } = props;
  const updateUser = useAppStore((s) => s.updateUser);
  // console.log({ loading, user });
  const {
    loading: avatarLoading,
    data: avatarData,
    upload: avatarUpload,
    destroy: avatarDestroy,
  } = useFileUpload();
  const {
    loading: bgLoading,
    data: bgData,
    upload: bgUpload,
    destroy: bgDestroy,
  } = useFileUpload();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<ResponseUserDto>({
    defaultValues: user,
  });

  const [update, { loading: updateLoading }] = useMutation<
    { updateUser: StatusResponseDto },
    { updateUserId: Maybe<string> | undefined; inputUpdate: UpdateUserInputDto }
  >(UPDATE_COMMON_PROFILE, {
    onCompleted: (d) => {
      toast.success(d.updateUser.message);
    },
  });

  const uploadAvatarRef = useRef<HTMLInputElement>(null);
  const uploadBackgroundRef = useRef<HTMLInputElement>(null);
  // const user = useAppStore((s) => s.auth.user);
  const onSubmit = (data: ResponseUserDto) => {
    console.log(getValues());
    const payload = pick(data, [
      "firstName",
      "lastName",
      "address",
      "avatar",
      "backgroundImage",
      "email",
      "phoneNumber",
    ]);
    update({
      variables: {
        inputUpdate: payload,
        updateUserId: user?._id,
      },

      onCompleted() {
        updateUser(payload);
      },
    });
  };
  const handleUploadAvatar = () => {
    uploadAvatarRef.current?.click();
  };

  const handleUploadBackground = () => {
    uploadBackgroundRef.current?.click();
  };

  const handleOnchangeUploadAvatar = (e: any) => {
    console.log(e.target.files[0]);
    avatarUpload(e.target.files[0]);
  };

  const handleOnchangeUploadBackground = (e: any) => {
    console.log(e.target.files[0]);
    bgUpload(e.target.files[0]);
  };

  const handleRemoveAvatar = () => {
    setValue("avatar", "");
    avatarDestroy();
  };

  const handleReset = (e: any) => {
    e.preventDefault();
    avatarDestroy();
    bgDestroy();
    reset();
  };

  useEffect(() => {
    if (avatarData?.url) {
      setValue("avatar", avatarData.url);
    }

    if (bgData?.url) {
      setValue("backgroundImage", bgData.url);
    }
  }, [avatarData?.url, bgData?.url]);

  useEffect(() => {
    reset(user);
  }, [user]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Wrapper>
        <Title>Avatar</Title>
        <GroupWrapper>
          <GroupAvatar>
            <div className="avatar">
              <AvatarThumb
                onClick={handleUploadAvatar}
                loading={loading || avatarLoading}
                height={140}
                width={140}
                user={getValues("avatar")}
              />
            </div>
            <div className="btn-edit">
              <Button color="primary" onClick={handleRemoveAvatar}>
                Remove Avatar
              </Button>
              <input
                ref={uploadAvatarRef}
                onChange={handleOnchangeUploadAvatar}
                type="file"
              />
            </div>
            <SubText>Must be JPEG, PNG, or GIF and cannot exceed 10MB.</SubText>
          </GroupAvatar>
        </GroupWrapper>
        <GroupWrapper>
          <Title>Background Cover</Title>
          <SubText>
            File format: JPEG, PNG, GIF (recommended 1200x480, max 10MB)
          </SubText>
          {loading || bgLoading ? (
            <div style={{ width: "100%" }}>
              <Skeleton height={150} />
            </div>
          ) : (
            <Background
              onClick={handleUploadBackground}
              // src={`https://images.unsplash.com/photo-1633907284646-7abf4a195875?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=464&q=80`}
              src={getValues("backgroundImage")}
            />
          )}

          <input
            style={{ display: "none" }}
            ref={uploadBackgroundRef}
            type="file"
            onChange={handleOnchangeUploadBackground}
          />
        </GroupWrapper>
        <GroupWrapperForm>
          <Flex>
            <div className="">
              <Title>First name</Title>{" "}
              <Input
                error={errors.firstName?.message}
                registerProps={register("firstName", {
                  required: "Field is required !",
                })}
                style={{ width: "100%" }}
              />
            </div>
            <div className="">
              <Title>Last name</Title>{" "}
              <Input
                error={errors.lastName?.message}
                registerProps={register("lastName", {
                  required: "Field is required !",
                })}
                style={{ width: "100%" }}
              />
            </div>
          </Flex>
          <Flex>
            <div>
              <Title>Email</Title>
              <Input
                error={errors.email?.message}
                registerProps={register("email", {
                  required: "Field is required !",
                })}
                type="email"
                style={{ width: "100%" }}
              />
            </div>

            <div>
              <Title>Phone Number</Title>
              <Input
                error={errors.phoneNumber?.message}
                registerProps={register("phoneNumber")}
                type="number"
                style={{ width: "100%" }}
              />
            </div>
          </Flex>

          <Title>Address</Title>
          <Input
            registerProps={register("address")}
            error={errors.address?.message}
            style={{ width: "100%" }}
          />
        </GroupWrapperForm>

        <Flex>
          <div
            className="flex-none"
            style={{ maxWidth: "100px", alignSelf: "center" }}
          >
            <Button loading={updateLoading} htmlType="submit" color="primary">
              Save
            </Button>
          </div>
          <div
            className="flex-none"
            style={{ maxWidth: "100px", alignSelf: "center" }}
          >
            <Button
              loading={updateLoading}
              onClick={handleReset}
              color="no-style"
            >
              Reset
            </Button>
          </div>
        </Flex>
      </Wrapper>
    </form>
  );
}
