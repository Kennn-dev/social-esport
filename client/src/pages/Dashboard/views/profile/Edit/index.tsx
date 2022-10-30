import React, { useMemo } from "react";
import { Tabs } from "src/components";
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
  const handleChangeTab = (t: TabsItem) => {
    setTab(t);
  };

  const renderContent = useMemo(() => {
    switch (tab.value) {
      case "0":
        return <UserProfile />;
      case "1":
        return <Account />;
      default:
        return null;
    }
  }, [tab.value]);
  return (
    <EditLayout>
      <div className="header--text">Profile</div>
      <div className="montage--actions">
        <Tabs tabs={tabList} currentValue={tab} onChange={handleChangeTab} />
      </div>
      <div className="edit--content">
        <div className="edit--content--header">{tab.label}</div>
        <>{renderContent}</>
      </div>
    </EditLayout>
  );
}
