import { useQuery } from "@apollo/client";
import React, { useMemo } from "react";
import { Tabs } from "src/components";
import { GET_USER_PROFILE } from "src/graphql/queries/user";
import { ResponseUserDto } from "src/graphql/types/graphql";
import { useAppStore } from "src/store";
import { TabsItem } from "src/types/tabs";
import styled from "styled-components";
import { MontageLayout } from "../../montages/Montage";
import Account from "./Account";
import UserProfile from "./UserProfile";

const tabList: TabsItem[] = [
  { value: "0", label: "User Profile" },
  { value: "1", label: "Account" },
];
const EditLayout = styled(MontageLayout)`
  .edit--content {
    display: flex;
    width: 60%;
    row-gap: 20px;
    flex-direction: column;

    &--header {
      font-size: 1.25rem;
      font-weight: bold;
    }
  }
`;
export default function Edit() {
  const [tab, setTab] = React.useState<TabsItem>(tabList[0]);
  const user = useAppStore((s) => s.auth.user);
  const { loading, error, data } = useQuery<
    { getUserById: ResponseUserDto },
    { getUserByIdId: ResponseUserDto["_id"] | undefined }
  >(GET_USER_PROFILE, {
    variables: {
      getUserByIdId: user?._id,
    },
  });

  const handleChangeTab = (t: TabsItem) => {
    setTab(t);
  };
  console.log(data?.getUserById);

  const renderContent = () => {
    switch (tab.value) {
      case "0":
        return <UserProfile user={data?.getUserById} loading={loading} />;
      case "1":
        return <Account />;
      default:
        return null;
    }
  };

  return (
    <EditLayout>
      <div className="header--text">Profile</div>
      <div className="montage--actions">
        <Tabs tabs={tabList} currentValue={tab} onChange={handleChangeTab} />
      </div>
      <div className="edit--content">
        <div className="edit--content--header">{tab.label}</div>
        <>{renderContent()}</>
      </div>
    </EditLayout>
  );
}
