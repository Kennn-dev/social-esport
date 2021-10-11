import React from "react";
import styled from "styled-components";
const Layout = styled.div<{ reverse: boolean }>`
  display: flex;
  flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
  gap: 1rem;
  align-items: center;
  background: transparent;
  color: ${({ theme }) => theme.lightGray};
`;
const Image = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  cursor: pointer;
`;
const Text = styled.div`
  cursor: pointer;
  span {
    font-size: 0.75rem;
    display: none;
  }
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
  @media (min-width: 1024px) {
    span {
      display: block;
    }
  }
`;
const MainText = styled.div`
  font-size: 1.075rem;
  font-weight: bold;
  display: none;
  &:hover {
    color: ${(props) => props.theme.white};
  }
  @media (min-width: 768px) {
    display: block;
  }
`;

interface AvatarProps {
  reverse?: boolean;
}

export default function Avatar({ reverse = false }: AvatarProps) {
  return (
    <Layout reverse={reverse}>
      <Text>
        <MainText>Lily Bailey</MainText>
        <span>3ks Followers</span>
      </Text>

      <Image
        alt="avatar"
        src="https://source.unsplash.com/random"
        width="100%"
        height="auto"
      />
    </Layout>
  );
}
