import React from "react";
import device from "../../../../constains/divice";
import styled from "styled-components";
// import * as colors from "../../../../constains/colors";
import { VideoCard } from "../../../../components/index";

const Layout = styled.div`
  gap: 1.5rem;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  .montage-search--item {
  }
  @media ${device.desktopL} {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;
const MontageSearch = () => {
  return (
    <div className="section">
      <div className="section--content">
        <Layout>
          {[...Array(8).keys()].map((i) => (
            <VideoCard
              key={i}
              title="Video Card Title"
              author={"Ken"}
              src={`https://source.unsplash.com/random?sig=88${i}`}
              tags={["Category 1", "Category 2"]}
            />
          ))}
        </Layout>
      </div>
    </div>
  );
};

export default MontageSearch;
