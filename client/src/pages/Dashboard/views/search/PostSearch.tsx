import React from "react";
import styled from "styled-components";
// import * as colors from "../../../../constains/colors";
import { PostCardHorizontal } from "../../../../components/index";

const Layout = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 30px 0;
`;
const PostSearch = () => {
  return (
    <div className="section">
      <div className="section--content">
        <Layout>
          {[...Array(8).keys()].map((i) => (
            <PostCardHorizontal
              key={i}
              image={`https://source.unsplash.com/random?sig=88${i}`}
            />
          ))}{" "}
        </Layout>
      </div>
    </div>
  );
};

export default PostSearch;
