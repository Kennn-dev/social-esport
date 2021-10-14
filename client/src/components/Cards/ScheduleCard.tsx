import React from "react";
import styled from "styled-components";
const ScheduleCard = () => {
  return (
    <ScheduleCardWrapper>
      <div className="time">
        <div className="time--day">17</div>
        <div className="time--month">Aug 2020</div>
      </div>
      <div className="main">
        <div className="main--team reverse">
          <img
            src={`https://am-a.akamaihd.net/image?resize=70:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1631820065346_cloud9-2021-worlds.png`}
            className="main--team--logo"
            alt=""
            width="100%"
            height="auto"
          />
          <div className="main--team--text">
            <div className="main--team--text--title">
              <div className="dot red"></div> Cloud 9
            </div>
            <div className="main--team--text--meta">3W - 0L</div>
          </div>
        </div>
        <div className="main--middle-text">VS</div>
        <div className="main--team">
          <img
            src={`https://am-a.akamaihd.net/image?resize=70:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1631820065346_cloud9-2021-worlds.png`}
            className="main--team--logo"
            alt=""
            width="100%"
            height="auto"
          />
          <div className="main--team--text reverse">
            <div className="main--team--text--title">
              Cloud 9<div className="dot green"></div>
            </div>
            <div className="main--team--text--meta">3W - 0L</div>
          </div>
        </div>
      </div>
      <div className="league--name">
        <div>WORLDS</div>{" "}
        <div className="league--name--group">Play In Groups</div>
      </div>
    </ScheduleCardWrapper>
  );
};
export default ScheduleCard;

const ScheduleCardWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  background-color: ${({ theme }) => theme.bgBlock1};
  border-radius: 15px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    background-color: ${({ theme }) => theme.bgBlock2};
  }
  cursor: default;
  .dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
  }
  .red {
    background-color: red;
  }
  .green {
    background-color: green;
  }
  .time {
    width: 100px;
    flex-shrink: 0;
    color: ${({ theme }) => theme.lightGray};
    &--day {
      font-size: 2rem;
      font-weight: bold;

      text-decoration: uppercase;

      color: ${({ theme }) => theme.white};
    }
  }
  .reverse {
    flex-direction: row-reverse;

    text-align: left !important;
  }
  .main {
    display: flex;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
    gap: 0 20px;
    &--team {
      display: flex;
      align-items: center;
      gap: 0 10px;
      &--logo {
        /* height : 70px; */
        width: 70px;
      }
      &--text {
        text-align: right;

        &--title {
          display: flex;
          gap: 0 10px;
          font-size: 1.25rem;
          font-weight: bold;
          color: ${({ theme }) => theme.white};
          &:hover {
            color: ${({ theme }) => theme.primary};
          }
        }
        &--meta {
          margin-top: 5px;
        }
      }
      &--tag {
      }
    }
    &--middle-text {
      font-weight: 500;
      color: ${({ theme }) => theme.gray};
    }
  }

  .league--name {
    text-transform: uppercase;
    font-weight: 500;
    color: ${({ theme }) => theme.gray};
    text-align: right;
    flex-shrink: 0;
    width: 110px;
    &--group {
      margin-top: 5px;
    }
  }
`;
