import React, { ReactNode, useRef, useState } from "react";
import styled from "styled-components";
import useOnClickOutside from "../../hooks/useOnClickOutside";

type Props = {
  icon: ReactNode;
  children: ReactNode;
};

export default function IconWithTooltip(props: Props) {
  const { icon, children } = props;
  const ref = useRef(null);
  const [toggle, setToggle] = useState<boolean>(false);

  const handleClickOutside = () => {
    // Your custom logic here
    setToggle(false);
    console.log("clicked outside");
  };

  const handleClickInside = () => {
    // Your custom logic here

    setToggle(!toggle);
    console.log("clicked inside");
  };

  useOnClickOutside(ref, handleClickOutside);
  return (
    <Wrapper ref={ref} isDisplay={toggle}>
      <div className="icon" onClick={handleClickInside}>
        {icon}
      </div>
      <div className="children">{children}</div>
    </Wrapper>
  );
}

const Wrapper = styled.div<{ isDisplay: boolean }>`
  cursor: pointer;
  position: relative;
  transition: all 0.5s ease;
  .icon {
  }
  .children {
    position: absolute;
    left: 20px;
    bottom: 20px;
    display: ${(p) => (p.isDisplay ? "" : "none")};
  }
`;
