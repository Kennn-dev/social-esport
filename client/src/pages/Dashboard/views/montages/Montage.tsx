import React from "react";
import styled from "styled-components";
import * as colors from "../../../../constains/colors";
import {
  Button,
  Input,
  SearchIcon,
  CustomSelect,
  VideoCard,
} from "../../../../components/index";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export default function Montages() {
  return (
    <MontageLayout>
      <div className="header--text">Montage</div>
      <div className="montage--actions">
        <Button color="primary">For you</Button>
        <Button>Following</Button>
        <Button>Categories</Button>
        <Button>Liked</Button>
      </div>
      <div className="montage--actions">
        <Input
          icon={<SearchIcon color={colors.gray} />}
          placeholder="Search by categories "
        />
        <CustomSelect options={options} />
      </div>
      <TitleExpand title="Trending">
        <div className="montage--group">
          {[...Array(8).keys()].map((i) => (
            <VideoCard
              key={i}
              title="Video Card Title"
              author={"Ken"}
              src={`https://source.unsplash.com/random?sig=88${i}`}
              tags={["Category 1", "Category 2"]}
            />
          ))}
        </div>
      </TitleExpand>
      <TitleExpand title="Most view">
        <div className="montage--group">
          {[...Array(8).keys()].map((i) => (
            <VideoCard
              key={i}
              title="Video Card Title"
              author={"Ken"}
              src={`https://source.unsplash.com/random?sig=88${i}`}
              tags={["Category 1", "Category 2"]}
            />
          ))}
        </div>
      </TitleExpand>
    </MontageLayout>
  );
}

export const MontageLayout = styled.div`
  padding: 2rem;
  color: ${({ theme }) => theme.white};
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  .header--text {
    font-size: 2rem;
    font-weight: bold;
    color: ${({ theme }) => theme.white};
  }

  .montage--actions {
    width: 100%;
    padding: 10px;
    display: flex;
    align-items: center;
    gap: 2rem;

    button {
      width: fit-content;
    }
  }
  .montage--group {
    gap: 1.5rem;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

const TitleExpand = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  const Wrapper = styled.div`
    padding: 20px 0;
    width: 100%;

    .title--header {
      width: 100%;
      color: ${({ theme }) => theme.white};
      font-weight: bold;
      padding: 20px 0;
      font-size: 1.5rem;
    }
    .title--content {
      margin: 1rem 0;
    }
    .title--viewmore {
      width: fit-content;
      display: flex;
      cursor: pointer;

      margin: 2rem auto 0 auto;
      color: ${({ theme }) => theme.primary};
      font-weight: bold;
      padding: 0.75rem 1.5rem;
      border-radius: 8px;
      &:hover {
        background-color: ${({ theme }) => theme.bgBlock2};
      }
    }
  `;
  return (
    <Wrapper>
      <div className="title--header">{title}</div>
      <div className="title--content">{children}</div>
      <span className="title--viewmore">View more</span>
    </Wrapper>
  );
};
