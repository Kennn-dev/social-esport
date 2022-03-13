import React, { Suspense } from "react";
import styled from "styled-components";
import { useLocation } from "react-router";
// import * as colors from "../../../../constains/colors";
import { Tabs, Loader } from "../../../../components/index";
import { MontageLayout } from "../montages/Montage";
import { TabsItem } from "../../../../types/tabs";
const Wrapper = styled(MontageLayout)`
  position: relative;
  min-height: 100vh;
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
    height: 70vh;

    &--main-video {
      flex: 1;
      height: 100%;
      padding: 15px;
    }
    &--list {
      flex-basis: 50%;
      display: flex;
      height: inherit;
      /* justify-content: space-around; */
      flex-direction: column;
      height: inherit;
      overflow-y: auto;
    }
  }
  .people {
    display: flex;
    width: 70%;
    flex-direction: column;
    gap: 20px 0;

    &--bottom {
      margin: 0 auto;
      width: fit-content;

      cursor: pointer;
      /* margin: 2rem auto 0 auto; */
      color: #ff7e21;
      font-weight: bold;
      padding: 0.75rem 1.5rem;
      border-radius: 8px;

      &:hover {
        background-color: ${(p) => p.theme.bgBlock2};
      }
    }
  }
  .post-section {
    width: 70%;
    display: flex;
    flex-direction: column;
    gap: 20px 0;
  }
`;
const LoadWrapper = styled.div`
  position: absolute;
  top: 50%;
  right: 40%;
  transform: translate(-50%, -50%);
`;
function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const tabArr: TabsItem[] = [
  { value: "all", label: "All Results" },
  { value: "montages", label: "Montages" },
  { value: "people", label: "People" },
  { value: "post", label: "Post" },
];
const Search = () => {
  const MontageSearch = React.lazy(() => import("./MontageSearch"));
  const AllSearch = React.lazy(() => import("./AllSearch"));
  const PeopleSearch = React.lazy(() => import("./PeopleSearch"));
  const PostSearch = React.lazy(() => import("./PostSearch"));

  const query = useQuery();

  const [tab, setTab] = React.useState<TabsItem>(tabArr[0]);
  const handleChangeTabs = (vl: TabsItem) => {
    console.log(vl);
    setTab(vl);
  };
  const renderContent = (param: TabsItem): React.ReactNode => {
    switch (param.value) {
      case "all":
        return <AllSearch />;
      case "montages":
        return <MontageSearch />;
      case "people":
        return <PeopleSearch />;
      case "post":
        return <PostSearch />;
      default:
        return <AllSearch />;
    }
  };
  return (
    <Wrapper>
      <div className="header--text">Search for "{query.get("query")}" </div>
      <Tabs tabs={tabArr} currentValue={tab} onChange={handleChangeTabs} />
      <Suspense
        fallback={
          <LoadWrapper>
            <Loader />
          </LoadWrapper>
        }
      >
        {(() => renderContent(tab))()}
      </Suspense>
    </Wrapper>
  );
};

export default Search;
