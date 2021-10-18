import { AxiosRequestConfig, AxiosResponse } from "axios";

import moment from "moment";
import React from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import styled from "styled-components";
import useSWR from "swr";
import { TLeagueCard } from "../../../../components/Cards/LeagueCard";
import { Event } from "../../../../components/Cards/ScheduleCard";
// import * as colors from "../../../../constains/colors";
import {
  Button,
  LeagueCard,
  ProfileCard,
  ScheduleCard,
  LeagueCardSkeleton,
  ScheduleCardSkeleton,
} from "../../../../components/index";
import { MontageLayout } from "../montages/Montage";
import axiosClient from "./api/index";

const fetcher = (path: string, leagueId?: string) => {
  const config: AxiosRequestConfig<any> = {
    params: {
      hl: "en-US",
      leagueId,
    },
  };

  return axiosClient
    .get(`https://esports-api.lolesports.com/persisted/gw${path}`, config)
    .then((r: AxiosResponse<unknown, any>) => r);
};

const Discover = () => {
  const history = useHistory();
  const { path } = useRouteMatch();
  const [leagueId, setLeagueId] = React.useState<string | null>(null);
  // const [leagueStatus,setLeagueStatus] = React.useState<boolean>(false);
  // const [scheduleStatus,setScheduleStatus] = React.useState<boolean>(false);

  const { data: dataLeague, error: errorLeague } = useSWR(
    "/getLeagues",
    fetcher
  );

  const { data, error } = useSWR(["/getSchedule", leagueId], fetcher);
  const RenderSchedules = () => {
    if (error) {
      console.log({ scheduleErr: error });
      return <h1>Error </h1>;
    }
    if (!data) {
      return <h1>Loading ...</h1>;
    } else {
      const vl: any = data;
      // console.log(data);
      const getDay = (time: string): string =>
        moment(time).format("DD MM YYYY");
      let currentTime: string = "";
      return (
        <>
          {vl.data.data?.schedule?.events?.map((rs: Event, index: number) => {
            if (getDay(rs.startTime) !== getDay(currentTime)) {
              currentTime = rs.startTime;
              return (
                <>
                  <DayText>{moment(rs.startTime).format("DD MMMM")}</DayText>
                  <ScheduleCard key={rs.match.id} event={rs} />
                </>
              );
            }
            return <ScheduleCard key={rs?.match?.id} event={rs} />;
          })}
        </>
      );
    }
  };
  const RenderLeagues = () => {
    if (errorLeague) {
      console.log({ leagueErr: error });
      return <h1>Error</h1>;
    }
    if (!dataLeague) return <h1>Loading ...</h1>;
    const vl: any = dataLeague.data;
    // console.log(dataLeague);

    return (
      <>
        {vl.data?.leagues?.map((league: TLeagueCard, index: number) => {
          const priority = league.displayPriority.status;
          if (priority === "hidden" || priority === "not_selected") {
            return null;
          }

          return (
            <>
              <LeagueCard
                active={
                  leagueId
                    ? !!(leagueId === league.id)
                    : !!(priority === "force_selected")
                }
                key={league.id}
                league={league}
                onClick={() => {
                  setLeagueId(league.id);
                }}
              />
            </>
          );
        })}
      </>
    );
  };
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
          <span>Esport Today</span>
        </div>

        <div className="discover--section--filter">
          {dataLeague ? (
            <RenderLeagues key="render-leagues" />
          ) : (
            <LeagueCardSkeleton count={3} />
          )}
        </div>
        {/*  */}
        <div className="discover--section--schedule">
          {data ? (
            <RenderSchedules key="render-schedules" />
          ) : (
            <ScheduleCardSkeleton count={3} />
          )}
        </div>
      </div>
    </Wrapper>
  );
};
export default Discover;

const DayText = styled.div`
  display: flex;
  margin-top: 20px;
  align-items: center;
  width: 100%;
  &:after {
    content: "";
    margin-left: 20px;
    width: 100%;
    height: 1px;
    flex: 1;
    background: ${(p) => p.theme.gray};
  }
`;
const Wrapper = styled(MontageLayout)`
  .discover--section {
    display: flex;
    flex-direction: column;
    gap: 30px 0;
    &--filter {
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
