import React from "react";
import styled from "styled-components";
// import * as colors from "../../../../constains/colors";
import {
  Button,
  ProfileCard,
  ScheduleCard,
} from "../../../../components/index";
import { MontageLayout } from "../montages/Montage";
import { useHistory, useRouteMatch } from "react-router-dom";
const Wrapper = styled(MontageLayout)`
  .discover--section {
    display: flex;
    flex-direction: column;
    gap: 30px 0;
    &--title {
      width: inherit;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-weight: bold;

      button {
        width: fit-content;
      }
    }
    &--content--profile {
      display: flex;
      column-gap: 30px;
      padding-bottom: 10px;
      margin-bottom: 30px;
      /* flex-wrap: wrap; */
      width: inherit;
      overflow-y: hidden;

      -webkit-overflow-scrolling: touch;
      scroll-behavior: smooth;
    }
    &--schedule {
      display: flex;
      flex-direction: column;
      gap: 10px 0;
    }
  }
`;

const Discover = () => {
  const history = useHistory();
  const { path } = useRouteMatch();
  return (
    <Wrapper>
      <h1 className="header--text">Discover</h1>
      <div className="discover--section">
        <div className="discover--section--title">
          <span>People</span>
          <Button
            onClick={() => history.push(`${path}/people`)}
            color="ghost"
            size="sm"
          >
            View more
          </Button>
        </div>
        <div className="discover--section--content--profile">
          {[...Array(8).keys()].map((i) => (
            <ProfileCard
              key={i}
              src={`https://source.unsplash.com/random?sig=88${i}`}
            />
          ))}
        </div>
      </div>
      <div className="discover--section">
        <div className="discover--section--title">
          <span>Esport Schedule</span>
        </div>
        <div className="discover--section--schedule">
          <ScheduleCard />
          <ScheduleCard />
          <ScheduleCard />
          <ScheduleCard />
        </div>
      </div>
    </Wrapper>
  );
};
export default Discover;
