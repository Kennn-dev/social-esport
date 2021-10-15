import React from "react";
import styled from "styled-components";
import moment from "moment";
interface Team {
  code: string;
  image: string;
  name: string;
  record?: {
    wins: number;
    losses: number;
  };
  result?: {
    outcome?: "loss" | "win";
    gameWins: number;
  };
}
type State = "unstarted" | "completed" | "inProgress";
export interface Event {
  blockName: string;
  league: {
    name: string;
    slug: string;
  };
  match: {
    id: string;
    teams: Team[];
  };
  startTime: string;
  state: State;
}
interface ScheduleCardProps {
  key?: string;
  event: Event;
  day?: string;
}
const renderTime = (time: string): React.ReactNode => {
  const vl = moment(time).hours();
  return (
    <>
      {vl > 12 ? vl - 12 : vl}
      <span style={{ fontSize: 14, marginLeft: 5 }}>
        {vl > 12 ? "pm" : "am"}
      </span>
    </>
  );
};

const ScheduleCard = ({ event, day, ...props }: ScheduleCardProps) => {
  // console.log(event, { record: event.match.teams[0].record });
  const renderScore = () => {
    let render = "VS";
    if (event.state === "completed") {
      render = `${event.match.teams[0].result?.gameWins} - ${event.match.teams[1].result?.gameWins}`;
    }
    return render;
  };
  return (
    <>
      <ScheduleCardWrapper state={event.state} {...props}>
        <div className="time">
          <div className="time--day">{renderTime(event.startTime)}</div>
        </div>
        <div className="main">
          <div
            className={`main--team reverse ${
              event.match.teams[0].result?.outcome === "loss" ? "losses" : ""
            }`}
          >
            <img
              src={event.match.teams[0].image}
              className="main--team--logo"
              alt=""
              width="100%"
              height="auto"
            />
            <div className="main--team--text">
              <div className="main--team--text--title">
                <div className="dot"></div>
                {event.match.teams[0].name}
              </div>
              <div className="main--team--text--meta">
                {!!event.match.teams[0].record
                  ? `${event.match.teams[0].record.wins}W - ${event.match.teams[0].record.losses}L`
                  : ""}
              </div>
            </div>
          </div>
          <div className="main--middle-text">
            {event.state === "inProgress" && <div className="live">LIVE</div>}
            {renderScore()}
          </div>
          <div
            className={`main--team ${
              event.match.teams[1].result?.outcome === "loss" ? "losses" : ""
            }`}
          >
            <img
              src={event.match.teams[1].image}
              className="main--team--logo"
              alt=""
              width="100%"
              height="auto"
            />
            <div className="main--team--text reverse">
              <div className="main--team--text--title">
                {event.match.teams[1].name}
                <div className="dot"></div>
              </div>
              <div className="main--team--text--meta">
                {!!event.match.teams[1].record
                  ? `${event.match.teams[1].record.wins}W - ${event.match.teams[1].record.losses}L`
                  : ""}
              </div>
            </div>
          </div>
        </div>
        <div className="league--name">
          <div>{event.league.name}</div>{" "}
          <div className="league--name--group">{event.blockName}</div>
        </div>
      </ScheduleCardWrapper>
    </>
  );
};
export default ScheduleCard;

const ScheduleCardWrapper = styled.div<any>`
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  background-color: ${({ theme }) => theme.bgBlock1};
  border-radius: 15px;
  border: ${(p) => (p.state === "inProgress" ? `2px solid #E83A30` : "")};

  display: flex;
  align-items: center;
  justify-content: space-between;
  .live {
    color: ${(p) => p.theme.white};

    text-transform: uppercase;
    &:before {
      content: "";
      display: inline-block;
      margin: 0 5px 0 0;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: #e83a30;
    }
  }
  .losses {
    opacity: 0.4;
  }
  &:hover {
    background-color: ${({ theme }) => theme.bgBlock2};
  }
  cursor: default;
  .dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
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
    display: grid;
    grid-template-columns: repeat(7, minmax(0, 1fr));

    flex-grow: 1;
    justify-content: center;
    align-items: center;
    /* gap: 0 20px; */
    &--team {
      grid-column: span 3 / span 3;
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
        }
        &--meta {
          margin-top: 5px;
        }
      }
      &--tag {
      }
    }
    &--middle-text {
      grid-column: span 1 / span 1;
      text-align: center;
      font-weight: bold;
      color: ${({ theme }) => theme.primary};
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
