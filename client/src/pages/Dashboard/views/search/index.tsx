import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router";
// import * as colors from "../../../../constains/colors";
import {
  Button,
  Tabs,
  EyeIcon,
  MessageIcon,
  FireIcon,
  VideoCardHorizontal,
} from "../../../../components/index";
import { MontageLayout } from "../montages/Montage";
import { TabsItem } from "../../../../types/tabs";
// import { TabsItem } from "../../../../types/tabs";
const Wrapper = styled(MontageLayout)`
  .section {
    margin-top: 1.25rem;
    font-weight: 500;
    color: ${(p) => p.theme.lightGray};
    &--title {
      font-size: 1.25rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      button {
        width: fit-content;
      }
    }
    &--content {
      margin-top: 20px;
    }
  }

  .montage {
    display: flex;
    align-items: center;

    &--main-video {
      flex: 1;
      height: 70vh;
      padding: 15px;
    }
    &--list {
      flex-basis: 50%;
      display: flex;
      height: inherit;
      justify-content: space-around;
      flex-direction: column;
    }
  }
`;
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Search = () => {
  const query = useQuery();
  const tabs: TabsItem[] = [
    { value: "all", label: "All Results" },
    { value: "montages", label: "Montages" },
    { value: "people", label: "People" },
    { value: "post", label: "Post" },
  ];
  const handleChangeTabs = (vl: TabsItem) => {
    console.log(vl);
  };
  return (
    <Wrapper>
      <div className="header--text">Search for {query.get("query")} </div>
      <Tabs tabs={tabs} onChange={handleChangeTabs} />
      <div className="section">
        <div className="section--title">
          Montages
          <Button size="sm" color="ghost">
            View more
          </Button>
        </div>
        <div className="section--content montage">
          <div className="montage--main-video">
            <MainMontage
              image={`https://images.unsplash.com/photo-1633602610879-652e59b25522?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDUyfENEd3V3WEpBYkV3fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60`}
            >
              <div className="montage--main">
                <div className="montage--main--title">
                  [Reup] League of Legends Montage Best Highlights 2021
                </div>
                <div className="montage--main--meta">
                  <div className="montage--main--meta--author">
                    <div className="montage--main--meta--author--avatar"></div>
                    <div className="montage--main--meta--author--name">
                      John Doe
                    </div>
                  </div>
                  <div className="montage--main--meta--count">
                    <div className="item">
                      130k <EyeIcon />
                    </div>
                    <div className="item">
                      200 <FireIcon />
                    </div>
                    <div className="item">
                      60 <MessageIcon />
                    </div>
                  </div>
                </div>
              </div>
            </MainMontage>
          </div>
          <div className="montage--list">
            {[...Array(3).keys()].map((i) => (
              <VideoCardHorizontal
                key={i}
                count={{ like: 10, comments: 20, views: 300 }}
                title="[Reup] League of Legends Montage Best Highlights 2021"
                src={`https://source.unsplash.com/random?sig=3${i}`}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="section">
        <div className="section--title">People</div>
        <div className="section--content people"></div>
      </div>
    </Wrapper>
  );
};

export default Search;
const MainMontage = styled.div<{ image: string }>`
  cursor: pointer;
  background-image: linear-gradient(
      1.16deg,
      rgba(0, 0, 0, 0.7) 1.06%,
      rgba(0, 0, 0, 0.7) 1.07%,
      rgba(0, 0, 0, 0) 57.65%
    ),
    url(${(p) => p.image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  width: 100%;
  height: 100%;
  min-height: 300px;
  border-radius: 15px;

  position: relative;
  transition: background-image 1s ease;
  &:hover {
    background-image: linear-gradient(
        1.16deg,
        rgba(0, 0, 0, 0.9) 1.06%,
        rgba(0, 0, 0, 0.9) 1.07%,
        rgba(0, 0, 0, 0) 57.65%
      ),
      url(${(p) => p.image});
  }
  .montage--main {
    position: absolute;
    bottom: 0;
    left: 0;

    padding: 20px;
    &--title {
      color: ${(p) => p.theme.white};
      font-size: 1.75rem;
      font-weight: bold;
    }
    &--meta {
      margin-top: 10px;
      display: flex;
      justify-content: space-between;
      &--author {
        display: flex;
        gap: 0 10px;
        align-items: center;
        &--avatar {
          width: 40px;
          height: 40px;
          flex-shrink: 0;
          border-radius: 50%;
          overflow: hidden;

          background-image: url(${(p) => p.image});
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        }
      }
      &--count {
        display: flex;
        gap: 0 20px;

        align-items: center;
        .item {
          font-weight: 300;
          display: flex;
          gap: 0 6px;
          align-items: center;
        }
      }
    }
  }
`;
