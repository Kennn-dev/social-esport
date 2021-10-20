import React from "react";
import styled from "styled-components";
// import * as colors from "../../../../constains/colors";
import { ProfileCardHorizontal } from "../../../../components/index";

const Layout = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 30px 0;
`;
const PeopleSearch = () => {
  return (
    <div className="section">
      <div className="section--content">
        <Layout>
          {[...Array(8).keys()].map((i) => (
            <ProfileCardHorizontal
              key={i}
              avatar={`https://source.unsplash.com/random?sig=88${i}`}
            />
          ))}{" "}
        </Layout>
      </div>
    </div>
  );
};

export default PeopleSearch;
