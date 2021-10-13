import React from "react";
import styled from "styled-components";
// import * as colors from "../../../../constains/colors";
import { Button } from "../Buttons/index";

interface ICategoryCardWrapper {
  src: string;
}
interface ICategoryCard extends ICategoryCardWrapper {}

const CategoryCard = ({ src }: ICategoryCard) => {
  return (
    <Wrapper src={src}>
      <Body>
        <div className="category">
          <div className="category--heading">league of legends</div>
          <div className="category--sub">
            <strong>30</strong> Videos
          </div>
          <Button size="sm" color="primary">
            Follow
          </Button>
        </div>
      </Body>
    </Wrapper>
  );
};
export default CategoryCard;
const Wrapper = styled.div<ICategoryCardWrapper>`
  position: relative;
  width: 100%;
  max-width: 230px;
  height: 320px;

  overflow: hidden;
  border-radius: 15px;
  cursor: pointer;

  background-image: url(${({ src }) => src});
  background-position: 50% 20%;
  background-repeat: no-repeat;
  background-size: cover;
`;
const Body = styled.div`
  position: absolute;
  bottom: 0;
  width: inherit;

  background-color: ${({ theme }) => theme.bgBlock2};

  border-radius: 15px;
  cursor: default;
  .category {
    width: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px 0;
    &--heading {
      font-size: 1.25rem;
      font-weight: bold;
      text-transform: capitalize;
    }
    &--sub {
      color: ${({ theme }) => theme.lightGray};
    }
    button {
      margin-top: auto;
      width: fit-content;
    }
  }
`;
