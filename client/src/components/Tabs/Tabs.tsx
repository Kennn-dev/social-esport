import React from "react";
import styled from "styled-components";
import { Button } from "../../components/index";
import { TabsItem } from "../../types/tabs";

interface TabsProps {
  tabs: TabsItem[];
  onChange?: (item: TabsItem) => void;
}
const Tabs: React.FC<TabsProps> = ({ tabs, onChange = () => {} }) => {
  const [active, setActive] = React.useState<TabsItem>(tabs[0]);

  onChange(active);

  return (
    <Wrapper>
      {tabs.map((tab: TabsItem, index: number) => (
        <Button
          onClick={() => setActive(tab)}
          color={active.value === tab.value ? "primary" : "default"}
          key={tab.value + index}
          size="sm"
        >
          {tab.label}
        </Button>
      ))}
    </Wrapper>
  );
};

export default Tabs;
const Wrapper = styled.div`
  display: flex;
  column-gap: 20px;
  align-items: center;

  button {
    width: fit-content;
  }
`;
