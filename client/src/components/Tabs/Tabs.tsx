import React from "react";
import styled from "styled-components";
import { Button } from "../../components/index";
import { TabsItem } from "../../types/tabs";

interface TabsProps {
  tabs: TabsItem[];
  currentValue?: TabsItem;
  onChange?: (item: TabsItem) => void;
}
const Tabs: React.FC<TabsProps> = ({
  tabs,
  currentValue = tabs[0],
  onChange = () => {},
}) => {
  return (
    <Wrapper>
      {tabs.map((tab: TabsItem, index: number) => (
        <Button
          onClick={() => onChange(tab)}
          color={currentValue.value === tab.value ? "primary" : "default"}
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
