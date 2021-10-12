import React from "react";
import styled from "styled-components";

import * as colors from "../../../../constains/colors";
import { ProfileCard, LeftIcon } from "../../../../components/index";
import { MontageLayout } from "../montages/Montage";
import { useHistory } from "react-router-dom";

const PeopleDiscover = () => {
  const history = useHistory();
  const goBack = () => {
    history.goBack();
  };
  return (
    <Layout>
      <div className="people--title">
        <LeftIcon onClick={goBack} />
        <div className="header--text">People</div>
      </div>
      <div className="people--list">
        {[...Array(16).keys()].map((i) => (
          <ProfileCard
            key={i}
            src={`https://source.unsplash.com/random?sig=88${i}`}
          />
        ))}
      </div>
    </Layout>
  );
};
export default PeopleDiscover;
const Layout = styled(MontageLayout)`
  .people--title {
    display: flex;
    align-items: center;
    svg {
      width: 40px;
      height: 40px;
      margin-right: 20px;
      cursor: pointer;
      &:hover {
        stroke: ${colors.white};
      }
    }
  }

  .people--list {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 30px;
  }
`;
