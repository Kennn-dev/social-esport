import React, { ReactNode, useEffect, useRef, useState } from "react";
import COLORS from "src/constains/colors";
import useOnClickOutside from "src/hooks/useOnClickOutside";
import styled from "styled-components";

type Props = {
  children: any;
  content: ReactNode | (() => ReactNode);
  title?: ReactNode | (() => ReactNode);
};

const Content = styled.div<{ isOpen: boolean }>`
  position: absolute;
  right: 0px;
  min-width: 200px;
  padding: 30px 20px 30px 20px;
  border-radius: 20px;
  background-color: ${COLORS.bgBlock2};
  border: 2px solid ${COLORS.darkGray};

  transition: all 0.3s;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  transform: ${({ isOpen }) => (isOpen ? "translateY(0)" : "translateY(10px)")};
  &:hover {
    box-shadow: var(--common-shadow);
  }
`;
const Wrapper = styled.div<{ height: number }>`
  position: relative;
  transition: all 0.3s;
  ${Content} {
    top: ${({ height }) => Number(height || 0) + 25}px;

    & > .popover--title {
      color: ${COLORS.white};
      font-weight: bold;
      margin-bottom: 10px;
    }
  }
`;

export default function PopOver(props: Props) {
  const { children, title, content } = props;
  const [height, setHeight] = useState(0);
  const [isOpen, setOpen] = useState<boolean>(false);

  const ref = useRef<any>(null);
  const refModel = useRef<any>(null);
  const refButton = useRef<any>(null);

  const handleOpen = () => {
    setOpen((v) => !v);
  };

  const child = React.cloneElement<any>(children, {
    onClick: handleOpen,
    ref: refButton,
    style: {
      cursor: "pointer",
    },
  });

  const handleOutsideClick = (e: any) => {
    setOpen(false);
  };

  useOnClickOutside(ref, handleOutsideClick, "mousedown");
  useEffect(() => {
    const h = refModel?.current.offsetHeight;
    // console.log();

    setHeight(h);
  }, []);

  return (
    <Wrapper ref={ref} height={height}>
      <span ref={refModel}>{child}</span>

      <Content isOpen={isOpen}>
        {title && <div className="popover--title">{title}</div>}
        {content}
      </Content>
    </Wrapper>
  );
}
