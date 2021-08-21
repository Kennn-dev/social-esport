import React from "react";
import styled from "styled-components";
import * as colors from "../../constains/colors";
const Layout = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 0 1.5rem;
  background: ${colors.bgBlock1};
  color: ${colors.lightGray};
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
  }
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;
const MainText = styled.div`
  font-size: 1.075rem;
  font-weight: bold;
  display: none;
  &:hover {
    color: ${colors.white};
  }
  @media (min-width: 768px) {
    display: block;
  }
`;

export default function Avatar() {
  return (
    <Layout>
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
